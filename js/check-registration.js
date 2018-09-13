$(document).ready(function(){
    
    $('#email').on('focus', function(){
        $('#errorEmailEmpty').slideUp();
        $('#correctEmail').slideUp();
        $('#crashLogin').slideUp();
    });
    
    $('#password').on('focus', function(){
        $('#errorPassEmpty').slideUp();
    });
   
    $('#formRegister').on('submit', function(e){
        e.preventDefault();
        
        var email = $('#email').val(),
            password = $('#password').val(),
            pattern = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i,
            validEmail = false,
            validPass = false,
            testEmail = 'mail@mail.com';
        
        // EMAIL не пустой
        if (email == ''){
            $('#errorEmailEmpty').slideDown();
        } else {    
            // EMAIL корректен?
            if (pattern.test(email)){
                validEmail = true;
            } else {
                $('#correctEmail').slideDown(); 
            }
        }
        
        // PASSWORD не пустой
        if (password == ''){
            $('#errorPassEmpty').slideDown();
        } else {
            validPass = true;
        }
            
        if (validEmail == true  && validPass == true){
            if (email == testEmail){
                $('#crashLogin.notify').show();
                $('#crashLogin').slideDown();
            } else {
                s('#formRegister').unbind('submit');
                s('#formRegister').submit();
            } 
        }    
    });   
});	