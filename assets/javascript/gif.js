$(function(){
    populateButtons(topics, "SearchButton", "#additional-sports-idol");
    console.log("Working");

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