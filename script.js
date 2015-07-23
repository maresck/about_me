var currentScreen = "";

$(document).ready(function(){
    $(".numbers").click(function(e) {
      currentScreen = currentScreen + e.currentTarget.textContent;
      $("th").text(currentScreen);
      console.log(currentScreen);
    });

});
