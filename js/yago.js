$(function(){
   $(".PhotoBox").hover(function(){
      $(".SlideBox",this).stop().animate({top:"160px"},"fast");
   },function(){
      $(".SlideBox",this).stop().animate({top:"250px"},"slow");
   });
});
