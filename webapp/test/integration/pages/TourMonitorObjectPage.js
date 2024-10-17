sap.ui.define(['sap/fe/test/ObjectPage'], function(ObjectPage) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ObjectPage(
        {
            appId: 'hab.zvaadfvk00007',
            componentId: 'TourMonitorObjectPage',
            contextPath: '/TourMonitor'
        },
        CustomPageDefinitions
    );
});