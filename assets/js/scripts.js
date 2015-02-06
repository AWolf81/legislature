$(function() {

	// Numbers
	var total = 56
	var male = 41;
	var female = 15;
	var low = {}
	var middle = {}
	var high = {}
	var white = 41
	var black = 0;
	var aboriginal = null;
	var metis = null;
	var asian = null;

	// MLAs
	var MLAs = [
	  {
	    "Name": "Nancy Allan",
	    "Age": 62,
	    "Constuency": "St. Vital",
	    "Party": "NDP",
	    "Gender": "Female",
	    "Ethnicity": "White"
	  },
	  {
	    "Name": "James Allum",
	    "Age": null,
	    "Constuency": "Fort Garry-Riverview",
	    "Party": "NDP",
	    "Gender": "Male",
	    "Ethnicity": "White"
	  },
	  {
	    "Name": "Rob Altemeyer",
	    "Age": null,
	    "Constuency": "Wolseley",
	    "Party": "NDP",
	    "Gender": "Male",
	    "Ethnicity": "White"
	  },
	  {
	    "Name": "Steve Ashton",
	    "Age": 58,
	    "Constuency": "Thompson",
	    "Party": "NDP",
	    "Gender": "Male",
	    "Ethnicity": "White"
	  },
	  {
	    "Name": "Peter Bjornson",
	    "Age": null,
	    "Constuency": "Gimli",
	    "Party": "NDP",
	    "Gender": "Male",
	    "Ethnicity": "White"
	  },
	  {
	    "Name": "Shanon Blady",
	    "Age": null,
	    "Constuency": "",
	    "Party": "",
	    "Gender": "",
	    "Ethnicity": "White"
	  },
	  {
	    "Name": "Erna Braun",
	    "Age": null,
	    "Constuency": "Rossmere",
	    "Party": "NDP",
	    "Gender": "Female",
	    "Ethnicity": "White"
	  },
	  {
	    "Name": "Stuart Briese",
	    "Age": null,
	    "Constuency": "Agassiz",
	    "Party": "PC",
	    "Gender": "Male",
	    "Ethnicity": "White"
	  },
	  {
	    "Name": "Drew Caldwell",
	    "Age": 54,
	    "Constuency": "Brandon East",
	    "Party": "NDP",
	    "Gender": "Male",
	    "Ethnicity": "White"
	  },
	  {
	    "Name": "Kevin Chief",
	    "Age": null,
	    "Constuency": "Point Douglas",
	    "Party": "NDP",
	    "Gender": "Male",
	    "Ethnicity": "White"
	  },
	  {
	    "Name": "Dave Chomiak",
	    "Age": 61,
	    "Constuency": "Kildonan",
	    "Party": "NDP",
	    "Gender": "Male",
	    "Ethnicity": "White"
	  },
	  {
	    "Name": "Deanne Crothers",
	    "Age": null,
	    "Constuency": "St. James",
	    "Party": "NDP",
	    "Gender": "Female",
	    "Ethnicity": "White"
	  },
	  {
	    "Name": "Cliff Cullen",
	    "Age": 52,
	    "Constuency": "Spruce Woods",
	    "Party": "PC",
	    "Gender": "Male",
	    "Ethnicity": "White"
	  },
	  {
	    "Name": "Greg Dewar",
	    "Age": null,
	    "Constuency": "Selkirk",
	    "Party": "NDP",
	    "Gender": "Male",
	    "Ethnicity": "White"
	  },
	  {
	    "Name": "Myrna Driedger",
	    "Age": null,
	    "Constuency": "Charleswood",
	    "Party": "PC",
	    "Gender": "Female",
	    "Ethnicity": "White"
	  },
	  {
	    "Name": "Ralph Eichler",
	    "Age": 64,
	    "Constuency": "Lakeside",
	    "Party": "PC",
	    "Gender": "Male",
	    "Ethnicity": "White"
	  },
	  {
	    "Name": "Wayne Ewasko",
	    "Age": null,
	    "Constuency": "Lac du Bonnet",
	    "Party": "PC",
	    "Gender": "Male",
	    "Ethnicity": "White"
	  },
	  {
	    "Name": "Cameron Friesen",
	    "Age": null,
	    "Constuency": "Morden-Winkler",
	    "Party": "PC",
	    "Gender": "Male",
	    "Ethnicity": "White"
	  },
	  {
	    "Name": "Dave Gaudreau",
	    "Age": 43,
	    "Constuency": "St. Norbert",
	    "Party": "NDP",
	    "Gender": "Male",
	    "Ethnicity": "White"
	  },
	  {
	    "Name": "Jon Gerrard",
	    "Age": 67,
	    "Constuency": "River Heights",
	    "Party": "Liberal",
	    "Gender": "Male",
	    "Ethnicity": "White"
	  },
	  {
	    "Name": "Kelvin Goertzen",
	    "Age": 45,
	    "Constuency": "Steinbach",
	    "Party": "PC",
	    "Gender": "Male",
	    "Ethnicity": "White"
	  },
	  {
	    "Name": "Cliff Graydon",
	    "Age": null,
	    "Constuency": "Emerson",
	    "Party": "PC",
	    "Gender": "Male",
	    "Ethnicity": "White"
	  },
	  {
	    "Name": "Reg Helwer",
	    "Age": null,
	    "Constuency": "Brandon West",
	    "Party": "PC",
	    "Gender": "Male",
	    "Ethnicity": "White"
	  },
	  {
	    "Name": "Jennifer Howard",
	    "Age": 43,
	    "Constuency": "Fort Rouge",
	    "Party": "NDP",
	    "Gender": "Female",
	    "Ethnicity": "White"
	  },
	  {
	    "Name": "Kerri Irvin-Ross",
	    "Age": null,
	    "Constuency": "",
	    "Party": "",
	    "Gender": "Female",
	    "Ethnicity": "White"
	  },
	  {
	    "Name": "Bidhu Jha",
	    "Age": null,
	    "Constuency": "",
	    "Party": "",
	    "Gender": "Male",
	    "Ethnicity": "Asian"
	  },
	  {
	    "Name": "Ron Kostyshyn",
	    "Age": null,
	    "Constuency": "Swan River",
	    "Party": "NDP",
	    "Gender": "Male",
	    "Ethnicity": "White"
	  },
	  {
	    "Name": "Ron Lemieux",
	    "Age": 64,
	    "Constuency": "Dawson Trail",
	    "Party": "NDP",
	    "Gender": "Male",
	    "Ethnicity": "White"
	  },
	  {
	    "Name": "Gord Mackintosh",
	    "Age": 59,
	    "Constuency": "St. Johns",
	    "Party": "NDP",
	    "Gender": "Male",
	    "Ethnicity": "White"
	  },
	  {
	    "Name": "Jim Maloway",
	    "Age": 62,
	    "Constuency": "Elmwood",
	    "Party": "NDP",
	    "Gender": "Male",
	    "Ethnicity": "White"
	  },
	  {
	    "Name": "Flor Marcelino",
	    "Age": null,
	    "Constuency": "",
	    "Party": "",
	    "Gender": "",
	    "Ethnicity": ""
	  },
	  {
	    "Name": "Ted Marcelino",
	    "Age": null,
	    "Constuency": "",
	    "Party": "",
	    "Gender": "",
	    "Ethnicity": ""
	  },
	  {
	    "Name": "Shannon Martin",
	    "Age": null,
	    "Constuency": "",
	    "Party": "",
	    "Gender": "",
	    "Ethnicity": ""
	  },
	  {
	    "Name": "Christine Melnick",
	    "Age": null,
	    "Constuency": "",
	    "Party": "",
	    "Gender": "",
	    "Ethnicity": ""
	  },
	  {
	    "Name": "Bonnie Mitchelson",
	    "Age": null,
	    "Constuency": "",
	    "Party": "",
	    "Gender": "",
	    "Ethnicity": ""
	  },
	  {
	    "Name": "Thomas Nevashonoff",
	    "Age": 56,
	    "Constuency": "Interlake",
	    "Party": "NDP",
	    "Gender": "Male",
	    "Ethnicity": "White"
	  },
	  {
	    "Name": "Theresa Oswald",
	    "Age": 48,
	    "Constuency": "Seine River",
	    "Party": "NDP",
	    "Gender": "Female",
	    "Ethnicity": "White"
	  },
	  {
	    "Name": "Brian Pallister",
	    "Age": null,
	    "Constuency": "Fort Whyte",
	    "Party": "PC",
	    "Gender": "Male",
	    "Ethnicity": "White"
	  },
	  {
	    "Name": "Blaine Pedersen",
	    "Age": null,
	    "Constuency": "Midland",
	    "Party": "PC",
	    "Gender": "Male",
	    "Ethnicity": "White"
	  },
	  {
	    "Name": "Clarence Pettersen",
	    "Age": null,
	    "Constuency": "Flin Flon",
	    "Party": "NDP",
	    "Gender": "Male",
	    "Ethnicity": "White"
	  },
	  {
	    "Name": "Doyle Piwniuk",
	    "Age": 47,
	    "Constuency": "Arthur-Virden",
	    "Party": "PC",
	    "Gender": "Male",
	    "Ethnicity": "White"
	  },
	  {
	    "Name": "Daryl Reid",
	    "Age": null,
	    "Constuency": "Transcona",
	    "Party": "NDP",
	    "Gender": "Male",
	    "Ethnicity": "White"
	  },
	  {
	    "Name": "Eric Robinson",
	    "Age": null,
	    "Constuency": "",
	    "Party": "",
	    "Gender": "",
	    "Ethnicity": ""
	  },
	  {
	    "Name": "Jim Rondeau",
	    "Age": null,
	    "Constuency": "",
	    "Party": "",
	    "Gender": "",
	    "Ethnicity": ""
	  },
	  {
	    "Name": "Leanne Rowat",
	    "Age": null,
	    "Constuency": "Riding Mountain",
	    "Party": "PC",
	    "Gender": "Female",
	    "Ethnicity": "White"
	  },
	  {
	    "Name": "Mohinder Saran",
	    "Age": null,
	    "Constuency": "",
	    "Party": "",
	    "Gender": "",
	    "Ethnicity": ""
	  },
	  {
	    "Name": "Ron Schuler",
	    "Age": null,
	    "Constuency": "",
	    "Party": "",
	    "Gender": "",
	    "Ethnicity": ""
	  },
	  {
	    "Name": "Erin Selby",
	    "Age": null,
	    "Constuency": "Southdale",
	    "Party": "NDP",
	    "Gender": "Female",
	    "Ethnicity": "White"
	  },
	  {
	    "Name": "Gregory Selinger",
	    "Age": null,
	    "Constuency": "",
	    "Party": "",
	    "Gender": "",
	    "Ethnicity": ""
	  },
	  {
	    "Name": "Dennis Smook",
	    "Age": null,
	    "Constuency": "",
	    "Party": "",
	    "Gender": "",
	    "Ethnicity": ""
	  },
	  {
	    "Name": "Heather Stefanson",
	    "Age": 44,
	    "Constuency": "Tuxedo",
	    "Party": "PC",
	    "Gender": "Female",
	    "Ethnicity": "White"
	  },
	  {
	    "Name": "Stan Struthers",
	    "Age": null,
	    "Constuency": "",
	    "Party": "",
	    "Gender": "",
	    "Ethnicity": ""
	  },
	  {
	    "Name": "Andrew Swan",
	    "Age": 46,
	    "Constuency": "Minto",
	    "Party": "NDP",
	    "Gender": "Male",
	    "Ethnicity": "White"
	  },
	  {
	    "Name": "Matt Wiebe",
	    "Age": null,
	    "Constuency": "Concordia",
	    "Party": "NDP",
	    "Gender": "Male",
	    "Ethnicity": "White"
	  },
	  {
	    "Name": "Melanie Wight",
	    "Age": null,
	    "Constuency": "Burrows",
	    "Party": "NDP",
	    "Gender": "Female",
	    "Ethnicity": "White"
	  },
	  {
	    "Name": "Ian Wishart",
	    "Age": null,
	    "Constuency": "Portage la Prairie",
	    "Party": "PC",
	    "Gender": "Male",
	    "Ethnicity": "White"
	  }
	]

	// Highlights the selected option in yellow
	$(".rect").click(function(){
		$(this).toggleClass("clicked");
	});

	// Option #1: Gender
	$( ".G1" ).click(function() {
		$(".G2").toggleClass("disabled");
		$(".headshot").not(".Female").toggleClass("opacity");

		var resultMale = total - female;
		$(".number").html(resultMale);
	});

	$( ".G2" ).click(function() {
		$(".G1").toggleClass("disabled");
		$(".headshot").not(".Male").toggleClass("opacity");

		var resultFemale = total - male
		$(".number").html(resultFemale);
	});

	// Option #2: Age
	$( ".A1" ).click(function() {
		$(".A2").toggleClass("disabled");
		$(".A3").toggleClass("disabled");
		$(".Low").toggleClass("show");

		var resultLow = resultMale || resultFemale - (middle + high);
		$(".number").html("?");
	});

	$( ".A2" ).click(function() {
		$(".A1").toggleClass("disabled");
		$(".A3").toggleClass("disabled");
		$(".Medium").toggleClass("show");

		var resultMiddle = resultMale || resultFemale - (low + high);
		$(".number").html("?");
	});

	$( ".A3" ).click(function() {
		$(".A1").toggleClass("disabled");
		$(".A2").toggleClass("disabled");
		$(".High").toggleClass("show");

		var resultHigh = resultMale || resultFemale - (low + middle);
		$(".number").html("?");
	});

	// OLD
	$( ".E1" ).click(function() {
		$( ".White" ).toggleClass("show");

		var resultWhite = resultLow || resultMiddle || resultHigh - (black + aboriginal + metis + asian);
		$(".number").html(resultWhite);
	});

	$( ".E2" ).click(function() {
		$( ".Black" ).toggleClass("show");

		var resultBlack = resultLow || resultMiddle || resultHigh - (white + aboriginal + metis + asian);
		$(".number").html("0");
	});

	$( ".E3" ).click(function() {
		$( ".Aboriginal" ).toggleClass("show");

		var resultAboriginal = resultLow || resultMiddle || resultHigh - (white + black + metis + asian);
		$(".number").html(null);
	});

	$( ".E4" ).click(function() {
		$( ".Metis" ).toggleClass("show");

		var resultMetis = resultLow || resultMiddle || resultHigh - (white + black + aboriginal + asian);
		$(".number").html(null);
	});

	$( ".E5" ).click(function() {
		$( ".Asian" ).toggleClass("show");

		var resultAsian = resultLow || resultMiddle || resultHigh - (white + black + aboriginal + metis);
		$(".number").html(null);
	});

	// Option #3: Ethnicity
	// $("input[name='ethnicity']").on("change", function() {
	//     var $checkedbox = $("input[name='ethnicity']:checked");

	// 	if($checkedbox.length >= 2)
	// 	{
	//         var $uncheckedbox = $("input[name='ethnicity']:not(:checked)");
	// 		$.each($uncheckedbox,function() {
	// 			$(this).attr("disabled", "disabled");
	// 		});
	// 	}
	//     else
	//     {
	//         $("input[name='ethnicity']").removeAttr("disabled");
	//     }
	// });

	// Shows a popup with MLA information
	$(".headshot").click(function(){
		var idx = $(this).index() - 1;

		$(".tooltip").fadeIn("slow");
	    $(".tooltipName").html(MLAs[idx].Name);
	    $(".tooltipParty").html(MLAs[idx].Party);
	    $(".tooltipConstuency").html(MLAs[idx].Constuency);
	    $(".tooltipEthnicity").html(MLAs[idx].Ethnicity) + ",";
	    $(".tooltipAge").html(MLAs[idx].Age);
	});

	// Bounce and show result
	$(".rect").click(function(){
			console.log("Bounce test");
		   $(".others").fadeIn("slow");
	       $(".others").effect( "bounce",
	        {times:3}, 600 );
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