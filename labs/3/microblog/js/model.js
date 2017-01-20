var model = (function(){
    "use strict";
    
    var local_datastore;

    var model = {};
    
    model.createMessage = function(message) {
    	document.dispatchEvent(new CustomEvent('onNewData', {detail: data}));
    };

    model.getAllData = function() {
    	return local_datastore;
    }

    return model;
    
}());