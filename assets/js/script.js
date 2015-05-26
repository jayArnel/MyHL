// requirejs.config({
//     baseUrl: 'assets/js',
// });

// require(['jquery', 'calc'], function($, calc) {
    $(document).ready(function(){

        $('.open-menu').click(function(){
            $('.menu').animate({
              left: "0px"
            }, 200);

            $('.main-content').animate({
              left: "225px"
            }, 200);

            $(this).hide();
            $('.close-menu').show();
        });

        $('.close-menu').click(function(){
            $('.menu').animate({
              left: "-25px"
            }, 200);
            $('.main-content').animate({
              left: "0px"
            }, 200);
            $(this).hide();
            $('.open-menu').show();
        });
        var open_menu = function(){

        }
        // $('.main-content').click(function() {
        //     if($(this).css('left') == '225px') {
        //         $('.menu').animate({
        //           left: "-225px"
        //         }, 200);
        //         $(this).animate({
        //           left: "0px"
        //         }, 200);
        //         $('.close-menu').hide();
        //         $('.open-menu').show();
        //     }
        // });
        $('#input').keyup(function() {
            if($(this).val() != '') {
                $(".run").removeAttr('disabled');
            } else {
                $(".run").attr('disabled','disabled');
            }

         });
        $(".run").click(function(){
            variables = []
            $('#out').html('<p class="gray">Run:</p>')
            try{
                parser.parse($('#input').val());
                $('#out').removeClass('bad');
            } catch(e) {
                $('#out').addClass('bad');
                $('#out').append(e.verbose);
            }
            $('#out').append('<p class="gray">Done.</p>')
        });

        $(document).keydown(function(e) {
            console.log('key code is: ' + e.which + ' ' + (e.ctrlKey ? 'Ctrl' : '') + ' ' +
                    (e.shiftKey ? 'Shift' : '') + ' ' + (e.altKey ? 'Alt' : ''));
            if (e.ctrlKey && e.which == 77) { 
                if($('.close-menu').is(":visible")) {
                    $('.menu').animate({
                      left: "-25px"
                    }, 200);
                    $('.main-content').animate({
                      left: "0px"
                    }, 200);
                    $('.close-menu').hide();
                    $('.open-menu').show();
                } else {
                    $('.menu').animate({
                      left: "0px"
                    }, 200);

                    $('.main-content').animate({
                      left: "225px"
                    }, 200);

                    $('.open-menu').hide();
                    $('.close-menu').show();
                }
            }
            if (e.which == 113) { 
                if ($('#input').val().trim().length > 0) {
                    variables = []
                    $('#out').html('<p class="gray">Run:</p>')
                    try{
                        parser.parse($('#input').val());
                        $('#out').removeClass('bad');
                    } catch(e) {
                        $('#out').addClass('bad');
                        $('#out').append(e.verbose);
                    }
                    $('#out').append('<p class="gray">Done.</p>')
                }
            }
        });

    });
// });