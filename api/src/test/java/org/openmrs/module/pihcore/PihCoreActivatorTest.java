package org.openmrs.module.pihcore;

import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;
import org.openmrs.Concept;
import org.openmrs.api.AdministrationService;
import org.openmrs.api.context.Context;
import org.openmrs.module.addresshierarchy.AddressField;
import org.openmrs.module.addresshierarchy.AddressHierarchyLevel;
import org.openmrs.module.addresshierarchy.service.AddressHierarchyService;
import org.openmrs.module.emr.EmrConstants;
import org.openmrs.module.metadatadeploy.MetadataUtils;
import org.openmrs.module.metadatadeploy.api.MetadataDeployService;
import org.openmrs.module.metadatadeploy.bundle.MetadataBundle;
import org.openmrs.module.metadatadeploy.bundle.Requires;
import org.openmrs.module.metadatadeploy.bundle.VersionedMetadataBundle;
import org.openmrs.module.pihcore.deploy.bundle.ConceptsFromMetadataSharing;
import org.openmrs.module.pihcore.deploy.bundle.core.concept.ClinicalConsultationConcepts;
import org.openmrs.module.pihcore.deploy.bundle.core.concept.CommonConcepts;
import org.openmrs.module.pihcore.deploy.bundle.core.concept.SocioEconomicConcepts;
import org.openmrs.module.pihcore.deploy.bundle.haiti.HaitiAddressBundle;
import org.openmrs.module.pihcore.deploy.bundle.haiti.HaitiMetadataBundle;
import org.openmrs.module.pihcore.setup.CloseStaleVisitsSetup;
import org.openmrs.scheduler.SchedulerService;
import org.openmrs.scheduler.TaskDefinition;
import org.openmrs.test.BaseModuleContextSensitiveTest;
import org.openmrs.test.SkipBaseSetup;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;

import java.util.ArrayList;
import java.util.List;
import java.util.Properties;

import static org.hamcrest.Matchers.greaterThan;
import static org.hamcrest.core.Is.is;
import static org.hamcrest.core.IsNull.notNullValue;
import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertThat;
import static org.junit.Assert.assertTrue;

/**
 * This is an integration test that loads all metadata bundles together
 */
@SkipBaseSetup
public class PihCoreActivatorTest extends BaseModuleContextSensitiveTest {

    @Autowired
    private MetadataDeployService deployService;

    @Autowired
    private ConceptsFromMetadataSharing conceptsFromMetadataSharing;

    @Autowired
    private HaitiMetadataBundle haitiMetadataBundle;

    @Autowired
    @Qualifier("adminService")
    private AdministrationService administrationService;

    @Autowired
    private SchedulerService schedulerService;

    @Override
    public Properties getRuntimeProperties() {
        Properties p = super.getRuntimeProperties();
        p.setProperty("pih.config", "pihcore");
        return p;
    }

    @Before
    public void setUp() throws Exception {
        initializeInMemoryDatabase();
        executeDataSet("openmrsCoreDataset.xml");
        authenticate();
    }

