package org.openmrs.module.pihcore.deploy.bundle.core.program;

import org.openmrs.module.metadatadeploy.bundle.AbstractMetadataBundle;
import org.openmrs.module.pihcore.metadata.core.program.MCHProgram;
import org.springframework.stereotype.Component;

@Component
public class MCHProgramBundle extends AbstractMetadataBundle {

    @Override
    public void install() throws Exception {
        log.info("Installing MCH program");
        install(MCHProgram.MCH);
    }
}
