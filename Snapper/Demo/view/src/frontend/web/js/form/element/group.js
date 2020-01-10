define([
    'ko',
    'Magento_Ui/js/form/components/group',
    'Demo/model/address/addressData'
], function (ko, Element, addressData) {
    "use strict";

    return Element.extend({
        initialize: function () {
            this._super();
            this.visible(false);
            this.template = 'Snapper_Demo/form/element/group';

            addressData.getForm(this.autocomplete_id).isShowDetails.subscribe((isEnterManually) => {
                this.visible(isEnterManually);
            });

            return this;
        }
    });
});
