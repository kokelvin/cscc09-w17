var view = (function(){
    "use strict";
    document.getElementById("create_message_form").onsubmit = function(e){
    	var username = document.getElementById("create_message_name").value;
        var content = document.getElementById("create_message_content").value;
        document.dispatchEvent(new CustomEvent('onFormSubmit',{detail: username + content}));
    }

    var view = {};
    
    view.insertMessage = function(message) {
    	
    }

    return view;
    
}());