$(function() {
    $('#title-error').hide();

    var error_Title ='';
    $('#title').focusout(function () {
        checkTitle();
    });

    function checkTitle(){
        var pattern =/^[a-zA-Z]*$/;
        var title = $('#title').val();
        console.log(title);
       if (pattern.test(title) && title !== '') {
           $('#title-error').hide();
           $('#title').css({"border-bottom" : "3px solid #34f458"});
           $('input[type=text]').val(function(){
               return this.value.toUpperCase();
           })

       } 
       else {
           $('#title-error').show().html("Should contain only characters!");
         error_Title = 'true';
       }

    }
});