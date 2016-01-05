function swipe(oppside) {
  var $activeSlide = $(".slide.active");
  var $inactiveSlide = $(".slide.inactive");
  $activeSlide.removeClass("active").addClass("inactive"+oppside).addClass("inactive");
  $inactiveSlide.addClass("active").removeClass("inactive");
  setTimeout(function() {
    $activeSlide.removeClass("inactive"+oppside);}, 500);
  updateBullets();
}
function addBullets(){
	var count=$(".slide").length,index=$(".slide.active").index();
	for (var i = 0; i < count; i++) {
		var $bullet=$("<div>");
		$bullet.addClass("bullet");
		if(index==i)
			$bullet.addClass("active");
		$(".bullets").append($bullet);
	}
}
function adjust(){
  var w=$(window).width();
  $("span").text(w);
  if(w < 830){
    $('link[href="css/x-large.css"]').attr('href','css/x-medium.css');
    $(".sociallinks").addClass("compact").addClass("inactive");
  }
  else{
    $('link[href="css/x-medium.css"]').attr('href','css/x-large.css');
    $(".sociallinks").removeClass("compact").removeClass("active").removeClass("inactive");
  }
}
function toggleLink(){
  if ($(".sociallinks").hasClass("inactive")) {
    $(".sociallinks").removeClass("inactive").addClass("active");
  }
  else{
    $(".sociallinks").addClass("inactive");
    $(".sociallinks").removeClass("active");
  }
}
function updateBullets(){
	$(".bullet.active").removeClass("active");
	var index=$(".slide.active").index()+1;
	$(".bullet:nth-child("+index+")").addClass("active");
}
$(document).ready(function(){
  $(".slide.two").addClass("inactive");
  $(".next").click(function() {
    swipe("Left");
  });
  $(".previous").click(function() {
    swipe("Right");
  });
  $(".togglebutton").click(function(){
    toggleLink();
  });
  addBullets();
  adjust();
  $(window).resize(function(){
    adjust();
  });
});
// JavaScript Document