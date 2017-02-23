const enableRewind = function() {
  $("paper-icon-button[data-id='rewind-10']")[0].style = "";
};

$( window ).on("load", function() {
  setInterval(enableRewind, 500);
});
