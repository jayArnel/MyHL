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

        $('.main-content').click(function() {
            if($(this).css('left') == '300px') {
                console.log('slide please');
                $('.menu').animate({
                  left: "-225px"
                }, 200);
                $(this).animate({
                  left: "0px"
                }, 200);
                $('.close-menu').hide();
                $('.open-menu').show();
            }
        });
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
                $('#out').html(e.verbose);
                console.log(e);
            }
            $('#out').append('<p class="gray">Done.</p>')
        });
    });
// });