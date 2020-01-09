define(
    [
    "jquery",
    "mage/translate",
    "Magento_Ui/js/modal/modal",
    "googleMapPlaceLibrary"
    ],
    function ($, $t, modal) {
    "use strict";
      $.widget(
          'autofill.register',
          {
            _create: function () {
                var placeSearch, autocomplete;
                var componentForm = {
                  street_number: 'street_number',
                  route: 'street_name',
                  locality: 'city',
                  administrative_area_level_1: 'state',
                  country: 'country',
                  postal_code: 'postal_code'
                };
                $('#form-validate .fieldset.create.info').append($('.formcontainer'));
                initAutocomplete();

                function fillInAddress()
                        {
                // Get the place details from the autocomplete object.
                    var place = autocomplete.getPlace();
                    // Get each component of the address from the place details
                    // and fill the corresponding field on the form.
                    for (var i = 0; i < place.address_components.length; i++) {
                      var addressType = place.address_components[i].types[0];
                      console.log(addressType);
                      if (componentForm[addressType]) {
                        var val = place.address_components[i][componentForm[addressType]];
                        document.getElementById(addressType).value = val;
                      }
                    }
                }
                function geolocate () {
                    if (navigator.geolocation) {
                       navigator.geolocation.getCurrentPosition(function(position) {
                         var geolocation = {
                           lat: position.coords.latitude,
                           lng: position.coords.longitude
                         };
                         var circle = new google.maps.Circle({
                           center: geolocation,
                           radius: position.coords.accuracy
                         });
                         autocomplete.setBounds(circle.getBounds());
                       });
                     }
                }
                function initAutocomplete () {
                    autocomplete = new google.maps.places.Autocomplete(
                        /** @type {!HTMLInputElement} */(document.getElementById('autocomplete')),
                        {types: ['geocode']});

                    // When the user selects an address from the dropdown, populate the address
                    // fields in the form.
                    autocomplete.addListener('place_changed', fillInAddress);
                }

            },


          }
        );
      return $.autofill.register;
});
