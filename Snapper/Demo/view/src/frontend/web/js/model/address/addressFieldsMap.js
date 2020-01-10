define([],function() {
    'use strict';

    class AddressFieldsMap {
        constructor(map = {}) {
            this.map = map;
        }

        setMap(map) {
            this.map = map;
        }
    }

    return new AddressFieldsMap();
});
