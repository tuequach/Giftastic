//Initial Variables and Values
var gifs = [ "Naruto", "One Piece", "Fairy Tail", "Fullmetal Alchemist", "My Hero Academia", "Attack on Titans" ];
var newGifs = "" ;
var button;

var buttonGen = function () {
    $("#add-gifs").empty();
    for (var i= 0; i< gifs.length; i++){
      button = $("<button type=" + "button" + ">" + gifs[i] + "</button>").addClass("btn").attr("data", gifs[i]);
        $("#add-gifs").append(button);
    };
}
    
// Adding in API from giphy.
$("#add-gifs").on("click", ".btn", function (){
                var obj = $(this).attr("data");
                var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + obj + "&api_key=V6C5daTHzk80YfiMLv6CXZxC00TBvWK9&limit=5&rating=G";

            //implimenting ajaax
                $.ajax({
                  url: queryURL,
                  method: "GET"
               }).done(function(response){

                  console.log(response);

                var results = response.data;

                for (var i = 0; i < results.length; i++){
                  var gifsDiv = $("<div>");

                  //Displaying ratings for each gif
                  var p = $("<p>");
                  p.text(results[i].rating);
                  var p = $("<p>").text("Rating: " + results[i].rating);

                  var gifsImage = $("<img>").addClass("border");

// some sort of images 
      gifsImage.attr("src", results[i].images.fixed_height_still.url);
      gifsImage.attr("data-still", results[i].images.fixed_height_still.url);
      gifsImage.attr("data-animate", results[i].images.fixed_height.url)
      gifsImage.attr("data-state", "still")
      gifsImage.addClass("gif");

 //appending images 
            gifsDiv.append(gifsImage);
            gifsDiv.append(p);
            $("#gifSpace").prepend(gifsDiv);
                }
    })
})
  
// animation for gifhy images 

$("#gifSpace").on("click", ".gif", function (event) {
  event.preventDefault(); //no reloading to page

  var state = $(this).attr("data-state");
//using activities 15 pausing-gifs as reference
  if (state === "still") {
    $(this).attr("src", $(this).attr("data-animate"));
    $(this).attr("data-state", "animate");
  } 
  else {
    $(this).attr("src", $(this).attr("data-still"));
    $(this).attr("data-state", "still");
  }  

})

//taking the values added and inputing it as a button

$(".submit").on("click", function (event){
  event.preventDefault (); //so page doesn't reload
    console.log("submit");

    newGifs = $("#gif-input").val().trim();

    gifs.push(newGifs);
    console.log(gifs);

    buttonGen();
});

buttonGen();




  
