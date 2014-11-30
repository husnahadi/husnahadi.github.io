$(document).ready(function() {

  $("#speech-text").click(function(){
    $(this).hide();
    $("#speech-text-show").show();
  });

  $("#speech-text-show").click(function(){
    $(this).hide();
    $("#speech-text").show();
    $("#speech-text").text("I speak..");
  });



  $("#nav-work").click(function() {
      var margin = parseInt($('#carousel').css('margin-left').replace("px", ""));
      if (margin==0){
        //
      }else if (margin==-600){
        $("#carousel").css("margin-left",(margin+600));
        $("#nav-projects").removeClass("filled");
        $("#nav-projects").addClass("empty");
      }else{
        $("#carousel").css("margin-left",(margin+1200));
        $("#nav-courses").removeClass("filled");
        $("#nav-courses").addClass("empty");
      }

      $("#nav-work").addClass("filled");
      
  });

  $(".empty").hover(function(){
      $(this).removeClass("empty");
      $(this).addClass("filled");
      },function(){ 
        var margin = parseInt($('#carousel').css('margin-left').replace("px", ""));
        if ( ($(this).is("#nav-projects") && (margin==-600)) || ($(this).is("#nav-work") && (margin==0)) || ($(this).is("#nav-courses") && (margin==-1200)) ){
          //
        }else{
          $(this).removeClass("filled");
          $(this).addClass("empty");
        }
        
    });


  $("#nav-projects").click(function() {
      var margin = parseInt($('#carousel').css('margin-left').replace("px", ""));
      if (margin==0){
        $("#carousel").css("margin-left",(margin-600));
        $("#nav-work").removeClass("filled");
        $("#nav-work").addClass("empty");
      }else if (margin==-600){
        //
      }else{
        $("#carousel").css("margin-left",(margin+600));
        $("#nav-courses").removeClass("filled");
        $("#nav-courses").addClass("empty");
      }
      $("#nav-projects").addClass("filled");
      
  });

  $("#nav-courses").click(function() {
      var margin = parseInt($('#carousel').css('margin-left').replace("px", ""));
      if (margin==0){
        $("#carousel").css("margin-left",(margin-1200));
        $("#nav-work").removeClass("filled");
        $("#nav-work").addClass("empty");
      }else if (margin==-600){
        $("#carousel").css("margin-left",(margin-600));
        $("#nav-projects").removeClass("filled");
        $("#nav-projects").addClass("empty");
      }else{
        //
      }
      $("#nav-courses").addClass("filled");
      
  });









  // var scrollOffset = [0,0,0]
  // var $win = $(window);
  // var $doc = $(document);

  // $win
  // .on('scroll', function(){
  //   // this is needed because scroll is triggered when zooming before the zoom event
  //   scrollOffset[2] = scrollOffset[1];
  //   scrollOffset[1] = scrollOffset[0];
  //   scrollOffset[0] = 100 / $win.height() * $win.scrollTop();
  //   console.log('scroll event', scrollOffset);
  // })
  // .on('resize', function(){
  //   // set back the history because of multiple zooming events
  //   scrollOffset[0] = scrollOffset[1];
  //   scrollOffset[1] = scrollOffset[2];
  //   scrollOffset[2] = 0;
  //   console.log('zoom event', scrollOffset);
  //   window.scrollTo(0, scrollOffset[0] / 100 * $win.height());
  // })


});



// $(document).ready(function(){
//     $(".contactLink").click(function(){
//         if ($("#contactForm").is(":hidden")){
//             $("#contactForm").slideDown("slow");
//         }
//         else{
//             $("#contactForm").slideUp("slow");
//         }
//     });
// });

// function closeForm(){
//     $("#messageSent").show("slow");
//     setTimeout('$("#messageSent").hide();$("#contactForm").slideUp("slow")', 2000);
// }

// $(document).ready(function() {
//   function filterPath(string) {
//     return string
//       .replace(/^\//,'')
//       .replace(/(index|default).[a-zA-Z]{3,4}$/,'')
//       .replace(/\/$/,'');
//   }
//   $('a[href*=#]').each(function() {
//     if ( filterPath(location.pathname) == filterPath(this.pathname)
//     && location.hostname == this.hostname
//     && this.hash.replace(/#/,'') ) {
//       var $targetId = $(this.hash), $targetAnchor = $('[name=' + this.hash.slice(1) +']');
//       var $target = $targetId.length ? $targetId : $targetAnchor.length ? $targetAnchor : false;
//        if ($target) {
//          var targetOffset = $target.offset().top;
//          $(this).click(function() {
//            $('html, body').animate({scrollTop: targetOffset}, 1000);
//            var d = document.createElement("div");
//         d.style.height = "101%";
//         d.style.overflow = "hidden";
//         document.body.appendChild(d);
//         window.scrollTo(0,scrollToM);
//         setTimeout(function() {
//         d.parentNode.removeChild(d);
//             }, 10);
//            return false;
//          });
//       }
//     }
//   });
// });



