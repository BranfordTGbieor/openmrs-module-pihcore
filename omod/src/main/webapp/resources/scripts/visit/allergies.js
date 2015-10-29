angular.module("allergies", [ "constants", "ngResource", "uicommons.common" ])
    .factory('Allergies', [ '$resource', function ($resource) {
        return $resource("/" + OPENMRS_CONTEXT_PATH  + "/ws/rest/v1/allergies/:uuid", {
            uuid: '@uuid'
        });
    }])

    .directive("currentAllergies", [ 'Allergies', function(Allergies) {
        return {
            scope: {
                patient: "=",
                visituuid: "="
            },
            controller: ["$scope", function($scope) {
                if ($scope.patient) {
                    $scope.allergies = Allergies.get({uuid: $scope.patient.uuid});
                }

                $scope.showAlergiesDetails = false;
                $scope.expandAllergies = function(showAlergiesDetails) {
                    $scope.showAlergiesDetails = !showAlergiesDetails;
                }
                $scope.goToPage = function(provider, page, opts) {
                    if (opts['returnUrl'] === undefined) {
                        opts['returnUrl'] = "/" + OPENMRS_CONTEXT_PATH + "/pihcore/visit/visit.page?visit=" + $scope.visituuid;
                    }
                    location.href = emr.pageLink(provider, page, opts);
                }

            }],
            templateUrl: "templates/allergiesList.page"
        }
    }]);