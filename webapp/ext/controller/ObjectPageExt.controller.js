sap.ui.define([], function () {
	return sap.ui.controller("hab.zvaadfvk00007.ext.controller.ObjectPageExt", {
		
		onInit: function () {
        },
		
		onAfterRendering: function () {
			this.sortTables();
		},

		sortTables: function () {
			var customersToursTable = this.getView().byId("fe::table::_CustomersTours::LineItem");
			var tourMessagesTable = this.getView().byId("fe::table::_TourMessages::LineItem");

			customersToursTable.setSortConditions({sorters: [{name: 'anfnr', descending: false}]});
			tourMessagesTable.setSortConditions({sorters: [{name: 'anfnr', descending: false}]});
		}
		
	});
});

/*

*/