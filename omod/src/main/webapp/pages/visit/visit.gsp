<%
    ui.decorateWith("appui", "standardEmrPage")

    ui.includeCss("uicommons", "ngDialog/ngDialog.min.css")
    ui.includeCss("pihcore", "visit/visit.css")
    ui.includeCss("orderentryui", "drugOrders.css")

    ui.includeJavascript("uicommons", "angular.min.js")
    ui.includeJavascript("uicommons", "angular-ui/ui-bootstrap-tpls-0.13.0.js")
    ui.includeJavascript("uicommons", "angular-ui/angular-ui-router.min.js")
    ui.includeJavascript("uicommons", "ngDialog/ngDialog.min.js")
    ui.includeJavascript("uicommons", "angular-resource.min.js")
    ui.includeJavascript("uicommons", "angular-common.js")
    ui.includeJavascript("uicommons", "angular-app.js")
    ui.includeJavascript("uicommons", "angular-translate.min.js")
    ui.includeJavascript("uicommons", "angular-translate-loader-url.min.js")
    ui.includeJavascript("uicommons", "services/visitService.js")
    ui.includeJavascript("uicommons", "services/encounterService.js")
    ui.includeJavascript("uicommons", "services/obsService.js")
    ui.includeJavascript("uicommons", "services/orderService.js")
    ui.includeJavascript("uicommons", "services/drugService.js")
    ui.includeJavascript("uicommons", "services/session.js")
    ui.includeJavascript("uicommons", "services/appFrameworkService.js")
    ui.includeJavascript("uicommons", "model/user-model.js")
    ui.includeJavascript("uicommons", "model/encounter-model.js")
    ui.includeJavascript("uicommons", "model/visit-model.js")
    ui.includeJavascript("uicommons", "filters/display.js")
    ui.includeJavascript("uicommons", "filters/serverDate.js")
    ui.includeJavascript("uicommons", "directives/select-drug.js")
    ui.includeJavascript("uicommons", "directives/select-concept-from-list.js")
    ui.includeJavascript("uicommons", "directives/select-order-frequency.js")
    ui.includeJavascript("uicommons", "handlebars/handlebars.js")
    ui.includeJavascript("uicommons", "moment.min.js")
    ui.includeJavascript("orderentryui", "order-model.js")
    ui.includeJavascript("orderentryui", "order-entry.js")
    ui.includeJavascript("pihcore", "visit/constants.js")
    ui.includeJavascript("pihcore", "visit/filters.js")
    ui.includeJavascript("pihcore", "visit/visit-templates.js")
    ui.includeJavascript("pihcore", "visit/allergies.js")
    ui.includeJavascript("pihcore", "visit/orders.js")
    ui.includeJavascript("pihcore", "visit/vaccinations.js")
    ui.includeJavascript("pihcore", "visit/visit.js")
    ui.includeJavascript("pihcore", "visit/encounterTransaction.js")
    ui.includeJavascript("pihcore", "services/configService.js")
%>

<script type="text/javascript">
    var breadcrumbs = [
        { icon: "icon-home", link: '/' + OPENMRS_CONTEXT_PATH + '/index.htm' },
        { label: "${ ui.escapeJs(patient.formattedName) }", link: "${ui.escapeJs(ui.pageLink("coreapps", "clinicianfacing/patient", [patientId:patient.patient.uuid, app:"pih.app.clinicianDashboard"]))}" },
        { label: "${ui.message("coreapps.patientDashBoard.visits")}" }
    ];

    emr.loadGlobalProperties(["order.drugRoutesConceptUuid", "order.drugDosingUnitsConceptUuid", "order.drugDispensingUnitsConceptUuid",
        "order.durationUnitsConceptUuid", "order.testSpecimenSourcesConceptUuid"]);

</script>

${ ui.includeFragment("coreapps", "patientHeader", [ patient: patient.patient ]) }

<div id="visit-app" ng-controller="VisitController">

    <div ui-view></div>

</div>

<script type="text/javascript">
    angular.module('visit').value('patientUuid', '${ patient.patient.uuid }').value('visitUuid', '${ visit?.uuid }').value('locale', '${ locale }');
    angular.bootstrap("#visit-app", [ "visit" ])

    jq(function() {
        // make sure we reload the page if the location is changes; this custom event is emitted by by the location selector in the header
        jq(document).on('sessionLocationChanged', function() {
            window.location.reload();
        });
    });

</script>