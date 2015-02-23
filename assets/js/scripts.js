$(function() {

	//console.log('scriptjs loaded and DOM ready');

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
		"Ethnicity": "White",
		"img_src": "assets/img/headshots/allan.jpg"
	},
	{ // Missing Data
		"Name": "James Allum",
		"Age": null,
		"Constuency": "Fort Garry-Riverview",
		"Party": "NDP",
		"Gender": "Male",
		"Ethnicity": "White",
		"img_src": "assets/img/headshots/allum.jpg"
	},
	{
		"Name": "Rob Altemeyer",
		"Age": 46,
		"Constuency": "Wolseley",
		"Party": "NDP",
		"Gender": "Male",
		"Ethnicity": "White",
		"img_src": "assets/img/headshots/altemeyer.jpg"
	},
	{
		"Name": "Steve Ashton",
		"Age": 58,
		"Constuency": "Thompson",
		"Party": "NDP",
		"Gender": "Male",
		"Ethnicity": "White",
		"img_src": "assets/img/headshots/ashton.jpg"
	},
	{
		"Name": "Peter Bjornson",
		"Age": 50,
		"Constuency": "Gimli",
		"Party": "NDP",
		"Gender": "Male",
		"Ethnicity": "White",
		"img_src": "assets/img/headshots/bjornson.jpg"
	},
	{ // Missing Data
		"Name": "Shanon Blady",
		"Age": null,
		"Constuency": "Kirkfield Park",
		"Party": "NDP",
		"Gender": "Female",
		"Ethnicity": "White",
		"img_src": "assets/img/headshots/blady.jpg"
	},
	{ // Missing Data
		"Name": "Erna Braun",
		"Age": null,
		"Constuency": "Rossmere",
		"Party": "NDP",
		"Gender": "Female",
		"Ethnicity": "White",
		"img_src": "assets/img/headshots/braun.jpg"
	},
	{
		"Name": "Stuart Briese",
		"Age": 68,
		"Constuency": "Agassiz",
		"Party": "PC",
		"Gender": "Male",
		"Ethnicity": "White",
		"img_src": "assets/img/headshots/briese.jpg"
	},
	{
		"Name": "Drew Caldwell",
		"Age": 54,
		"Constuency": "Brandon East",
		"Party": "NDP",
		"Gender": "Male",
		"Ethnicity": "White",
		"img_src": "assets/img/headshots/caldwell.jpg"
	},
	{ // Missing Data
		"Name": "Kevin Chief",
		"Age": 40,
		"Constuency": "Point Douglas",
		"Party": "NDP",
		"Gender": "Male",
		"Ethnicity": "White",
		"img_src": "assets/img/headshots/chief.jpg"
	},
	{
		"Name": "Dave Chomiak",
		"Age": 61,
		"Constuency": "Kildonan",
		"Party": "NDP",
		"Gender": "Male",
		"Ethnicity": "White",
		"img_src": "assets/img/headshots/chomiak.jpg"
	},
	{ // Missing Data
		"Name": "Deanne Crothers",
		"Age": null,
		"Constuency": "St. James",
		"Party": "NDP",
		"Gender": "Female",
		"Ethnicity": "White",
		"img_src": "assets/img/headshots/crothers.jpg"
	},
	{
		"Name": "Cliff Cullen",
		"Age": 52,
		"Constuency": "Spruce Woods",
		"Party": "PC",
		"Gender": "Male",
		"Ethnicity": "White",
		"img_src": "assets/img/headshots/cullen.jpg"
	},
	{ // Missing Data
		"Name": "Greg Dewar",
		"Age": null,
		"Constuency": "Selkirk",
		"Party": "NDP",
		"Gender": "Male",
		"Ethnicity": "White",
		"img_src": "assets/img/headshots/dewar.jpg"
	},

	{
		"Name": "Myrna Driedger",
		"Age": 63,
		"Constuency": "Charleswood",
		"Party": "PC",
		"Gender": "Female",
		"Ethnicity": "White",
		"img_src": "assets/img/headshots/driedger.jpg"
	},
	{
		"Name": "Ralph Eichler",
		"Age": 64,
		"Constuency": "Lakeside",
		"Party": "PC",
		"Gender": "Male",
		"Ethnicity": "White",
		"img_src": "assets/img/headshots/eichler.jpg"
	},
	{ // Missing Data
		"Name": "Wayne Ewasko",
		"Age": null,
		"Constuency": "Lac du Bonnet",
		"Party": "PC",
		"Gender": "Male",
		"Ethnicity": "White",
		"img_src": "assets/img/headshots/ewasko.jpg"
	},
	{ // Missing Data
		"Name": "Cameron Friesen",
		"Age": null,
		"Constuency": "Morden-Winkler",
		"Party": "PC",
		"Gender": "Male",
		"Ethnicity": "White",
		"img_src": "assets/img/headshots/friesen.jpg"
	},
	{
		"Name": "Dave Gaudreau",
		"Age": 43,
		"Constuency": "St. Norbert",
		"Party": "NDP",
		"Gender": "Male",
		"Ethnicity": "White",
		"img_src": "assets/img/headshots/gaudreau.jpg"
	},
	{
		"Name": "Jon Gerrard",
		"Age": 67,
		"Constuency": "River Heights",
		"Party": "Liberal",
		"Gender": "Male",
		"Ethnicity": "White",
		"img_src": "assets/img/headshots/gerrard.jpg"
	},
	{
		"Name": "Kelvin Goertzen",
		"Age": 45,
		"Constuency": "Steinbach",
		"Party": "PC",
		"Gender": "Male",
		"Ethnicity": "White",
		"img_src": "assets/img/headshots/goertzen.jpg"
	},
	{ // Missing Data
		"Name": "Cliff Graydon",
		"Age": null,
		"Constuency": "Emerson",
		"Party": "PC",
		"Gender": "Male",
		"Ethnicity": "White",
		"img_src": "assets/img/headshots/graydon.jpg"
	},
	{
		"Name": "Reg Helwer",
		"Age": 54,
		"Constuency": "Brandon West",
		"Party": "PC",
		"Gender": "Male",
		"Ethnicity": "White",
		"img_src": "assets/img/headshots/helwer.jpg"
	},
	{
		"Name": "Jennifer Howard",
		"Age": 43,
		"Constuency": "Fort Rouge",
		"Party": "NDP",
		"Gender": "Female",
		"Ethnicity": "White",
		"img_src": "assets/img/headshots/howard.jpg"
	},
	{ // Missing Data
		"Name": "Kerri Irvin-Ross",
		"Age": null,
		"Constuency": "",
		"Party": "",
		"Gender": "Female",
		"Ethnicity": "White",
		"img_src": "assets/img/headshots/irvinross.jpg"
	},
	{
		"Name": "Bidhu Jha",
		"Age": 72,
		"Constuency": "",
		"Party": "",
		"Gender": "Male",
		"Ethnicity": "Asian",
		"img_src": "assets/img/headshots/jha.jpg"
	},
	{ // Missing Data
		"Name": "Ron Kostyshyn",
		"Age": null,
		"Constuency": "Swan River",
		"Party": "NDP",
		"Gender": "Male",
		"Ethnicity": "White",
		"img_src": "assets/img/headshots/kostyshyn.jpg"
	},
	{
		"Name": "Ron Lemieux",
		"Age": 64,
		"Constuency": "Dawson Trail",
		"Party": "NDP",
		"Gender": "Male",
		"Ethnicity": "White",
		"img_src": "assets/img/headshots/lemieux.jpg"
	},
	{
		"Name": "Gord Mackintosh",
		"Age": 59,
		"Constuency": "St. Johns",
		"Party": "NDP",
		"Gender": "Male",
		"Ethnicity": "White",
		"img_src": "assets/img/headshots/mackintosh.jpg"
	},
	{
		"Name": "Jim Maloway",
		"Age": 62,
		"Constuency": "Elmwood",
		"Party": "NDP",
		"Gender": "Male",
		"Ethnicity": "White",
		"img_src": "assets/img/headshots/maloway.jpg"
	},
	{ // Missing Data
		"Name": "Flor Marcelino",
		"Age": null,
		"Constuency": "Logan",
		"Party": "NDP",
		"Gender": "Female",
		"Ethnicity": "",
		"img_src": "assets/img/headshots/marcelino.jpg"
	},
	{ // Missing Data
		"Name": "Ted Marcelino",
		"Age": null,
		"Constuency": "Tyndall Park",
		"Party": "NDP",
		"Gender": "Male",
		"Ethnicity": "",
		"img_src": "assets/img/headshots/marcelino2.jpg"
	},
	{ // Missing Data
		"Name": "Shannon Martin",
		"Age": null,
		"Constuency": "Moris",
		"Party": "PC",
		"Gender": "Male",
		"Ethnicity": "",
		"img_src": "assets/img/headshots/martin.jpg"
	},
	{ // Missing Data
		"Name": "Christine Melnick",
		"Age": null,
		"Constuency": "Riel",
		"Party": "NDP",
		"Gender": "Female",
		"Ethnicity": "",
		"img_src": "assets/img/headshots/melnick.jpg"
	},
	{
		"Name": "Bonnie Mitchelson",
		"Age": null,
		"Constuency": "River East",
		"Party": "PC",
		"Gender": "Female",
		"Ethnicity": "",
		"img_src": "assets/img/headshots/mitchelson.jpg"
	},
	{
		"Name": "Thomas Nevashonoff",
		"Age": 56,
		"Constuency": "Interlake",
		"Party": "NDP",
		"Gender": "Male",
		"Ethnicity": "White",
		"img_src": "assets/img/headshots/nevakshonoff.jpg"
	},
	{
		"Name": "Theresa Oswald",
		"Age": 48,
		"Constuency": "Seine River",
		"Party": "NDP",
		"Gender": "Female",
		"Ethnicity": "White",
		"img_src": "assets/img/headshots/oswald.jpg"
	},
	{ // Missing Data
		"Name": "Brian Pallister",
		"Age": null,
		"Constuency": "Fort Whyte",
		"Party": "PC",
		"Gender": "Male",
		"Ethnicity": "White",
		"img_src": "assets/img/headshots/pallister.jpg"
	},
	{ // Missing Data
		"Name": "Blaine Pedersen",
		"Age": null,
		"Constuency": "Midland",
		"Party": "PC",
		"Gender": "Male",
		"Ethnicity": "White",
		"img_src": "assets/img/headshots/pedersen.jpg"
	},
	{ // Missing Data
		"Name": "Clarence Pettersen",
		"Age": null,
		"Constuency": "Flin Flon",
		"Party": "NDP",
		"Gender": "Male",
		"Ethnicity": "White",
		"img_src": "assets/img/headshots/pettersen.jpg"
	},
	{
		"Name": "Doyle Piwniuk",
		"Age": 47,
		"Constuency": "Arthur-Virden",
		"Party": "PC",
		"Gender": "Male",
		"Ethnicity": "White",
		"img_src": "assets/img/headshots/piwniuk.jpg"
	},
	{ // Missing Data
		"Name": "Daryl Reid",
		"Age": null,
		"Constuency": "Transcona",
		"Party": "NDP",
		"Gender": "Male",
		"Ethnicity": "White",
		"img_src": "assets/img/headshots/reid.jpg"
	},
	{
		"Name": "Eric Robinson",
		"Age": 61,
		"Constuency": "Kewatinook",
		"Party": "NDP",
		"Gender": "Male",
		"Ethnicity": "",
		"img_src": "assets/img/headshots/robinson.jpg"
	},
	{
		"Name": "Jim Rondeau",
		"Age": 55,
		"Constuency": "Assiniboia",
		"Party": "NDP",
		"Gender": "Male",
		"Ethnicity": "",
		"img_src": "assets/img/headshots/rondeau.jpg"
	},
	{
		"Name": "Leanne Rowat",
		"Age": 52,
		"Constuency": "Riding Mountain",
		"Party": "PC",
		"Gender": "Female",
		"Ethnicity": "White",
		"img_src": "assets/img/headshots/rowat.jpg"
	},
	{ // Missing Data
		"Name": "Mohinder Saran",
		"Age": null,
		"Constuency": "The Maples",
		"Party": "NDP",
		"Gender": "Male",
		"Ethnicity": "",
		"img_src": "assets/img/headshots/saran.jpg"
	},
	{
		"Name": "Ron Schuler",
		"Age": 51,
		"Constuency": "St. Paul",
		"Party": "PC",
		"Gender": "Male",
		"Ethnicity": "",
		"img_src": "assets/img/headshots/schuler.jpg"
	},
	{ // Missing Data
		"Name": "Erin Selby",
		"Age": null,
		"Constuency": "Southdale",
		"Party": "NDP",
		"Gender": "Female",
		"Ethnicity": "White",
		"img_src": "assets/img/headshots/selby.jpg"
	},
	{
		"Name": "Gregory Selinger",
		"Age": 63,
		"Constuency": "St. Boniface",
		"Party": "NDP",
		"Gender": "Male",
		"Ethnicity": "White",
		"img_src": "assets/img/headshots/selinger.jpg"
	},
	{ // Missing Data
		"Name": "Dennis Smook",
		"Age": 60,
		"Constuency": "La Verendrye",
		"Party": "PC",
		"Gender": "Male",
		"Ethnicity": "",
		"img_src": "assets/img/headshots/smook.jpg"
	},
	{
		"Name": "Heather Stefanson",
		"Age": 44,
		"Constuency": "Tuxedo",
		"Party": "PC",
		"Gender": "Female",
		"Ethnicity": "White",
		"img_src": "assets/img/headshots/stefanson.jpg"
	},
	{
		"Name": "Stan Struthers",
		"Age": null,
		"Constuency": "Dauphin",
		"Party": "NDP",
		"Gender": "Male",
		"Ethnicity": "",
		"img_src": "assets/img/headshots/struthers.jpg"
	},
	{
		"Name": "Andrew Swan",
		"Age": 46,
		"Constuency": "Minto",
		"Party": "NDP",
		"Gender": "Male",
		"Ethnicity": "White",
		"img_src": "assets/img/headshots/swan.jpg"
	},
	{
		"Name": "Matt Wiebe",
		"Age": null,
		"Constuency": "Concordia",
		"Party": "NDP",
		"Gender": "Male",
		"Ethnicity": "White",
		"img_src": "assets/img/headshots/wiebe.jpg"
	},
	{
		"Name": "Melanie Wight",
		"Age": null,
		"Constuency": "Burrows",
		"Party": "NDP",
		"Gender": "Female",
		"Ethnicity": "White",
		"img_src": "assets/img/headshots/wight.jpg"
	},
	{
		"Name": "Ian Wishart",
		"Age": null,
		"Constuency": "Portage la Prairie",
		"Party": "PC",
		"Gender": "Male",
		"Ethnicity": "White",
		"img_src": "assets/img/headshots/wishart.jpg"
	}];

	var filteredMLAs = MLAs.slice(0); // copy MLAs
	var total = filteredMLAs.length;

	var refreshList = function () {
	    var list = filteredMLAs;
	    setTotal(list.length);

	    $MLA_List.empty();
	    $('.columns').empty();
	    $.each(list, function (index, value) {
	        $MLA_List.append($('<li/>').text(list[index].Name));
	        $('.columns').append(list[index].$img);
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
	    // console.log(this);
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

	$('.age').click(function() {
		//console.log(this);
	    removeFilter(age, 35); // improvement of remove filter required, e.g. remove all age filters
	    removeFilter(age, 36);
	    removeFilter(age, 65);
	    setFilter(age, parseInt(this.value));
	});

	var resetAll = function() {
		activeFilters = [];
	    $(':checkbox, :radio').attr('checked', false);
	    applyFilter();
	};

	function preload(arrayOfImages) {
    	$(arrayOfImages).each(function (index) {
    		//console.log(index);
    		MLAs[index].$img = $('<img />')
    			.attr('src',this)
    			.attr('id', 'img_' + index)
    			.addClass('headshot');

    		MLAs[index].$img.appendTo('.columns'); //.css('display','none');
    	});
    	filteredMLAs = MLAs.slice(0);
	}

	$('#reset').click(function(){
	    //console.log('reset form');
		resetAll();    
	});


	$(function () {
		resetAll();
		preload(_.pluck(MLAs, 'img_src'));
	    refreshList();
	});

	// Shows a popup with MLA information
	$(document).on('click', ".headshot", function(){
		var id = $(this).attr('id'); //index();
		var idx = id.split('_')[1];
		//console.log(idx);
		$(".tooltipName").html(MLAs[idx].Name);
		$(".tooltipParty").html(MLAs[idx].Party).prepend("<strong>Party: </strong>");
		$(".tooltipConstuency").html(MLAs[idx].Constuency).prepend("<strong>Constuency: </strong>");
		$(".tooltipEthnicity").html(MLAs[idx].Ethnicity).prepend("<strong>Ethnicity: </strong>");
		$(".tooltipAge").html(MLAs[idx].Age).prepend("<strong>Age: </strong>").append(" years old");
		showTooltip($(this));
	});

	// Positioning of the tooltips
	//$('img').click(function(){
	var showTooltip = function(img) {
	    //var img = $(this);
	    //console.log(img);
	    var $tooltip = $('.tooltip')
	    .show(100)
	    .css({
	        top: img.offset().top + img.height(),
	        left: img.offset().left
	    });

	    $tooltip.stop(true, true).delay(2000).fadeOut('slow'); // auto-close after 2 seconds
	}//);

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