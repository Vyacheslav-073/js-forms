
$(document).ready(function(){

    var commentFormCheck = (function(){
        var _form = $('#comment-add-form');
        var _commentTextarea = $('#commentText');
        var _commentErrorEmpty = $('#commentErrorEmpty');

        // Метод инициализации (запуска) модуля   

        var init = function(){
            _setUpListeners();// запускаем прослушку событий
            }

        // Метод прослушки событий
        // В нем прослушиваем события например клики по кнопке
           
        var _setUpListeners = function(){

            _form.on('submit', function(event){

                _formValidate(event);
            });
        }    

    //  Приватные методы  

    var _formValidate = function (event) {        

        event.preventDefault();        

        if ( _commentTextarea.val() == '' ){
            _commentErrorEmpty.fadeIn(1000);

        } else {

            _commentErrorEmpty.fadeOut();

            $('form').unbind('submit').submit();
        }
    }

    // Возвращаем публичные методы, которые будут доступны снаружи   

    return {

        init

        }

    }());

    // Запускаем модуль

    commentFormCheck.init();    
});