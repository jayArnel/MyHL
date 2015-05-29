$(document).ready(function(){

    //function for opening sidebar menu
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

    //function for closing sidebar menu
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

    //open sidebar menu on click of icon menu
    $('.open-menu').click(openmenu);

    //close sidebar menu on click of icon menu
    $('.close-menu').click(closemenu);

    //disable run button on empty textarea
    $('#input').keyup(function() {
        if($(this).val() != '') {
            $(".run").removeAttr('disabled');
        } else {
            $(".run").attr('disabled','disabled');
        }
     });

    //function for executing code
    var run = function(){
        variables = []
        $('#out').html('<span class="gray">Run:</span><br>')
        try{
            parser.parse($('#input').val());
        } catch(e) {
            $('#out').append('<br><span class = "bad"></span>')
            $('.bad').text(e.message || e);
        }
        $('#out').append('<p class="gray">Done.</p>')
    }

    //run code on click of the Run button
    $(".run").click(run);

    //keyboard shortcuts
    $(document).keyup(function(e) {
        if (e.ctrlKey && e.which == 77) {  // Ctrl + M, toggle sidebar menu
            if($('.close-menu').is(":visible")) {
                closemenu();
            } else {
                openmenu();
            }
        } else if (e.which == 113) { //F2, run code
            if ($('#input').val().trim().length > 0) {
                run();
            }else {
                $("#out").text('');
            }
        } else if (e.which == 27) { //escape, clear output window
            $("#out").text('');
        }
    });

    //behave.js code for textarea properties
    BehaveHooks.add(['keyup'], function(data){
        var numLines = data.lines.total,
            house = document.getElementsByClassName('line-nums')[0],
            html = '',
            i;
        for(i=0; i<numLines; i++){
            html += '<div>'+(i+1)+'</div>';                 
        }   
        house.innerHTML = html;
    });
    
    BehaveHooks.add(['keydown'], function(data){
        var numLines = data.lines.total,
            house = document.getElementsByClassName('line-nums')[0],
            html = '',
            i;
        for(i=0; i<numLines; i++){
            html += '<div>'+(i+1)+'</div>';                 
        }   
        house.innerHTML = html;
    });
    
    var editor = new Behave({
    
        textarea:       document.getElementById('input'),
        replaceTab:     true,
        softTabs:       true,
        tabSize:        4,
        autoOpen:       true,
        overwrite:      true,
        autoStrip:      true,
        autoIndent:     true,
    });

    //scroll line numbers and textarea together
    $('#input').on('scroll', function () {
        $('.line-nums').scrollTop($(this).scrollTop());
    });
});