<div class="visit-element">
    <div ng-show="include.label" class="header">
        <strong>{{ include.label | translate }}</strong>
    </div>
    <div class="content" ng-include="include.template"></div>
</div>