
define([
    'ko',
    'Magento_Ui/js/form/element/abstract',
    'Demo/model/address/addressData',
    'Demo/model/address/addressFieldsMap',
    'Demo/model/address/valueExtractor'
], function (ko, Element, addressData, addressFieldsMap, valueExtractor) {
    "use strict";

    return Element.extend({
        initialize: function () {
            this._super();
            this.visible(false);
            const form = addressData.getForm(this.autocomplete_id);

            form.isShowDetails.subscribe((isEnterManually) => {
                this.visible(isEnterManually);
            });

            form.address.subscribe((address) => {
                if (addressFieldsMap.map[this.inputName]) {
                    this.value(valueExtractor(address, addressFieldsMap.map[this.inputName]));
                }
            });

            return this;
        }
    });
});
