Template.consults

	$(function(){
    	//ajax mocks
    
	$.mockjaxSettings.responseTime = 500; 
    
    $.mockjax({
        url: '/post',
        response: function(settings) {
            log(settings, this);
        }
    });

    $.mockjax({
        url: '/error',
        status: 400,
        statusText: 'Bad Request',
        response: function(settings) {
            this.responseText = 'Please input correct value'; 
            log(settings, this);
        }        
    });
    
    $.mockjax({
        url: '/status',
        status: 500,
        response: function(settings) {
            this.responseText = 'Internal Server Error';
            log(settings, this);
        }        
    });
  
    $.mockjax({
        url: '/groups',
        response: function(settings) {
            this.responseText = [ 
             {value: 0, text: 'Guest'},
             {value: 1, text: 'Service'},
             {value: 2, text: 'Customer'},
             {value: 3, text: 'Operator'},
             {value: 4, text: 'Support'},
             {value: 5, text: 'Admin'}
           ];
           log(settings, this);
        }        
    });
    
    function log(settings, response) {
            var s = [], str;
            s.push(settings.type.toUpperCase() + ' url = "' + settings.url + '"');
            for(var a in settings.data) {
                if(settings.data[a] && typeof settings.data[a] === 'object') {
                    str = [];
                    for(var j in settings.data[a]) {str.push(j+': "'+settings.data[a][j]+'"');}
                    str = '{ '+str.join(', ')+' }';
                } else {
                    str = '"'+settings.data[a]+'"';
                }
                s.push(a + ' = ' + str);
            }
            s.push('RESPONSE: status = ' + response.status);

            if(response.responseText) {
                if($.isArray(response.responseText)) {
                    s.push('[');
                    $.each(response.responseText, function(i, v){
                       s.push('{value: ' + v.value+', text: "'+v.text+'"}');
                    }); 
                    s.push(']');
                } else {
                   s.push($.trim(response.responseText));
                }
            }
            s.push('--------------------------------------\n');
            $('#console').val(s.join('\n') + $('#console').val());
    }    
  
   //defaults
   $.fn.editable.defaults.url = '/post'; 

            var c = window.location.href.match(/c=inline/i) ? 'inline' : 'popup';
            $.fn.editable.defaults.mode = c === 'inline' ? 'inline' : 'popup';

                $('#c').val(c);
    //enable / disable
   $('#enable').click(function() {
       $('#user .editable').editable('toggleDisabled');
   });    
    
    //editables 
    $('#username').editable({
           url: '/post',
           type: 'text',
           pk: 1,
           name: 'username',
           title: 'Enter username'
    });
	
	$('#my-datepicker').datepicker({
	
	});
	
    $('#entity').editable({
        prepend: "not selected",
        source: [
            {value: 1, text: 'I - Individual'},
            {value: 2, text: 'GE - Government'},
			{value: 3, text: 'PE - Public'},
			{value: 4, text: 'CO - Community'},
			{value: 5, text: 'PRE - Private'},
        ],
    });
	
    $('#methodofcontact').editable({
        prepend: "not selected",
        source: [
            {value: 1, text: 'Email'},
            {value: 2, text: 'VP/Phone'},
			{value: 3, text: 'In-person'},
			{value: 4, text: 'Other'},
        ],
    });
	
    $('#reasonforcontact').editable({
        prepend: "not selected",
        source: [
            {value: 1, text: 'Communication Access'},
            {value: 2, text: 'Hearing Assistive Technology'},
			{value: 3, text: 'CART'},
			{value: 4, text: 'Technology Assistance'},
			{value: 5, text: 'Referral'},
			{value: 6, text: 'Other'}
        ],
    });
	
    $('#hearingstatus').editable({
        prepend: "not selected",
        source: [
            {value: 1, text: 'Deaf'},
            {value: 2, text: 'Hard of Hearing'},
			{value: 3, text: 'DeafBlind'},
			{value: 4, text: 'Late Deafened'},
			{value: 5, text: 'Hearing'},
			{value: 6, text: 'Declined to Answer'},
        ],
    });
	

$('#persontakingcall').editable({
    prepend: "not selected",
    source: [
        {value: 1, text: 'Timothy'},
        {value: 2, text: 'Cliff'},
		{value: 3, text: 'Ryan'},
		{value: 4, text: 'JoAnne'},
		{value: 5, text: 'Cheri'},
		{value: 6, text: 'Mandy'}
    ],
	});
    
    $('#firstname').editable({
        validate: function(value) {
           if($.trim(value) == '') return 'This field is required';
        }
    });
    
   $('#gender').editable({
      prepend: "not selected",
      source: [
        	{value: 1, text: 'Male'},
            {value: 2, text: 'Female'},
			{value: 3, text: 'Transgender'},
			{value: 4, text: 'Non-binary'},
			{value: 5, text: 'Declined to Answer'}	
        ],
        display: function(value, sourceData) {
             var colors = {"": "gray", 1: "green", 2: "blue"},
                 elem = $.grep(sourceData, function(o){return o.value == value;});
                 
             if(elem.length) {    
                 $(this).text(elem[0].text).css("color", colors[value]); 
             } else {
                 $(this).empty(); 
             }
        }   
    });    
    
    $('#status').editable();   
    
    $('#group').editable({
       showbuttons: false 
    });   

    $('#vacation').editable({
        datepicker: {
            todayBtn: 'linked'
        } 
    });  
        
    $('#dob').editable();
          
    $('#event').editable({
        placement: 'right',
        combodate: {
            firstItem: 'name'
        }
    });                  
    
    $('#comments').editable({
        showbuttons: 'bottom'
    }); 
    
    $('#note').editable(); 
    $('#pencil').click(function(e) {
        e.stopPropagation();
        e.preventDefault();
        $('#note').editable('toggle');
   }); 
   
   $('#coloradocounties').editable({
	   source: ["Adams", "Alamosa", "Arapahoe", "Archuleta", "Baca", "Bent", "Boulder", "City and County of Broomfield", "Chaffee", "Cheyenne", "Clear Creek", "Conejos", "Costilla", "Crowley", "Custer", "Delta", "City and County of Denver", "Dolores", "Douglas", "Eagle", "El Paso", "Elbert", "Fremont", "Garfield", "Gilpin", "Grand", "Gunnison", "Hinsdale", "Huerfano", "Jackson", "Jefferson", "Kiowa", "Kit Carson", "La Plata", "Lake", "Larimer", "Las Animas", "Lincoln", "Logan", "Mesa", "Mineral", "Moffat", "Montezuma", "Montrose", "Morgan", "Otero", "Ouray", "Park", "Phillips", "Pitkin", "Prowers", "Pueblo", "Rio Blanco", "Rio Grande", "Routt", "Saguache", "San Juan", "San Miguel", "Sedgwick", "Summit", "Teller", "Washington", "Weld", "Yuma"]
	
   }); 
   
   $('#coloradocities').editable({
	   source: ["Aguilar", "Akron", "Alamosa", "Alma", "Antonito", "Arriba", "Arvada", "Aspen", "Ault", "Aurora", "Avon", "Basalt", "Bayfield", "Bennett", "Berthoud", "Bethune", "Black Hawk", "Blanca", "Blue River", "Bonanza", "Boone", "Boulder", "Bow Mar", "Branson", "Breckenridge", "Brighton", "Brookside", "Broomfield", "Bush", "Buena Vista", "Burlington", "Calhan", "Campo", "Canon City", "Carbondale", "Castle Pines", "Castle Rock", "Cedaredge", "Centennial", "Center", "Central City", "Cheraw", "Cherry Hills Village", "Cheyenne Wells", "Coal Creek", "Cokedale", "Collbran", "Colorado Springs", "Columbine Valley", "Commerce City", "Cortez", "Craig", "Crawford", "Creede", "Crested Butte", "Crestone", "Cripple Creek", "Crook", "Crowley", "Dacono", "De Beque", "Deer Trail", "Del Norte", "Delta", "Denver", "Dillon", "Dinosaur", "Dolores", "Dove Creek", "Durango", "Eads", "Eagle", "Eaton", "Eckley", "Edgewater", "Elizabeth", "Empire", "Englewood", "Erie", "Estes Park", "Evans", "Fairplay", "Federal Heights", "Firestone", "Flagler", "Fleming", "Florence", "Fort Collins", "Fort Lupton", "Fort Morgan", "Fountain", "Fowler", "Foxfield", "Fraser", "Frederick", "Frisco", "Fruita", "Garden City", "Genoa", "Georgetown", "Gilcrest", "Glendale", "Glenwood Springs", "Golden", "Granada", "Granby", "Grand Junction", "Grand Lake", "Greeley", "Green Mountain Falls", "Greenwood Village", "Grover", "Gunnison", "Gypsum", "Hartman", "Haswell", "Haxtun", "Hayden", "Hillrose", "Holly", "Holyoke", "Hooper", "Hot Sulphur Springs", "Hotchkiss", "Hudson", "Hugo", "Idaho Springs", "Ignacio", "Illiff", "Jamestown", "Johnstown", "Julesburg", "Keenesburg", "Kersey", "Kim", "Kiowa", "Kit Carson", "Kremmling", "La Jara", "La Junta", "La Veta", "Lafayette", "Lake City", "Lakeside", "Lakewood", "Lamar", "Larkspur", "Las Animas", "LaSalle", "Leadville", "Limon", "Littleton", "Lochbuie", "Log Lane Village", "Lone Tree", "Longmont", "Louisville", "Loveland", "Lyons", "Manassa", "Mancos", "Manitou Springs", "Manzanola", "Marble", "Mead", "Meeker", "Merino", "Milliken", "Minturn", "Moffat", "Monte Vista", "Montezuma", "Montrose", "Monument", "Morrison", "Mount Crested Butte", "Mountain View", "Mountain Village", "Naturita", "Nederland", "New Castle", "Northglenn", "Norwood", "Nucia", "Nunn", "Oak Creek", "Olathe", "Olney Springs", "Ophir", "Orchard City", "Ordway", "Otis", "Ouray", "Ovid", "Pagosa Springs", "Palisade", "Palmer Lake", "Paoli", "Parachute", "Parker", "Peetz", "Pierce", "Pitkin", "Platteville", "Poncha Springs", "Pritchett", "Pueblo", "Ramah", "Rangely", "Raymer", "Red Cliff", "Rico", "Ridgway", "Rifle", "Rockvale", "Rocky Ford", "Romeo", "Rye", "Saguache", "Salida", "San Luis", "Sanford", "Sawpit", "Sedgwick", "Seibert", "Severance", "Sheridan", "Sheridan Lake", "Silt", "Silver Cliff", "Silver Plume", "Silverthorne", "Silverton", "Simla", "Snowmass Village", "South Fork", "Springfield", "Starkville", "Steamboat Springs", "Sterling", "Stratton", "Sugar City", "Superior", "Swink", "Telluride", "Thornton", "Timnath", "Trinidad", "Two Buttes", "Vail", "Victor", "Vilas", "Vona", "Walden", "Walsenburg", "Walsh", "Ward", "Wellington", "Westcliffe", "Westminster", "Wheat Ridge", "Wiggins", "Wiley", "Williamsburg", "Windsor", "Winter Park", "Woodland Park", "Wray", "Yampa", "Yuma"]
	
   });  
   
   
   $('#reasonforcontact').editable({
       pk: 1,
       limit: 6,
       source: [
        {value: 1, text: 'communication access'},
        {value: 2, text: 'hearing assistive technology'},
        {value: 3, text: 'CART'},
        {value: 4, text: 'technology assistance'},
        {value: 5, text: 'referral'},
		{value: 6, text: 'other'}
       ]
    }); 
                   
         
   $('#user .editable').on('hidden', function(e, reason){
        if(reason === 'save' || reason === 'nochange') {
            var $next = $(this).closest('tr').next().find('.editable');
            if($('#autoopen').is(':checked')) {
                setTimeout(function() {
                    $next.editable('show');
                }, 300); 
            } else {
                $next.focus();
            } 
        }
   });
});