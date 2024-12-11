sap.ui.define([], function () {
	return sap.ui.controller("hab.zvaadfvk00007.ext.controller.ListReportExt", {
		
		onInit: function () {
			this.newFilterDate();
		},
		
		onAfterRendering: async function () {
			//data test
			/* debugger
			var oModel = this.getView().getModel();
			var entity = "/TourMonitor(TourId='1102',DeliveryDate=2024-12-10)/_CustomersTours";
			var resultModel = await oModel.bindContext(entity).requestObject(); */
		},

		newFilterDate: function () {
			var listReportFilter = this.getView().byId("fe::FilterBar::TourMonitor");
			var dateFilter = this.getView().byId("fe::FilterBar::TourMonitor::FilterField::DeliveryDate");
			var customDateFilter =  this.getView().byId("fe::FilterBar::TourMonitor::CustomFilterField::CustomDeliveryDateFilterController");

			customDateFilter.setLabel(this.getResourceBundle().getText("deliveryDate"));
			
			if (new Date().getHours() > 19) {
				var today = new Date();
				today.setDate(new Date().getDate()+1);
			} else {
				var today = new Date();
			}

			//deleting old filter
			dateFilter.destroy()
			
			//setting default value //date picker format is changing depends of the zone and language
            var localLanguage = sap.ui.core.format.DateFormat.getDateInstance().oLocale.getLanguage();
			
            if (localLanguage === 'de') {
				//german format
                var formatValue = sap.ui.core.format.DateFormat.getDateInstance().format(today);
				customDateFilter.getContent().getContent().setValue(formatValue);

            } else if (localLanguage === 'en') {
				//english format
				customDateFilter.getContent().getContent().setDateValue(today);

            } else {
				//any format
				//...

            }

			//fix i18n
			setTimeout(() => {
				var fixText = this.getView().byId("fe::ListReport").getTitle().getSnappedContent()[0].getText().replace("{i18n>deliveryDate}", this.getResourceBundle().getText("deliveryDate"));
				this.getView().byId("fe::ListReport").getTitle().getSnappedContent()[0].setText(fixText);
			}, 500);
		}
		
	});
});

/*

*/