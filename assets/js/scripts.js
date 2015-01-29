$(function() {

	// This will show the credits
	$(".new").fadeOut("1000");
	$(".credits").fadeIn("1000");

	// This hides the footer on click
	$(".crossContainer").click(function(){
		$("footer").slideUp("slow", function(){
			console.log("I'm a ninja!");
		})
	});
});


