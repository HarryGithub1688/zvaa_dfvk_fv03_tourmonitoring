sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'hab/zvaadfvk00007/test/integration/FirstJourney',
		'hab/zvaadfvk00007/test/integration/pages/TourMonitorList',
		'hab/zvaadfvk00007/test/integration/pages/TourMonitorObjectPage',
		'hab/zvaadfvk00007/test/integration/pages/TourMonitorCustomerObjectPage'
    ],
    function(JourneyRunner, opaJourney, TourMonitorList, TourMonitorObjectPage, TourMonitorCustomerObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('hab/zvaadfvk00007') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheTourMonitorList: TourMonitorList,
					onTheTourMonitorObjectPage: TourMonitorObjectPage,
					onTheTourMonitorCustomerObjectPage: TourMonitorCustomerObjectPage
                }
            },
            opaJourney.run
        );
    }
);