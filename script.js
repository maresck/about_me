var currentScreen = "";
var callbacks = $.Callbacks();

$(document).ready(function(){
    $(".numbers").click(function(e) {
      currentScreen = currentScreen + e.currentTarget.textContent;
      $("th").text(currentScreen);
      console.log(currentScreen);
    });
    $(".plus").click(function() {
      callbacks.add(currentScreen);
      callbacks.fire("world");
    });

});
