define([
    'jquery',
    'Demo/model/apiLoadListener',
    'Demo/model/google/initializer',
    'Demo/model/google/strategy/default',
    'Demo/model/address/addressData',
    'Demo/model/address/addressFieldsMap',
    'Demo/model/address/valueExtractor'
], function ($, loadListener, Initializer, Strategy, addressData, addressFieldsMap, valueExtractor) {
    const addressFinder = document.getElementById('address_finder');
    const country = document.getElementById('country');
    const form = addressData.addForm('address');

    form.country($(country).val());

    country.addEventListener('change', (event) => {
        const el = event.target;
        form.country(el.options[el.selectedIndex].value);
        addressFinder.value = '';
    }, false);

    form.address.subscribe((address) => {
        const $inputs = $('[data-address-fieldset]').find('[data-autocomplete]');

        const autocompleteField = function(index, el) {
            const id = el.getAttribute('id');
            if (addressFieldsMap.map[id]) {
                $(el).val(valueExtractor(address, addressFieldsMap.map[id]));
            }
        };

        $inputs.each(autocompleteField);
    });

    if (!loadListener.isGoogleApiLoaded()) {
        loadListener.subscribe((isApiLoaded) => {
            if (isApiLoaded) {
                new Initializer(addressFinder, Strategy, 'address');
            }
        });
    } else {
        new Initializer(addressFinder, Strategy, 'address');
    }
});
