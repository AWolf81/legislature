$(function() {

	// Numbers
	var total = 56;
	var male = 41;
	var female = 15;
	var low = {};
	var middle = {};
	var high = {};
	var white = 41;
	var black = 0;
	var aboriginal = null;
	var metis = null;
	var asian = null;

	var $total = $('#count');
	var $MLA_List = $('#MLA_List');

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
	{ // Missing Data
		"Name": "James Allum",
		"Age": null,
		"Constuency": "Fort Garry-Riverview",
		"Party": "NDP",
		"Gender": "Male",
		"Ethnicity": "White"
	},
	{
		"Name": "Rob Altemeyer",
		"Age": 46,
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
		"Age": 50,
		"Constuency": "Gimli",
		"Party": "NDP",
		"Gender": "Male",
		"Ethnicity": "White"
	},
	{ // Missing Data
		"Name": "Shanon Blady",
		"Age": null,
		"Constuency": "Kirkfield Park",
		"Party": "NDP",
		"Gender": "Female",
		"Ethnicity": "White"
	},
	{ // Missing Data
		"Name": "Erna Braun",
		"Age": null,
		"Constuency": "Rossmere",
		"Party": "NDP",
		"Gender": "Female",
		"Ethnicity": "White"
	},
	{
		"Name": "Stuart Briese",
		"Age": 68,
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
	{ // Missing Data
		"Name": "Kevin Chief",
		"Age": 40,
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
	{ // Missing Data
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
	{ // Missing Data
		"Name": "Greg Dewar",
		"Age": null,
		"Constuency": "Selkirk",
		"Party": "NDP",
		"Gender": "Male",
		"Ethnicity": "White"
	},
	{
		"Name": "Myrna Driedger",
		"Age": 63,
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
	{ // Missing Data
		"Name": "Wayne Ewasko",
		"Age": null,
		"Constuency": "Lac du Bonnet",
		"Party": "PC",
		"Gender": "Male",
		"Ethnicity": "White"
	},
	{ // Missing Data
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
	{ // Missing Data
		"Name": "Cliff Graydon",
		"Age": null,
		"Constuency": "Emerson",
		"Party": "PC",
		"Gender": "Male",
		"Ethnicity": "White"
	},
	{
		"Name": "Reg Helwer",
		"Age": 54,
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
	{ // Missing Data
		"Name": "Kerri Irvin-Ross",
		"Age": null,
		"Constuency": "",
		"Party": "",
		"Gender": "Female",
		"Ethnicity": "White"
	},
	{
		"Name": "Bidhu Jha",
		"Age": 72,
		"Constuency": "",
		"Party": "",
		"Gender": "Male",
		"Ethnicity": "Asian"
	},
	{ // Missing Data
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
	{ // Missing Data
		"Name": "Flor Marcelino",
		"Age": null,
		"Constuency": "Logan",
		"Party": "NDP",
		"Gender": "Female",
		"Ethnicity": ""
	},
	{ // Missing Data
		"Name": "Ted Marcelino",
		"Age": null,
		"Constuency": "Tyndall Park",
		"Party": "NDP",
		"Gender": "Male",
		"Ethnicity": ""
	},
	{ // Missing Data
		"Name": "Shannon Martin",
		"Age": null,
		"Constuency": "Moris",
		"Party": "PC",
		"Gender": "Male",
		"Ethnicity": ""
	},
	{ // Missing Data
		"Name": "Christine Melnick",
		"Age": null,
		"Constuency": "Riel",
		"Party": "NDP",
		"Gender": "Female",
		"Ethnicity": ""
	},
	{
		"Name": "Bonnie Mitchelson",
		"Age": null,
		"Constuency": "River East",
		"Party": "PC",
		"Gender": "Female",
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
	{ // Missing Data
		"Name": "Brian Pallister",
		"Age": null,
		"Constuency": "Fort Whyte",
		"Party": "PC",
		"Gender": "Male",
		"Ethnicity": "White"
	},
	{ // Missing Data
		"Name": "Blaine Pedersen",
		"Age": null,
		"Constuency": "Midland",
		"Party": "PC",
		"Gender": "Male",
		"Ethnicity": "White"
	},
	{ // Missing Data
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
	{ // Missing Data
		"Name": "Daryl Reid",
		"Age": null,
		"Constuency": "Transcona",
		"Party": "NDP",
		"Gender": "Male",
		"Ethnicity": "White"
	},
	{
		"Name": "Eric Robinson",
		"Age": 61,
		"Constuency": "Kewatinook",
		"Party": "NDP",
		"Gender": "Male",
		"Ethnicity": ""
	},
	{
		"Name": "Jim Rondeau",
		"Age": 55,
		"Constuency": "Assiniboia",
		"Party": "NDP",
		"Gender": "Male",
		"Ethnicity": ""
	},
	{
		"Name": "Leanne Rowat",
		"Age": 52,
		"Constuency": "Riding Mountain",
		"Party": "PC",
		"Gender": "Female",
		"Ethnicity": "White"
	},
	{ // Missing Data
		"Name": "Mohinder Saran",
		"Age": null,
		"Constuency": "The Maples",
		"Party": "NDP",
		"Gender": "Male",
		"Ethnicity": ""
	},
	{
		"Name": "Ron Schuler",
		"Age": 51,
		"Constuency": "St. Paul",
		"Party": "PC",
		"Gender": "Male",
		"Ethnicity": ""
	},
	{ // Missing Data
		"Name": "Erin Selby",
		"Age": null,
		"Constuency": "Southdale",
		"Party": "NDP",
		"Gender": "Female",
		"Ethnicity": "White"
	},
	{
		"Name": "Gregory Selinger",
		"Age": 63,
		"Constuency": "St. Boniface",
		"Party": "NDP",
		"Gender": "Male",
		"Ethnicity": "White"
	},
	{ // Missing Data
		"Name": "Dennis Smook",
		"Age": 60,
		"Constuency": "La Verendrye",
		"Party": "PC",
		"Gender": "Male",
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
		"Constuency": "Dauphin",
		"Party": "NDP",
		"Gender": "Male",
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
	];

	var filteredMLAs = MLAs.slice(0); // copy MLAs
	var total = filteredMLAs.length;

	var refreshList = function () {
	    var list = filteredMLAs;
	    setTotal(list.length);

	    $MLA_List.empty();
	    $.each(list, function (index, value) {
	        $MLA_List.append($('<li/>').text(list[index].Name));
	    });
	};
	var setTotal = function (value) {
	    $total.text(value);
	};

	// filter methods
	var gender = function (array, gender) {
	    //console.log('gender filter called!', gender);
	    return _.where(array, {
	        "Gender": gender
	    });
	};

	var ethnicity = function (array, ethnic) {
	    //console.log('ethnic filter called!', array, ethnic);
	    return _.where(array, {
	        "Ethnicity": ethnic
	    });
	};

	var age = function(array, ageRange) {
	    //under 35, 36-64, 65+
	    return _.filter(array, function(MLA) {
	        //console.log(MLA.Age);
	        switch(ageRange) {
	            case 35:
	                return ( MLA.Age <= 35 );
	            case 36:
	                return ( MLA.Age >= 35 && MLA.Age <= 64);
	            case 65:
	                return ( MLA.Age >= 65 );
	        };
	        return false;
	    });
	};

	var activeFilters = [];
	var setFilter = function (method, param) {
	    var newFilter = {
	        method: method,
	        param: param
	    };

	    var matchedFilter = _.find(activeFilters, newFilter),
	        index = activeFilters.indexOf(matchedFilter);
	    
	    if ( index == -1 ) {
	        activeFilters.push(newFilter);
	    } 
	    
	    applyFilter();
	};

	var removeFilter = function(method, param) {
	    var filter = {
	        method: method,
	        param: param
	    };
	    
	    var index = activeFilters.indexOf(_.find(activeFilters, filter));
	    
	    if (index > -1) {
	        activeFilters.splice(index, 1);
	    }
	    
	    applyFilter(); // re-apply filter to update list
	};

	var applyFilter = function () {
	    var filtered = MLAs.slice(0);
	    $.each(activeFilters, function () {
	        filtered = this.method(filtered, this.param);
	    });
	    filteredMLAs = filtered ? filtered: [];
	    refreshList();
	};

	$('#Male, #Female').click(function () {
	    //console.log(this.id);
	    removeFilter(gender, this.id =='Male'? 'Female': 'Male'); // remove not active filter
	    setFilter(gender, this.id);
	});

	$('#White, #Black, #Asian, #Metis, #Aboriginal').click(function () {
	    //console.log(this.checked);
	    var checkedEthnic = _.pluck($('input[name="ethnicity"]'), 'checked'); // array with true/false values
	    var checkedCount = _.reduce(checkedEthnic, function(memo, num){ 
	        return memo + num; 
	    }, 0);
	    console.log(checkedCount);
	    
	    if ( checkedCount <= 2 ) {
	        if ( this.checked ) {
	            setFilter(ethnicity, this.id); //'White');
	        }
	        else {
	            removeFilter(ethnicity, this.id); //'White');
	        }
	    }
	    else {
	        console.log('Max. 2 ethnic filters can be active!');
	        this.checked = false;
	    }
	});

	$('.Age').click(function() {
	    removeFilter(age, 35); // improvement of remove filter required, e.g. remove all age filters
	    removeFilter(age, 36);
	    removeFilter(age, 65);
	    setFilter(age, parseInt(this.value));
	});

	$('#reset').click(function(){
	    //console.log('reset form');
	    activeFilters = [];
	    $(':checkbox, :radio').attr('checked', false);
	    applyFilter();
	});

	$(function () {
	    refreshList();
	});

	// Shows a popup with MLA information
	$(".headshot").click(function(){
		var idx = $(this).index();

		$(".tooltipName").html(MLAs[idx].Name);
		$(".tooltipParty").html(MLAs[idx].Party).prepend("<strong>Party: </strong>");
		$(".tooltipConstuency").html(MLAs[idx].Constuency).prepend("<strong>Constuency: </strong>");
		$(".tooltipEthnicity").html(MLAs[idx].Ethnicity).prepend("<strong>Ethnicity: </strong>");
		$(".tooltipAge").html(MLAs[idx].Age).prepend("<strong>Age: </strong>").append(" years old");
	});

	// Positioning of the tooltips
	$('img').click(function(){
	    var img = $(this);

	    $('.tooltip')
	    .show(100)
	    .css({
	        top: img.offset().top + img.height(),
	        left: img.offset().left
	    });
	});

	// If window resizes, hide tooltip
	$( window ).resize(function() {
	 	$(".tooltip").fadeOut("slow")
	});

	// Bounce and show result
	$(".rect").click(function(){
		// console.log("Bounce test");
		$(".others").fadeIn("slow");
		$(".others").effect( "bounce",
			{times: 3}, 600 );
	});

	// This hides the footer on click when closed
	$(".crossContainer").click(function(){
		$("footer").slideUp("slow", function(){
			console.log("No feedback makes us sad.");
		});
	});

	// If "Mobile" sized, show them the install on your phone prompt
	$(window).resize(function(){
		var w = $(this).innerWidth();
		if (w <= 320){
			$(".install").fadeIn();
		} else {
			$(".install").fadeOut();
		}
	});

	// If clicked, show next step
	$(".homescreen").click(function(){
		$(".install").hide();
		$(".add").show();
	});

	// I heard you like smooth scroll
	$('a[href*=#]:not([href=#])').click(function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
			if (target.length) {
				$('html,body').animate({
					scrollTop: target.offset().top
				}, 1000);
				return false;
			}
		}
	});

	// This hides the credits
	$(".credits").hide();
});