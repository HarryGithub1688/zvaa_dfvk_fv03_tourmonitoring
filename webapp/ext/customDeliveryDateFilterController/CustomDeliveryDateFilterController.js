sap.ui.define(["sap/ui/model/Filter", "sap/ui/model/FilterOperator"], function(Filter, FilterOperator) {
    "use strict";
    return {
        CustomDeliveryDateFilterFun: function(sValue) {
            //date picker format is changing depends of the zone and language
            var localLanguage = sap.ui.core.format.DateFormat.getDateInstance().oLocale.getLanguage();

            if (localLanguage === 'de') {
                //german format //-> shortYear.month.day to FullYear-month-day
                if (sValue.split(".")[2].length === 2) {
                    var formatValue = "20" + sValue.split(".")[2] + "-" + sValue.split(".")[1] + "-" + sValue.split(".")[0];
                } else {
                    var formatValue = sValue.split(".")[2] + "-" + sValue.split(".")[1] + "-" + sValue.split(".")[0];
                }
                return new Filter({path: "DeliveryDate", operator: FilterOperator.EQ, value1: formatValue});

            } else if (localLanguage === 'en') {
                //english format //-> shortYear/month/day to FullYear-month-day
                var formatValue = new Date(sValue); formatValue.setDate(formatValue.getDate()+1); formatValue = formatValue.toISOString().split("T")[0];
                return new Filter({path: "DeliveryDate", operator: FilterOperator.EQ, value1: formatValue});

            } else {
                //any format
                return sValue;
            }
        }
    };
});
