
// Build API request url for Yelp
var corsProxy = "https://cors-anywhere.herokuapp.com/";
var endpointUrl = "https://api.yelp.com/v3/businesses/search";
var fullUrl = corsProxy + endpointUrl;

// API key
var apiKey = 'A6gmtllBxdAgu_ikQkG56eG9de48BNQVoLuwbxlnVlA-qySFfFokZCkAipK930RvAJF3NdjErxOOTVb2FoIvvW-_3NMsQyPhE6kpOUlvy8TVaUDw-VNvVFVMRlZBXHYx';

// GET parameters to include
var params = {
    term: "food",
    location: "San Diego",
    limit: 10
};

// var yelpName = ""
// var yelpContact = {
//     phone: "",
//     address:""
// };
// var yelpRating = "";
// var yelpImageUrl = "";

var userInput = "";

// Make API request for Yelp
function yelpSearch(){
    $("#yelpCards").empty();
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
            // Create a function call for card in the restaurant search
            createYelpCard(response.businesses[j])
        }
        $("#searchResults").show();
        $("#restaurantResults").show();
    });
}
function createYelpCard(businessInfo) {
    
    var card =
        '<div class="card">' +
            '<div class="card-header">' +
                '<div class="aaa">' + yelpName + '</div>' +
            '</div>' +
            '<div class="card-body">' +
                '<div class="aaa">Phone: ' + yelpContact.phone + '</div>' +
                '<div class="aaa">Address: <br>' +
                    yelpContact.address.display_address[0] +
                    '<br>' +
                    yelpContact.address.display_address[1] +
                    '</div>' +
                '<div class="aaa">Rating: ' + yelpRating + '</div>' +
                '<div class="aaa">' +
                    '<img class="aaa" src="' + yelpImageUrl + '">' +
                '</div>' +
            '</div>' +
        '</div>';

    // $("#yelpCards").append(card2);
    document.getElementById("yelpCards").innerHTML += card;
    
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
        for (i = 0; i < response.results; i++) {
            dogTitle = response.results[i].title;
            ingredients = response.results[i].ingredients;
            link = response.results[i].href;
        }
        console.log(dogTitle);
        console.log(ingredients);
        console.log(link);
        $("#searchResults").show();
        $("#recipeResults").show();
    })


}

$(document).ready(function(){
    // Welcome page -show
    // Click enter- hides welcome page
    // Form page -shows


    $(".welcomeDescription").show();
    $('#formSearch').hide();
    $("#searchResults").hide();    
    // User clicks on Enter button and opening page will hide
    $('#submitEnter').on("click",function() {
        
        // Form search will show after Enter button
        
        $('#formSearch').show();
        $(".welcomeDescription").hide();
            
        
    });

    $("#submitSearch").on("click", function(){
        userInput = $("#food-input").val().trim(); 
        $("#restaurantResults").hide();
        $("#recipeResults").hide();
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

