
define([
    'ko',
    'Magento_Ui/js/form/element/select',
    'Demo/model/address/addressData',
], function (ko, Element, addressData) {
    "use strict";

    return Element.extend({
        initialize: function () {
            this._super();
            this.form = addressData.getForm(this.autocomplete_id);
            this.form.country(this.value());
            this.value.subscribe((value) => {
                this.form.country(value);
            });

            return this;
        }
    });
});
