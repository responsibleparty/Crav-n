
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
        yelpName = response.businesses[i].name;
        yelpContact.phone = response.businesses[i].display_phone;
        yelpContact.address = response.businesses[i].location;
        yelpRating = response.businesses[i].rating;
    }
    console.log(yelpName);
    console.log(yelpContact);
    console.log(yelpRating);
});




var dogURl = "http://www.recipepuppy.com/api/?q=";
var dogQ = "eggs";
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
    console.log(data);
    for (i = 0; i < response.results; i++) {
         dogTitle = response.results[i].title;
         ingredients = response.results[i].ingredients;
         link = response.results[i].href;
    }
    console.log(dogTitle);
    console.log(ingredients);
    console.log(link);
})