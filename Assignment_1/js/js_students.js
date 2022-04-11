$(function() {
    $('#firstname-error').hide();

    var error_fname ='';
    $('#firstname').focusout(function () {
        checkFirstName();
    });

    function checkFirstName(){
        var pattern =/^[a-zA-Z]*$/;
        var firstName = $('#firstname').val();
        console.log(firstName);
       if (pattern.test(firstName) && firstName !== '') {
           $('#firstname-error').hide();
           $('#firstname').css({"border-bottom" : "3px solid #34f458"});
           $('input[type=text]').val(function(){
               return this.value.toUpperCase();
           })

       } 
       else {
           $('#firstname-error').show().html("Should contain only characters!");
         error_fname = 'true';
       }

    }
});


$(function() {
    $('#lastname-error').hide();

    var error_lname ='';
    $('#lastname').focusout(function () {
        checkLastName();
    });

    function checkLastName(){
        var pattern =/^[a-zA-Z]*$/;
        var lastName = $('#lastname').val();
        console.log(lastName);
       if (pattern.test(lastName) && lastName !== '') {
           $('#lastname-error').hide();
           $('#lastname').css({"border-bottom" : "3px solid #34f458"});
           $('input[type=text]').val(function(){
               return this.value.toUpperCase();
           })

       } 
       else {
           $('#lastname-error').show().html("Should contain only characters!");
         error_lname = 'true';
       }

    }
});