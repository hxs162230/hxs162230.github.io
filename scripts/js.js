$(document).ready(function(){
    $("#hide").click(function(){
        $("#autoBio").hide();
    });
    $("#expand").click(function(){
        $("#autoBio").show();
    });
	$("#hideshowToggle").click(function(){
        $("#autoBio").toggle();
    });
	$("#fadeout").dblclick(function(){
        $("#word1").fadeOut();
        $("#word2").fadeOut("slow");
        $("#word3").fadeOut(3000);
		$("#word4").fadeOut(3000);
		 $("#word5").fadeOut();
        $("#word6").fadeOut("slow");
        $("#word7").fadeOut("slow");
		$("#word8").fadeOut("slow");
		$("#word9").fadeOut("slow");
		$("#word10").fadeOut(3000);
    });
	$("#fadein").dblclick(function(){
		$("#word1").fadeIn();
        $("#word2").fadeIn("slow");
        $("#word3").fadeIn(3000);
		$("#word4").fadeIn(3000);
		 $("#word5").fadeIn();
        $("#word6").fadeIn("slow");
        $("#word7").fadeIn("slow");
		$("#word8").fadeIn("slow");
		$("#word9").fadeIn("slow");
		$("#word10").fadeIn(3000);
});
			$("#fadeto").dblclick(function(){
		$("#word1").fadeTo("slow",0.1);
        $("#word2").fadeTo("slow",0.2);
        $("#word3").fadeTo("slow",0.3);
		$("#word4").fadeTo("slow",0.4);
		 $("#word5").fadeTo("slow",0.5);
        $("#word6").fadeTo("slow",0.6);
        $("#word7").fadeTo("slow",0.7);
		$("#word8").fadeTo("slow",0.8);
		$("#word9").fadeTo("slow",0.9);
		$("#word10").fadeTo("slow",1);
});
		$("#fadetoggle").dblclick(function(){
    $("#word1").fadeToggle();
    $("#word2").fadeToggle("slow");
    $("#word3").fadeToggle(3000);
	$("#word4").fadeToggle();
    $("#word5").fadeToggle("slow");
    $("#word6").fadeToggle(3000);
	$("#word7").fadeToggle();
    $("#word8").fadeToggle("slow");
    $("#word9").fadeToggle(3000);
	$("#word10").fadeToggle();   
});
		
	$("#wordbox1").mouseleave(function(){
    $("#wordbox1").stop(true);
});	
		
	$("#wordbox1").mouseenter(function(){
	
   
	$("#wordbox1").animate({
            left: '450px',
            opacity: '0.5',
            
        });
    $("#wordbox1").animate({width: '300px', opacity: '0.4'}, 1000);
    $("#wordbox1").animate({width: '200px', opacity: '0.8'}, 1000);
    $("#wordbox1").animate({width: '100px', opacity: '0.4'}, 1000);
    $("#wordbox1").animate({width: '200px', opacity: '0.8'}, 1000);
	$("#wordbox1").animate({width: '300px', opacity: '0.4'}, 1000);
	$("#wordbox1").animate({width: '400px', opacity: '0.8'}, 1000);
	$("#wordbox1").animate({width: '500px', opacity: '0.4'}, 1000,function(){
	
	alert("You are now visiting my web page!");
	window.open("profile.html", '_self');
	});
	
}); 
	
$("input").keypress(function(){
	$("input").css("backgroundColor" ,"yellow").fadeOut(100).fadeIn(100).animate({width: '300px'},1000);
	
});



    $("textarea").keydown(function(){
        $("textarea").fadeOut(100).fadeIn(100).css("background-color", "yellow");
    });
	
	$("form").submit(function(){
		
		alert("Submitted");
		
		window.open("tkyou.html", '_blank');
	});

	
});