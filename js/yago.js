$(function(){
   $(".PhotoBox").hover(function(){
      $(".SlideBox",this).stop().animate({top:"90px"},"fast");
   },function(){
      $(".SlideBox",this).stop().animate({top:"150px"},"slow");
   });
});
