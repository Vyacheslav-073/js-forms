$(document).ready(function(){

   (function() {

		var formRegistrationValidation = {
			isValid: true,
			init: function(){

				// вызов внутренних функций
                
				this._setUpListeners();
			},

			_setUpListeners: function(){

				$('#registration-add-form').on('submit', formRegistrationValidation._validateForm);

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
                        Email = $('input[name=email]'),
					    Password = $('input[name=email]'),
						pattern = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;

				if(input.is('input:password')){
				    if (value.length === 0){	
						emptyPassword.fadeIn(1000);
						valid = false;	

					}else {
						emptyPassword.fadeOut();	
						}
				    }	

					if(!(input.is('input:password'))){
					   	if(valueEmail.length === 0){
							emptyEmail.fadeIn(1000);
							valid = false;

						}else {
							emptyEmail.fadeOut();
						}
				    }

					// Проверка валидации email

					if ( !(input.is('input:password')) ) {                        
						if ( input.attr('type').toLowerCase() === 'email' ) {
							if ( valueEmail !== '' ) {	 
	      					    if (pattern.test(valueEmail)) {
	  							   correctEmail.fadeOut();

	      						} else {	
									correctEmail.fadeIn(1000);
	      							valid = false;
	      						}
							}
						}
					}
										
                    if(valueEmail !== "" && (pattern.test(valueEmail)) && valuePassword !== ""){
                        crashLogin.fadeIn(1000);

                        if(valueEmail =="mail@mail.com" &&  valuePassword == 123){
                            helpForm.fadeIn(1000);
							crashLogin.fadeIn(1000);
                            valid = false;

						}else {
                            window.location.href='success.html';
						}
                    }

					input.on('focus', function(){						

						if(input.is('input:password')) {
								emptyPassword.fadeOut();
								correctPassword.fadeOut();

							}else{
								emptyEmail.fadeOut();
								correctEmail.fadeOut();
								correctPassword.fadeOut();
							}
					     });

					input.on('keydown', function(){
						if(input.is('input:password')){
							    emptyPassword.fadeOut();
								correctPassword.fadeOut();

							}else{
								emptyEmail.fadeOut();
								correctEmail.fadeOut();
								correctPassword.fadeOut();	
							}
				         });
                    });
			}),
		};

        // Запускаем модуль

		formRegistrationValidation.init();
	}());
});