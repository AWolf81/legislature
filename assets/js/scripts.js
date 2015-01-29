$(function() {

	// Trying to figure out how to Dynamo this
	$(".credits").hide();

	// This hides the footer on click
	$(".crossContainer").click(function(){
		$("footer").slideUp("slow", function(){
			console.log("I'm a ninja!");
		});
	});

	// For a pie chart
	var countries = document.getElementById("myChart").getContext("2d");
	new Chart(countries).Pie(pieData, pieOptions);

	var pieData = [
		{
			value: 20,
			color:"#878BB6"
		},
		{
			value : 40,
			color : "#4ACAB4"
		},
		{
			value : 10,
			color : "#FF8153"
		},
		{
			value : 30,
			color : "#FFEA88"
		}
	];


	var pieOptions = {
		segmentShowStroke : false,
		animateScale : true
	}
});


