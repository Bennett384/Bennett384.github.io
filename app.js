console.log($);

$(() =>{

    var settings = {
    	"async": true,
    	"crossDomain": true,
    	"url": "https://brianiswu-open-brewery-db-v1.p.rapidapi.com/breweries?by_state=NY&by_name=cooper&by_tag=patio&by_type=micro",
    	"method": "GET",
    	"headers": {
    		"x-rapidapi-host": "brianiswu-open-brewery-db-v1.p.rapidapi.com",
    		"x-rapidapi-key": "db29912736msh2b64448a0652826p1b58e5jsnda92dd86febf"
    	}
    }

    $.ajax(settings).done(function (response) {
    	console.log(response);
    })










})
