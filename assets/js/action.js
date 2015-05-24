$(document).ready(function(){
    
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
	
		textarea: 		document.getElementById('input'),
		replaceTab: 	true,
	    softTabs: 		true,
	    tabSize: 		4,
	    autoOpen: 		true,
	    overwrite: 		true,
	    autoStrip: 		true,
	    autoIndent: 	true
	});

    $("#run").click(function(){
    	if (assemble()) {
    		if (output()){
    			$("#out").append("Done.");		
    		}
    	}
        
    });

	$("#translate").click(function(){
		if (assemble()){
			$("#out").append("Done.");
		}
		
    });

    $('#input').on('scroll', function () {
	    $('.line-nums').scrollTop($(this).scrollTop());
	});

    $("#step").click(function(){
    	if (assemble()) {
	    	step = true;
	    	$("#step-btn").css('visibility', 'visible');
	    	$("#prev").attr('disabled','disabled');
	    	$("#step").hide();
	    	$(".navbar-btn").attr('disabled','disabled');
	    	$("#input").attr('disabled','disabled');
	    	$("#next").removeAttr('disabled');
    		$("#out").append("Run: <br>");
    	}
    });

    $("#stop").click(function(){
    	step = false;
    	$(".navbar-btn").removeAttr('disabled');
    	$("#step-btn").css('visibility', 'hidden');
    	$("#step").show();
    	$("#input").removeAttr('disabled');
    	index = 0;
    });

    $('#input').bind('input propertychange', function() {
		if(this.value.length > 0){
			$(".navbar-btn").removeAttr('disabled');
		} else {
			$(".navbar-btn").attr('disabled','disabled');
		}
	});

	$('#input').keyup(function() {
        if($(this).val() != '') {
        	$(".navbar-btn").removeAttr('disabled');
		} else {
			$(".navbar-btn").attr('disabled','disabled');
		}

     });

	$("#next").click(function() {
		$("#prev").removeAttr('disabled');
		console.log(index);
		var out = execute(index);
		if (out instanceof Error) {
			$("#out").append(out+"<br>");
			$("#next").attr('disabled','disabled');
			$("#out").append("Aborted.");
		} else {
			index++;
			if (index >= commands.length) {
				$("#next").attr('disabled','disabled');
				$("#out").append("Done.");
			}
		}
	});


});

/***** Objects *****/
function Error(name, line){
    this.verbose = name;
    this.line = line;
}

Error.prototype.toString = function(){
    return "Error: "+this.verbose + ". Line " + this.line;
}

function Stack(cap) {
    this.cap = cap;
    this.stack = [];

    this.push = function(e) {
        if (this.stack.length + 1 > cap) {
            return new Error('Stack Overflow');
        } else {
            this.stack.push(e);
        }
    }

    this.pop = function(	) {
        if (this.stack.length == 0) {
            return new Error('Empty Stack');
        } else {
            return this.stack.pop();
        }
    }
}

function Command(line, command) {
    this.index = null;
    this.line = line;
    this.params = [];
    var tokens = command.split(' ');
    this.name = tokens[0].toLowerCase();
    for (var i = 1; i < tokens.length; i++){
        if (tokens[i].length > 0) {
            this.params.push(tokens[i]);
        }
    }
    this.command = this.name +" "+ this.params.join(' ');
    this.num_of_params = function(){
        this.params.length;
    }
    commands.push(this);
}

/****  end of Objets *****/

function get_machine_code(){
	var mach = [];
	var i;
	for (var i = 0; i < 29 && memory[i] != 1011 && memory[i] != undefined; i++) {
		mach.push(memory[i]);
	}
	if (memory[i] == 1011) {
		mach.push(1011);
	}
	return mach;
}

function assemble() {
	init();
	$("#out").append("Translating...<br>");
    var code = $("#input").val();
    var out = translate(code);
    if (out instanceof Error) {
    	$("#out").append(out.toString()+'<br>');
    	$("#out").append("Aborted.");
    	return false;
    } else {
    	$("#mach").html(get_machine_code().join('<br>'));
    	return true;
    }
}	

function output() {
	$("#out").append("Run: <br>");
	var out = run();
	if (out instanceof Error) {
		$("#out").append(out.toString() + '<br>');
		$("#out").append("Aborted.");
		return false;
	}
	return true;
}

function readSingleFile() {
     var file = document.getElementById('file').files[0];
    if (file) {
        //  getAsText(file);
        alert("Name: " + file.name + "\n" + "Last Modified Date :" + file.lastModifiedDate);
    }
 }
 
