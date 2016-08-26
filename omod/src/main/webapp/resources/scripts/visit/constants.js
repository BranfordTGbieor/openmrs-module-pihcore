angular.module('constants', [])
    .value('DatetimeFormats', {
        date: "d-MMM-yy",
        time: "hh:mm a",
        datetime: "d-MMM-yy (hh:mm a)"
    })

    .value('Concepts', {
        yes: {
            uuid: "3cd6f600-26fe-102b-80cb-0017a47871b2"
        },
        no: {
            uuid: "3cd6f86c-26fe-102b-80cb-0017a47871b2"
        },
        unknown: {
            uuid: "3cd6fac4-26fe-102b-80cb-0017a47871b2"
        },
        diagnosisConstruct: {
            uuid: "159947AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"
        },
        codedDiagnosis: {
            uuid: "226ed7ad-b776-4b99-966d-fd818d3302c2"
        },
        nonCodedDiagnosis: {
            uuid: "970d41ce-5098-47a4-8872-4dd843c0df3f"
        },
        diagnosisOrder: {
            uuid: "159946AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"
        },
        primaryOrder: {
            uuid: "159943AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"
        },
        diagnosisCertainty: {
            uuid: "3cd9ef9a-26fe-102b-80cb-0017a47871b2"
        },
        dispositionConstruct: {
            uuid: "164e9e1b-d26c-4a93-9bdf-af1ce4ae8fce"
        },
        disposition: {
            uuid: "c8b22b09-e2f2-4606-af7d-e52579996de3"
        },
        dispositionComment: {
            uuid: "b4457f1e-ef60-484c-b96a-08180a347e58"
        },
        transferOutLocation: {
            uuid: "113a5ce0-6487-4f45-964d-2dcbd7d23b67"
        },
        dateOfDeath: {
            uuid: "3cde64e4-26fe-102b-80cb-0017a47871b2"
        },
        admissionLocation: {
            uuid: "f3e04276-2db0-4181-b937-d73275dc1b15"
        },
        transferLocation: {
            uuid: "a96352e3-3afc-418b-b79f-3290fc26a3b3"
        },
        returnVisitDate: {
            uuid: "	3ce94df0-26fe-102b-80cb-0017a47871b2"
        },
        clinicalImpressions: {
            uuid: "3cd9d956-26fe-102b-80cb-0017a47871b2"
        },
        typeOfVisit: {
            uuid: "e2964359-790a-419d-be53-602e828dcdb9"
        },
        paymentInformation: {
            uuid: "7a6330f1-9503-465c-8d63-82e1ad914b47"
        },
        systolicBloodPressure: {
            uuid: "3ce934fa-26fe-102b-80cb-0017a47871b2"
        },
        diastolicBloodPressure: {
            uuid: "3ce93694-26fe-102b-80cb-0017a47871b2"
        },
        temperature: {
            uuid: "3ce939d2-26fe-102b-80cb-0017a47871b2"
        },
        height: {
            uuid: "3ce93cf2-26fe-102b-80cb-0017a47871b2"
        },
        weight: {
            uuid: "3ce93b62-26fe-102b-80cb-0017a47871b2"
        },
        heartRate: {
            uuid: "3ce93824-26fe-102b-80cb-0017a47871b2"
        },
        respiratoryRate: {
            uuid: "3ceb11f8-26fe-102b-80cb-0017a47871b2"
        },
        oxygenSaturation: {
            uuid: "3ce9401c-26fe-102b-80cb-0017a47871b2"
        },
        pastMedicalHistoryConstruct: {
            uuid: "1633AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"
        },
        pastMedicalHistoryFinding: {
            uuid: "1628AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"
        },
        pastMedicalHistoryPresence: {
            uuid: "1729AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"
        },
        pastMedicalHistoryComment: {
            uuid: "160221AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"
        },
        familyHistoryConstruct: {
            uuid: "160593AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"
        },
        familyHistoryRelative: {
            uuid: "3ce18156-26fe-102b-80cb-0017a47871b2"
        },
        familyHistoryDiagnosis: {
            uuid: "160592AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"
        },
        familyHistoryPresence: {
            uuid: "1729AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"
        },
        familyHistoryComments: {
            uuid: "160618AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"
        },
        vaccinationHistoryConstruct: {
            uuid: "74260088-9c83-41d5-b92b-03a41654daaf"
        },
        vaccinationGiven: {
            uuid: "2dc6c690-a5fe-4cc4-97cc-32c70200a2eb"
        },
        vaccinationSequenceNumber: {
            uuid: "ef6b45b4-525e-4d74-bf81-a65a41f3feb9"
        },
        vaccinationDate: {
            uuid: "1410AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"
        },
        bcgVaccination: {
            uuid: "3cd4e004-26fe-102b-80cb-0017a47871b2"
        },
        polioVaccination: {
            uuid: "3cd42c36-26fe-102b-80cb-0017a47871b2"
        },
        pentavalentVaccination: {
            uuid: "1423AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"
        },
        rotavirusVaccination: {
            uuid: "83531AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"
        },
        measlesRubellaVaccination: {
            uuid: "162586AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"
        },
        diptheriaTetanusVaccination: {
            uuid: "3ccc6b7c-26fe-102b-80cb-0017a47871b2"
        },
        zlLabOrders: {
            uuid: "d4d844de-50bd-4299-8575-1ce59b53908b"
        },
        hemoglobin: {
            uuid: "3ccc7158-26fe-102b-80cb-0017a47871b2"
        },
        hematocrit: {
            uuid: "3cd69a98-26fe-102b-80cb-0017a47871b2"
        },
        bloodtyping: {
            uuid: "3ccf4090-26fe-102b-80cb-0017a47871b2"
        },
        clinicalManagementPlanComment: {
            uuid: "162749AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"
        },
        returnVisitDate: {
            uuid: "3ce94df0-26fe-102b-80cb-0017a47871b2"
        },
        supplementHistoryConstruct: {
            uuid: "2fe2b0ad-5b83-40a9-9b95-762afa663405"
        },
        supplementReceived: {
            uuid: "40258d8e-6ea5-46f4-b8e7-7cb302f1393f"
        },
        vitaminA: {
            uuid: "ed69b6e2-63c6-416d-b471-f95c9c5e8847"
        },
        ferrousSulfate: {
            uuid: "3ccee960-26fe-102b-80cb-0017a47871b2"
        },
        iode: {
            uuid: "3669eb6a-fe41-44e3-8263-10993c92e802"
        },
        deworming: {
            uuid: "d171e697-bead-4ca9-b5e0-906b8fa769ea"
        },
        zinc: {
            uuid: "75015399-72f0-4ee4-b45a-7efd9ede2051"
        }
    })

    .value('EncounterTypes', {
        patientRegistration: {
            uuid: "873f968a-73a8-4f9c-ac78-9f4778b751b6"
        },
        checkIn: {
            uuid: "55a0d3ea-a4d7-4e88-8f01-5aceb2d3c61b"
        },
        payment: {
            uuid: "f1c286d0-b83f-4cd4-8348-7ea3c28ead13"
        },
        vitals: {
            uuid: "4fb47712-34a6-40d2-8ed3-e153abbd25b7"
        },
        primaryCareVisit: {
            uuid: "1373cf95-06e8-468b-a3da-360ac1cf026d"
        },
        consultation: {
            uuid: "92fd09b4-5335-4f7e-9f63-b2a663fd09a6"
        },
        primaryCarePedsInitialConsult: {
            uuid: "5b812660-0262-11e6-a837-0800200c9a66"
        },
        primaryCarePedsFollowupConsult: {
            uuid: "229e5160-031b-11e6-a837-0800200c9a66"
        },
        primaryCareAdultInitialConsult: {
            uuid: "27d3a180-031b-11e6-a837-0800200c9a66"
        },
        primaryCareAdultFollowupConsult: {
            uuid: "27d3a181-031b-11e6-a837-0800200c9a66"
        },
        oncologyConsult: {
            uuid: "035fb8da-226a-420b-8d8b-3904f3bedb25"
        },
        oncologyInitialVisit: {
            uuid: "f9cfdf8b-d086-4658-9b9d-45a62896da03"
        },
        chemotherapySession: {
            uuid: "828964fa-17eb-446e-aba4-e940b0f4be5b"
        },
        medicationDispensed: {
            uuid: "8ff50dea-18a1-4609-b4c9-3f8f2d611b84"
        },
        postOperativeNote: {
            uuid: "c4941dee-7a9b-4c1c-aa6f-8193e9e5e4e5"
        },
        transfer: {
            uuid: "436cfe33-6b81-40ef-a455-f134a9f7e580"
        },
        admission: {
            uuid: "260566e1-c909-4d61-a96f-c1019291a09d"
        },
        cancelAdmission: {
            uuid: "edbb857b-e736-4296-9438-462b31f97ef9"
        },
        exitFromCare: {
            uuid: "b6631959-2105-49dd-b154-e1249e0fbcd7"
        },
        labResults: {
            uuid: "4d77916a-0620-11e5-a6c0-1697f925ec7b"
        },
        radiologyOrder: {
            uuid: "1b3d1e13-f0b1-4b83-86ea-b1b1e2fb4efa"
        },
        radiologyStudy: {
            uuid: "5b1b4a4e-0084-4137-87db-dba76c784439"
        },
        radiologyReport: {
            uuid: "d5ca53a7-d3b5-44ac-9aa2-1491d2a4b4e9"
        },
        deathCertificate: {
            uuid: "1545d7ff-60f1-485e-9c95-5740b8e6634b"
        },
        ncdConsult: {
            uuid: "ae06d311-1866-455b-8a64-126a9bd74171"
        },
        mentalHealth: {
            uuid: "a8584ab8-cc2a-11e5-9956-625662870761"
        },
        edTriage: {
            uuid: "74cef0a6-2801-11e6-b67b-9e71128cae77"
        }

    })
    .value('EncounterRoles', {
        attendingSurgeon: {
            uuid: "9b135b19-7ebe-4a51-aea2-69a53f9383af"
        },
        consultingClinician: {
            uuid: "4f10ad1a-ec49-48df-98c7-1391c6ac7f05"
        }
    })

    .value('VisitAttributeTypes', {

    })