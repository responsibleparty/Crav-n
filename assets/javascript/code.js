
// Build API request url
var corsProxy = "https://cors-anywhere.herokuapp.com/";
var endpointUrl = "https://api.yelp.com/v3/businesses/search";
var fullUrl = corsProxy + endpointUrl;

// API key
var apiKey = 'A6gmtllBxdAgu_ikQkG56eG9de48BNQVoLuwbxlnVlA-qySFfFokZCkAipK930RvAJF3NdjErxOOTVb2FoIvvW-_3NMsQyPhE6kpOUlvy8TVaUDw-VNvVFVMRlZBXHYx';

// GET parameters to include
var params = {
    term: "food",
    location: "San Diego"
};

var yelpName = ""
var yelpContact = {
    phone: "",
    address:""
};
var yelpRating = "";
// Make API request
$.ajax({
    url: fullUrl,
    data: params,
    beforeSend: function (xhr) {
        xhr.setRequestHeader(
            'Authorization',
            'Bearer ' + apiKey
    )}
})
.then(function(response){
    console.log(response);
    for(j = 0; j < response.businesses.length; j++){
        yelpName = response.businesses[j].name;
        yelpContact.phone = response.businesses[j].display_phone;
        yelpContact.address = response.businesses[j].location;
        yelpRating = response.businesses[j].rating;
    }
    console.log(yelpName);
    console.log(yelpContact);
    console.log(yelpRating);
});




var dogURl = "http://www.recipepuppy.com/api/?q=";
var dogQ = "bacon";
//Complete URl with parameter
var dogFullUrl = corsProxy + dogURl + dogQ ;

var dogTitle = "" ;
var ingredients = "" ;
var link = "" ;
//Make ajax call
$.ajax({
    url: dogFullUrl,
    method: "GET"
}).then(function(response){
   var data = JSON.parse(response);
    //console.log(data);
    console.log('this is working!!')
    for (var i = 0; i <  data.results.length; i++) {
        console.log('this is working')
         dogTitle = data.results[i].title;
         ingredients = data.results[i].ingredients;
         link = data.results[i].href;
         console.log('dogTitle', dogTitle);
         console.log('ingredients', ingredients);
         console.log('link', link);
    }

})