package org.openmrs.module.pihcore.identifier.peru;

import org.openmrs.Location;
import org.openmrs.PatientIdentifierType;
import org.openmrs.module.idgen.AutoGenerationOption;
import org.openmrs.module.idgen.SequentialIdentifierGenerator;
import org.openmrs.module.idgen.service.IdentifierSourceService;
import org.openmrs.module.metadatadeploy.MetadataUtils;
import org.openmrs.module.pihcore.config.Config;
import org.openmrs.module.pihcore.metadata.peru.PeruPatientIdentifierTypes;

public class ConfigurePeruIdGenerators {

    public static final String PERU_ID_LOCATION_UUID = "48f7f4e1-a473-4b54-a2fa-4e9be2915388";
    public static final String PERU_PRIMARY_IDENTIFIER_SOURCE_UUID = "e8d964a9-61bc-4517-bc28-cf7021d37f11";

    public static void configureGenerators(IdentifierSourceService identifierSourceService, Config config) {

        Location identifierLocation = MetadataUtils.existing(Location.class, PERU_ID_LOCATION_UUID);

        SequentialIdentifierGenerator peruPrimaryIdentifierSource = (SequentialIdentifierGenerator)
                identifierSourceService.getIdentifierSourceByUuid(PERU_PRIMARY_IDENTIFIER_SOURCE_UUID);
        if (peruPrimaryIdentifierSource == null) {
            peruPrimaryIdentifierSource = new SequentialIdentifierGenerator();
        }

        peruPrimaryIdentifierSource.setName("SES Primary Identifier Source");
        peruPrimaryIdentifierSource.setDescription("Primary Identifier Generator for PIH Peru / SES");
        peruPrimaryIdentifierSource.setIdentifierType(MetadataUtils.existing(PatientIdentifierType.class,
                PeruPatientIdentifierTypes.PERU_EMR_ID.uuid()));
        String prefixForSite = config.getPrimaryIdentifierPrefix();
        peruPrimaryIdentifierSource.setPrefix(prefixForSite);
        peruPrimaryIdentifierSource.setMinLength(8 + peruPrimaryIdentifierSource.getPrefix().length());
        peruPrimaryIdentifierSource.setMaxLength(8 + peruPrimaryIdentifierSource.getPrefix().length());
        peruPrimaryIdentifierSource.setBaseCharacterSet("0123456789");
        peruPrimaryIdentifierSource.setFirstIdentifierBase("00000001");
        peruPrimaryIdentifierSource.setUuid(PERU_PRIMARY_IDENTIFIER_SOURCE_UUID);

        identifierSourceService.saveIdentifierSource(peruPrimaryIdentifierSource);

        AutoGenerationOption autoGenerationOption = identifierSourceService.getAutoGenerationOption(
                peruPrimaryIdentifierSource.getIdentifierType(), identifierLocation);

        if (autoGenerationOption == null) {
            autoGenerationOption = new AutoGenerationOption();
        }

        autoGenerationOption.setIdentifierType(MetadataUtils.existing(PatientIdentifierType.class,
                PeruPatientIdentifierTypes.PERU_EMR_ID.uuid()));
        autoGenerationOption.setSource(peruPrimaryIdentifierSource);
        autoGenerationOption.setAutomaticGenerationEnabled(true);
        autoGenerationOption.setManualEntryEnabled(false);
        autoGenerationOption.setLocation(identifierLocation);

        identifierSourceService.saveAutoGenerationOption(autoGenerationOption);
    }


}
