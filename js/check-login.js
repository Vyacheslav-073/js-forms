$(document).ready(function(){
   (function() {
		var formLoginValidation = {
			isValid: true,
			init: function(){

            // вызов внутренних функций
            this._setUpListeners();
			},
			_setUpListeners: function(){
				$('#login-add-form').on('submit', formLoginValidation._validateForm);
			},

			_validateForm: (function(event){
				event.preventDefault();
				var form = $(this),
					inputs = form.find('input'),
					valid = true;

				$.each(inputs, function(index, val){
					var input = $(val),
						value = input.val().trim(),
                        valueEmail = $('input[type=email]').val().trim(),
                        valuePassword = $('input[type=password]').val().trim(),
                        emptyEmail = $('#empty-email'),
                        correctEmail = $('#correct-email'),
				        emptyPassword = $('#empty-password'),
                        correctPassword = $('#correct-form'),
                        crashLogin = $('#crash-login'),
                        helpForm = $('#help-form'),
                        email = $('input[name=email]'),
					    password = $('input[name=email]'),
						pattern = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;

				if (input.is('input:password')){
				    if (value.length === 0){	
						emptyPassword.fadeIn(1000);
						valid = false;	
					} else {
						emptyPassword.fadeOut();	
						}
				    }	
					if (!(input.is('input:password'))){                    
				        if (valueEmail.length === 0){
							emptyEmail.fadeIn(1000);
							valid = false;
						} else {
							emptyEmail.fadeOut();
						}
				    }
      					
					// Проверка валидации email
					if (!(input.is('input:password'))) {                        
						if (input.attr('type').toLowerCase() === 'email') {
							if (valueEmail !== '') {	 
	      					    if (pattern.test(valueEmail)) {
	  							   correctEmail.fadeOut();
	      						} else {	
									correctEmail.fadeIn(1000);
	      							valid = false;
	      						}
							}
						}
					}
				                    
                    if (valueEmail !== "" && (pattern.test(valueEmail)) && valuePassword !== ""){                        
                        if (valueEmail === "mail@mail.com" && valuePassword === 123){
                            window.location.href='success.html';
				        } else {
                            helpForm.fadeIn(1000);
				            crashLogin.fadeIn(1000);
                            valid = false;
				        }
                    }
                                        
					input.on('focus', function(){						
						if (input.is('input:password')){
								emptyPassword.fadeOut();
								correctPassword.fadeOut();
							} else {
								emptyEmail.fadeOut();
								correctEmail.fadeOut();
								correctPassword.fadeOut();
							}
					     });
					
					input.on('keydown', function(){
						if (input.is('input:password')){
							    emptyPassword.fadeOut();
								correctPassword.fadeOut();
							} else {
								emptyEmail.fadeOut();
								correctEmail.fadeOut();
								correctPassword.fadeOut();
							}
				         });
                    });
			}),
		};
       
        // Запускаем модуль       
		formLoginValidation.init();
	}());
});