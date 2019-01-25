$(document).ready(function () { 
    $('#search').on("keyup",function (e) {

        if(e.which == 13) {
            $('#search').click();    
        } 
    });
    
    $('#search').click(function (e) {
       var userInput = $('#search').val();
       console.log(userInput);
    });
});

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
.then(
    function(response) {
        console.log('success:', response);
    }, 
    function(error) {
        console.log('error:', error);
    
        

    });




var dogURl = "http://www.recipepuppy.com/api/?q="
var dogQ = "eggs"

var dogFullUrl = dogURl + dogQ 

var foodTitle = ""
var ingredients = "" 
var link = "" 

$.ajax({
    url: dogFullUrl,
    method: "GET"
}).then(function(response){
    for (i = 0; i < response.data.length; i++) {
         foodTitle = response.data[i].title;
         ingredients = response.data[i].ingredients;
         link = response.data[i].href;
    }
    console.log(foodTitle);
    console.log(ingredients);
    console.log(link);
})