//Initial Variables and Values
var gifs = [ "Naruto", "One Piece", "Fairy Tail", "Fullmetal Alchemist", "My Hero Academia", "Attack on Titans" ];
var newGifs ="";
var button;

var buttonGen = function () {
    $("#add-gif").empty();
    for (var i= 0; i< gifs.length; i++){
        $("#add-gifs").append(button);
    };
}
    
// Adding in API from giphy.
$("#add-gif").on("click", ".button", function (){
                var blank = $(this).attr("data");
                var queryURL = "https://api.giphy.com/v1/gifs/trending?api_key=V6C5daTHzk80YfiMLv6CXZxC00TBvWK9";
            
                $.ajax({
                  url: queryURL,
                  method: "GET"
               })
               .done(function(response){
                  console.log(response);

                var results = response.data;

                for (var i = 0; i < results.length; i++){
                  var gifsDiv = $("<div>");

                  //Displaying ratings for each gif
                  var p = $("<p>");
                  p.text(results[i].rating);
                  var p = $("<p>").text("Rating: " + results[i].rating);

                  gifsImage.attr("src", results[i].images.fixedheightstill.url);
                  gifsImage.attr("data-still", results[i].images.fixedheightstill.url);
                  gifsImage.attr("data-animate", results[i].images.fixedheightstill.url);
                  gifsImage.attr("data-state", results[i].images.fixedheightstill.url);

                });
  
  const topics = [];
  
