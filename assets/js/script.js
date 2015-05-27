$(document).ready(function(){
	var openmenu = function() {
		$('.menu').animate({
          left: "0px"
        }, 200);

        $('.main-content').animate({
          left: "225px"
        }, 200);

        $('.icon-menu').hide();
        $('.close-menu').show();
	}

	var closemenu = function(){
		$('.menu').animate({
          left: "-25px"
        }, 200);
        $('.main-content').animate({
          left: "0px"
        }, 200);
        $('.close-menu').hide();
        $('.open-menu').show();
	}
    $('.open-menu').click(openmenu);

    $('.close-menu').click(closemenu);

    $('#input').keyup(function() {
        if($(this).val() != '') {
            $(".run").removeAttr('disabled');
        } else {
            $(".run").attr('disabled','disabled');
        }
     });
    var run = function(){
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
    $(".run").click(run);

    $(document).keydown(function(e) {
        if (e.ctrlKey && e.which == 77) {  // Ctrl + M
            if($('.close-menu').is(":visible")) {
                closemenu();
            } else {
                openmenu();
            }
        }
        if (e.which == 113) { //F2
            if ($('#input').val().trim().length > 0) {
                run();
            }
        }
    });

});