    @Test
    public void testMetadataBundles() throws Exception {

        deployService.installBundle(conceptsFromMetadataSharing);
        deployService.installBundle(haitiMetadataBundle);

        // test a few random concepts
        assertThat(MetadataUtils.existing(Concept.class, CommonConcepts.Concepts.YES).getName().getName(), is("Oui"));

        Concept mainActivity = MetadataUtils.existing(Concept.class, SocioEconomicConcepts.Concepts.MAIN_ACTIVITY);
        assertThat(mainActivity.getDatatype().getName(), is("Coded"));
        assertThat(mainActivity.getAnswers().size(), greaterThan(5));

        Concept construct = MetadataUtils.existing(Concept.class, ClinicalConsultationConcepts.Concepts.PAST_MEDICAL_HISTORY_CONSTRUCT);
        assertThat(construct.getUuid(), is(ClinicalConsultationConcepts.Concepts.PAST_MEDICAL_HISTORY_CONSTRUCT));
        assertThat(construct.getConceptSets().size(), is(3));

        construct = MetadataUtils.existing(Concept.class, ClinicalConsultationConcepts.Concepts.FAMILY_HISTORY_CONSTRUCT);
        assertThat(construct.getUuid(), is(ClinicalConsultationConcepts.Concepts.FAMILY_HISTORY_CONSTRUCT));
        assertThat(construct.getConceptSets().size(), is(4));

        // make sure everything installed at the version we expect
        for (Class<? extends MetadataBundle> bundleType : getExpectedBundles(haitiMetadataBundle.getClass())) {
            if (VersionedMetadataBundle.class.isAssignableFrom(bundleType)) {
                VersionedMetadataBundle bundle = (VersionedMetadataBundle)Context.getRegisteredComponents(bundleType).get(0);
                String gpValue = administrationService.getGlobalProperty("metadatadeploy.bundle.version." + bundle.getClass().getName());
                assertThat(gpValue, is("" + bundle.getVersion()));
            }
        }

        // test the address hierarchy
        verifyAddressHierarchyLevelsCreated();
        verifyAddressHierarchyLoaded();
    }

    protected List<Class<? extends MetadataBundle>> getExpectedBundles(Class<? extends MetadataBundle> type) {
        List<Class<? extends MetadataBundle>> bundles = new ArrayList<Class<? extends MetadataBundle>>();
        bundles.add(type);
        Requires requires = type.getAnnotation(Requires.class);
        if (requires != null) {
            for (Class<? extends MetadataBundle> requiredBundle : requires.value()) {
                bundles.addAll(getExpectedBundles(requiredBundle));
            }
        }
        return bundles;
    }

    @Test
    public void testSetupCloseStateVisits() throws Exception {
        CloseStaleVisitsSetup.setupCloseStaleVisitsTask();

        // verify scheduled task is started
        TaskDefinition closeStaleVisitsTask = schedulerService.getTaskByName(EmrConstants.TASK_CLOSE_STALE_VISITS_NAME);
        assertThat(closeStaleVisitsTask, is(notNullValue()));
        assertThat(closeStaleVisitsTask.getStarted(), is(true));
        assertThat(closeStaleVisitsTask.getStartOnStartup(), is(true));
        assertTrue(closeStaleVisitsTask.getSecondsUntilNextExecutionTime() <= 300);
    }

    private void verifyAddressHierarchyLevelsCreated() throws Exception {
        AddressHierarchyService ahService = Context.getService(AddressHierarchyService.class);

        // assert that we now have six address hierarchy levels
        assertEquals(new Integer(6), ahService.getAddressHierarchyLevelsCount());

        // make sure they are mapped correctly
        List<AddressHierarchyLevel> levels = ahService.getOrderedAddressHierarchyLevels(true);
        assertEquals(AddressField.COUNTRY, levels.get(0).getAddressField());
        assertEquals(AddressField.STATE_PROVINCE, levels.get(1).getAddressField());
        assertEquals(AddressField.CITY_VILLAGE, levels.get(2).getAddressField());
        assertEquals(AddressField.ADDRESS_3, levels.get(3).getAddressField());
        assertEquals(AddressField.ADDRESS_1, levels.get(4).getAddressField());
        assertEquals(AddressField.ADDRESS_2, levels.get(5).getAddressField());

    }

    private void verifyAddressHierarchyLoaded() throws Exception {
        AddressHierarchyService ahService = Context.getService(AddressHierarchyService.class);

        // we should now have 26000+ address hierarchy entries
        Assert.assertTrue(ahService.getAddressHierarchyEntryCount() > 26000);

        assertEquals(2, ahService.getAddressHierarchyEntriesAtTopLevel().size());
        assertEquals("Yon lot peyi", ahService.getAddressHierarchyEntriesAtTopLevel().get(0).getName());
        assertEquals("Haiti", ahService.getAddressHierarchyEntriesAtTopLevel().get(1).getName());
        assertEquals("9", Context.getAdministrationService().getGlobalProperty("metadatadeploy.bundle.version." + HaitiAddressBundle.class.getName()));
    }

}
