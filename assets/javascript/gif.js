$(function(){
    populateButtons(topics, "searchButton", "#additional-sports-idol");
console.log("Working")

})
var topics = ["michael jordan", "walter payton", "julius erving"];

function populateButtons(topics,rating,areaToAddTo){
    $(areaToAddTo).empty();
    for(var i=0; i<topics.length; i++){
        var a = $("<button>");
        a.addClass(rating);
        a.attr("data-type", topics[i]);
        a.text(topics[i]);
        $(areaToAddTo).append(a);

    }
}
$(document).on("click",".searchButton",function(){
var idols = $(this).data("idols");
var queryURL = "https://api.giphy.com/v1/gifs/search?q="+idols+ "&api_key=g6NbwOl7scqP1LzfluZ9fvkBoJbb9wS2&limit=10";
$.ajax({
    url:queryURL,
    method:"GET"})
    .done(function(response){
        console.log(response);
    })
})
