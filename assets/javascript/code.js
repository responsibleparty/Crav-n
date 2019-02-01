
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
    var yelpName = businessInfo.name;
    var yelpContact = {
            phone: businessInfo.display_phone,
            address: businessInfo.location
        }
    var yelpRating = businessInfo.rating;
    var yelpImageUrl = businessInfo.image_url;
    var card = $("<div>");
    card.addClass("card");
    var cardHeader = $("<div>");
    cardHeader.addClass("card-header");
    var cardBody = $("<div>");
    cardBody.addClass("card-body");
    var nameDiv = $("<div>");
    nameDiv.addClass("aaa");
    nameDiv.text(yelpName);
    var phoneDiv = $("<div>");
    phoneDiv.addClass("aaa");
    phoneDiv.text("Phone: " + yelpContact.phone);
    var addressDiv = $("<div>");
    addressDiv.addClass("aaa");
    addressDiv.append("Address: ");
    addressDiv.append("<br>");
    addressDiv.append(yelpContact.address.display_address[0]);
    addressDiv.append("<br>");
    addressDiv.append(yelpContact.address.display_address[1]);
    var ratingDiv = $("<div>");
    ratingDiv.addClass("aaa");
    ratingDiv.text("Rating: " + yelpRating);
    var imgDiv = $("<div>");
    imgDiv.addClass("aaa");
    var img = $("<img>");
    img.addClass("aaa");
    img.attr('src', yelpImageUrl);
    
    
    imgDiv.append(img);
    cardHeader.append(nameDiv);
    cardBody.append(phoneDiv);
    cardBody.append(addressDiv);
    cardBody.append(ratingDiv);
    cardBody.append(imgDiv);
    card.append(cardHeader);
    card.append(cardBody);
    // $("#yelpCards").append(cardYelp);
    var cardYelp =
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
    // $("#yelpCards").append(cardYelp);
    document.getElementById("yelpCards").innerHTML += cardYelp;
    
}
// API for Recipe Puppy
function recipeSearch(event){
    $("#food-input").empty();
        
    var dogURl = "http://www.recipepuppy.com/api/?q=";
    console.log(userInput);
    //Complete URl with parameter
    var dogFullUrl = corsProxy + dogURl + userInput;
    //Make ajax call
    $.ajax({
        url: dogFullUrl,
        method: "GET"
    }).then(function(response){
        var data = JSON.parse(response);
        console.log(data);
        for (var i = 0; i < data.results.length; i++) {
        createRecipeCard(data.results[i])
        $("#searchResults").show();
        $("#recipeResults").show();
     console.log("hi");
    } 
    })
 function createRecipeCard(data) {
    var dogImage = data.thumbnail;
    var dogTitle = data.dogTitle;
    var dogIngredients = data.ingredients
    var dogLink = data.href;
    console.log(dogImage);
    console.log(dogTitle);
    console.log(dogIngredients);
    console.log(dogLink);
    var card = $("<div>");
    card.addClass("card");
    var cardHeader = $("<div>");
    cardHeader.addClass("card-header");
    var cardBody = $("<div>");
    cardBody.addClass("card-body");
    var nameDiv = $("<div>");
    nameDiv.addClass("bbb");
    nameDiv.text(dogTitle);
    
    var linkDiv = $("<div>");
    linkDiv.addClass("bbb");
    linkDiv.text("link:" + dogLink);
    var ingDiv = $("<div>");
    ingDiv.addClass("bbb");
    linkDiv.text(dogIngredients);
    
    var dogImgDiv = $("<img>");
    dogImgDiv.addClass("bbb");
    dogImgDiv.attr("src",dogImage);
    dogImgDiv.append(dogImage);
    cardHeader.append(dogTitle);
    linkDiv.append(dogLink);
 
  
    cardBody.append(dogImgDiv);
    card.append(cardHeader);
    card.append(cardBody);
    var cardRecipe =
        '<div class="card">' +
            '<div class="card-header">' +
                '<div class="bbb">recipe: ' + dogTitle + '</div>' +
            '</div>' +
            '<div class="card-body">' +
                '<div class="bbb">Ingredients: ' + dogIngredients + '</div>' +
                '<div class="bbb"><img class="bbb" src="'  + dogImage + '"></div>' +
            '</div>' +
        '</div>';
    // $("#yelpCards").append(card2);
    document.getElementById("recipeCards").innerHTML += cardRecipe;
    console.log("end hi");
}
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
    
    });