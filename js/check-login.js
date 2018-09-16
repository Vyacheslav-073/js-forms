$(document).ready(function(){
    
    $('#email').on('focus', function(){
        $('#errorEmailEmpty').slideUp();
        $('#errorValidEmail').slideUp();
    });
    
    $('#password').on('focus', function(){
        $('#errorPassEmpty').slideUp();
    });
   
    $('#loginForm').on('submit', function(e){
        e.preventDefault();
        
        var email = $('#email').val(),
            password = $('#password').val(),
            pattern = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i,
            validEmail = false,
            validPass = false,
            testEmail = 'mail@mail.com',
            testPass = '123';
        
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
        
        if (validEmail == true && validPass == true){
            if (email == testEmail && password == testPass){
                $('#loginForm').unbind('submit');
                $('#loginForm').submit();
            } else {
                $('#crashLogin.notify').show();
                $('#crashLogin').slideDown();
            }
        }
    });   
});				
