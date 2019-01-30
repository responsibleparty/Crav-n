
// Build API request url for Yelp
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
var yelpImageUrl = "";

var userInput = "";

// Make API request for Yelp
function yelpSearch(){
    params.term = userInput;
    $.ajax ({
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
            yelpImageUrl = response.businesses[j].image_url;

        }
        console.log(yelpName);
        console.log(yelpContact);
        console.log(yelpRating);
        console.log(yelpImageUrl);
    });
}


// API for Recipe Puppy

function recipeSearch(event){
    $("#food-input").empty();
        
    var dogURl = "http://www.recipepuppy.com/api/?q=";
    console.log(userInput);

    //Complete URl with parameter
    var dogFullUrl = corsProxy + dogURl + userInput;
    
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
        for (i = 0; i < data.results.length; i++) {
            dogTitle = data.results[i].title;
            ingredients = data.results[i].ingredients;
            link = data.results[i].href;
        }
        console.log(dogTitle);
        console.log(ingredients);
        console.log(link);
    })


}

$(document).ready(function(){


    $('#submitEnter').keyup(function() {
        if ($(this).val().length > 0) {
           $('#formSearch').show();
        } else {
           $('#submitButton').hide();
        }
    });
    $("#submitButton").on("click", function(){
        userInput = $("#food-input").val().trim();

        // get form and then get the checkbox
        var formSearch = document.getElementById("formSearch");
        var restaurantCheckbox = formSearch.restaurantCheckbox;
        var recipeCheckbox = formSearch.recipeCheckbox;

        

        if(restaurantCheckbox.checked === true) {
            // Call ajax yelpSearch function 
            yelpSearch();
            
        }
        if(recipeCheckbox.checked === true) {
            recipeSearch();
        }
        

    });
    
    
})
// Create condition statements 
// IF User clicks on only restaurants: show restaurant results with Yelp
// IF User clicks on only recipes: show recipe results from RecipePuppy
// IF User clicks on only Both: show BOTH restaurant and recipes from Yelp and RecipePuppy

// Set the elements to visibility or display. Not append.
// Put the elements in one div 
// put Search.html and results.html in Welcome.html. Only have one html file.

