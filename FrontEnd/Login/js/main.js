
(function ($) {
    "use strict";
    var name="";
    var pass="";
     /*==================================================================
    [ Focus input ]*/
    $('.input100').each(function(){
        $(this).on('blur', function(){
            if($(this).val().trim() != "") {
                $(this).addClass('has-val');
            }
            else {
                $(this).removeClass('has-val');
            }
        })    
    })
    /*==================================================================
    [ Validate ]*/
    var input = $('.validate-input .input100');

    $('.validate-form').on('submit',function(e){
        var check = true;
        e.preventDefault(); // cancel submission
        for(var i=0; i<input.length; i++) {
            if(validate(input[i]) == false){
                showValidate(input[i]);
                check=false;
 
            }    
        }
        
        if(check==true)
        { 

            var datas= {
                "username": name,
                "pwd": pass
                };
          
          $.ajax({
            headers: {"Access-Control-Allow-Origin": "*", "Access-Control-Allow-Headers": "access-control-allow-origin, access-control-allow-headers"},
            type: 'POST',
            url: 'http://localhost:5555/login',
            contentType: 'application/json',
            dataType: 'json',
            data: JSON.stringify(datas),
        
            success: function(jsondata)
            {
                console.log(jsondata);
                sessionStorage.setItem("user", jsondata.USERNAME);
                window.location.replace("../Menu/Menu.html");
                
            },
            error: function(error) {
                console.log(error+"error");
                alert("User or password wrong");
            } 
        });
        
        }
           
    
 
         return check;
    });


    $('.validate-form .input100').each(function(){
        $(this).focus(function(){
           hideValidate(this);
        });
    });

    function validate (input) {
        if($(input).attr('type') == 'email' || $(input).attr('name') == 'email') {
            if($(input).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
                return false;
            }
        }
        else {
            if($(input).val().trim() == ''){
                return false;
            }
        }
        if($(input).attr('name')=='username'){
            name=$(input).val().trim();  
        }
        if($(input).attr('name')=='pass'){
            pass=$(input).val().trim();  
        }

    }

    function showValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).addClass('alert-validate');
    }

    function hideValidate(input) {
        var thisAlert = $(input).parent();
        $(thisAlert).removeClass('alert-validate');
    }
 
 
    

})(jQuery);
 