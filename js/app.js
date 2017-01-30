$(document).foundation();

var global = {
  sticky: function () {
    var winTop      = $(window).scrollTop();
    var body        = $("header");
    var activeClass = 'active';

    winTop > 80 ? body.addClass(activeClass) : body.removeClass(activeClass);
  }
}


$(document).ready(function() {

  global.sticky();

  $(window).scroll(function(){
    global.sticky();
  });

});