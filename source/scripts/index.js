$.get( "some/html/on/your/server.html", function( data ) {
  // the contents is now in the variable data
  alert( data );
});

$(document).on("click", "a", function() {
  //this == the link that was clicked
  var href = $(this).attr("href");
  alert("You're trying to go to " + href);
});


document.getElementsById("thisLink").onscroll = 
function updateDiv()
{ 
    $( "#thisDiv" ).load(window.location.href + " #thisDiv" );
}

$(document).on('click', function(updateDiv) {
  $('#thisDiv').load(window.location.href + " #thisDiv" );
});