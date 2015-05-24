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
        $(".run").click(function(){
            $('#out').html('')
            try{
                $('#out').html(parser.parse($('#input').val()));
            } catch(e) {
                $('#out').html(e.verbose);
                console.log(e);
            }
        });
    });
// });