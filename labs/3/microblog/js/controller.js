(function(){
    "use strict";
    
    document.addEventListener('onFormSubmit', function(e) {
    	var data = e.detail;
    	model.createMessage(data);
    });

    document.addEventListener('onNewData', function (e) {
    	var message = e.detail;
    	view.insertMessage(message);
    });
    
}(model, view));