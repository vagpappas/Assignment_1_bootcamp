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



$(function() {
    $('#description-error').hide();

    var error_Description ='';
    $('#description').focusout(function () {
        checkDescription();
    });

    function checkDescription(){
        var pattern =/^[a-zA-Z]*$/;
        var description = $('#description').val();
        console.log(description);
       if (pattern.test(description) && description !== '') {
           $('#description-error').hide();
           $('#description').css({"border-bottom" : "3px solid #34f458"});
           $('input[type=text]').val(function(){
               return this.value.toUpperCase();
           })

       } 
       else {
           $('#description-error').show().html("Should contain only characters!");
         error_Description = 'true';
       }

    }
});



$(function() {
    $('#oral-error').hide();

    var error_oralMark ='';
    $('#oral-mark').focusout(function () {
        checkOral();
    });

    function checkOral(){
        var pattern =/^[0-9]$|^0[0-9]$|^1[0-9]$|^20$/gm;
        var oralMark = $('#oral-mark').val();
        
       if (pattern.test(oralMark) && oralMark !== '') {
           $('#oral-error').hide();
           $('#oral-mark').css({"border-bottom" : "3px solid #34f458"});
           $('input[type=text]').val(function(){
               return this.value.toUpperCase();
           })

       } 
       else {
           $('#oral-error').show().html("the value must be between 0-20");
         error_oralMark = 'true';
       }

    }
});


$(function() {
    $('#total-error').hide();

    var error_totalMark ='';
    $('#total-mark').focusout(function () {
        checkTotal();
    });

    function checkTotal(){
        var pattern =/^[0-7][0-9]?$|^80$/gm;
        var totalMark = $('#total-mark').val();
        console.log(totalMark)
       if (pattern.test(totalMark) && totalMark !== '') {
           $('#total-error').hide();
           $('#total-mark').css({"border-bottom" : "3px solid #34f458"});
           $('input[type=text]').val(function(){
               return this.value.toUpperCase();
           })

       } 
       else {
           $('#total-error').show().html("the value must be between 0-80");
         error_totalMark = 'true';
       }

    }
});