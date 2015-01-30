$(function() {


// If your age is between 36-64, show me all MLA's in that age range

	$(".credits").hide();

	$(".rect").click(function(){
		$(this).toggleClass("clicked");
	});

	$( "#clickme" ).click(function() {
	  $( "#book" ).fadeTo( "slow" , 0.5, function() {
	    // Animation complete.
	  });
	});

	// This hides the footer on click
	$(".crossContainer").click(function(){
		$("footer").slideUp("slow", function(){
			console.log("I'm a ninja!");
		});
	});

	var eichler = {
		name: "EICHLER, Ralph",
		age: 64,
		constuency: "Lakeside",
		party: "PC",
		gender: "Male",
		ethnicity: "White"
	}
});


