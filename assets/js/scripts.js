$(function() {

	// Three options for readers
	$(".rect").click(function(){
		$(this).toggleClass("clicked");
	});

	// Numbers
	var total = 56;
	var totalMale = 41;
	var totalFemale = 15;
	var totalLow = {}
	var totalMiddle = {}
	var totalHigh = {}
	var White = 41
	var Black = 0;
	var Aboriginal = {}
	var Metis = {}
	var Asian = {}

	var option1 = {}
		// If Male, change html to total males
		// If Female, change html to total females

	var option2 = {}
		// Not able to select until option1 is selected

	var option3 = {}
		// Not able to select until option1 is selected

	// Gender
	$( ".G1" ).click(function() {
		$(".Male").toggleClass("disabled");
		$(".number").html(totalMale);
	});

	$( ".G2" ).click(function() {
		$(".Female").toggleClass("disabled");
		$(".number").html(totalFemale);
	});

	// Age
	$( ".A1" ).click(function() {
		$(".Low").toggleClass("disabled");
		$(".number").html("?");
	});

	$( ".A2" ).click(function() {
		$(".Medium").toggleClass("disabled");
		$(".number").html("?");
	});

	$( ".A3" ).click(function() {
		$(".High").toggleClass("disabled");
		$(".number").html("?");
	});

	// Ethnicity
	$( ".E1" ).click(function() {
		$( ".White" ).toggleClass("disabled");
		$(".number").html(White);
	});

	$( ".E2" ).click(function() {
		$( ".Black" ).toggleClass("disabled");
		$(".number").html("0");
	});

	$( ".E3" ).click(function() {
		$( ".Aboriginal" ).toggleClass("disabled");
		$(".number").html("?");
	});

	$( ".E4" ).click(function() {
		$( ".Metis" ).toggleClass("disabled");
		$(".number").html("?");
	});

	$( ".E5" ).click(function() {
		$( ".Asian" ).toggleClass("disabled");
		$(".number").html("?");
	});

	// This hides the footer on click
	$(".crossContainer").click(function(){
		$("footer").slideUp("slow", function(){
			console.log("No feedback makes us sad.");
		});
	});

	// This hides the credits
	$(".credits").hide();
});