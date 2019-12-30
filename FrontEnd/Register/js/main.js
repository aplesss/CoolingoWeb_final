(function($) {
    "use strict";
    var name="";
    var pass="";
    var re_pass="";
    var format = /[!@#$%^&*()+\-=\[\]{};':"\\|, <>\/?]+/;
    $(".toggle-password").click(function() {

        $(this).toggleClass("zmdi-eye zmdi-eye-off");
        var input = $($(this).attr("toggle"));
        if (input.attr("type") == "password") {
            $("#re_password").attr("type","text");
            input.attr("type", "text");
        } else {
          input.attr("type", "password");
          $("#re_password").attr("type","password");
        }
      });
    $('.form-input').each(function(){
        $(this).on('blur', function(){
            if($(this).val().trim() != "") {
                $(this).addClass('has-val');
            }
            else {
                $(this).removeClass('has-val');
            }
        })    
    });
  var input = $('.form-input');

  $('.signup-form').on('submit',function(e){
    var check = true;
    e.preventDefault(); // cancel submission
    for(var i=0; i<input.length; i++) {
        if(validate(input[i]) == false){
            showValidate(input[i]);
            check=false;


        }    
    }
    if(check)
    {
        if(pass!=re_pass)
        {
            $(".re_password").css("border","1px solid #f10606");
            alert("Error password");
        }
        else if(name.match(format))
        {
            alert("Username has special character");
        }
        else if(pass.match(format))
        {
            alert("Password has special character");
        }
        else if(!$("#agree-term").is(":checked"))
        {
            alert("You need to agree term of service");
        }
        else if(pass.length<8)
        {
            alert("Your password needs loonger than 8");
        }
        else
        {
            var datas={
               
                    "username": name,
                    "pwd": pass,
                    "quyen": 2                         
            };
            $.ajax({
                headers: {"Access-Control-Allow-Origin": "*", "Access-Control-Allow-Headers": "access-control-allow-origin, access-control-allow-headers"},
                type: 'POST',
                url: 'http://localhost:5555/register',
                contentType: 'application/json',
                dataType: 'json',
                data: JSON.stringify(datas),

                success: function(jsondata)
                {
                    console.log(jsondata);
                    
                    window.location.replace("../Login/Login.html");
                },
                error: function(error) {
                    console.log(error+"error");
                    alert("Fail to create your account.");
                } 
            });

        }
    }
 
      return check;
});
function validate (input) {
    if($(input).attr('name')=='username'){
        name=$(input).val().trim();  
    }
    if($(input).attr('name')=='password'){
        pass=$(input).val().trim();  
    }
    if($(input).attr('name')=='re_password'){
      re_pass=$(input).val().trim();  }
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

}
function showValidate(input) {
  var thisAlert = $(input).parent();
  $(thisAlert).css("border","1px solid #f10606");
   
}

function hideValidate(input) {
  var thisAlert = $(input).parent();

  $(thisAlert).css("border","1px solid #ebebeb");
 
}
$('.form-input').each(function(){
  $(this).focus(function(){
     hideValidate(this);
  });
});
})(jQuery);