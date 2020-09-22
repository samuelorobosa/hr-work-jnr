$(document).ready(function() {


$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

     //>=, not <=
    if (scroll >= 60) {
        //clearHeader, not clearheader - caps H
        $(".navbar").addClass("bg-dark");
    } else {
      $(".navbar").removeClass("bg-dark");
    }
}); //missing );
  
  
  
  

  
// document ready  
});