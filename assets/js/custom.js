// $(".toggle").click(function(){

//   $("header").toggleClass("menuToggle");

// });

$(".toggle").click(function() {
    $("header").addClass("menuToggle");
});
$(".close").click(function() {
    $("header").removeClass("menuToggle");
});





$(window).scroll(function(){
    if ($(window).scrollTop() >= 30) {
        $('header').addClass('fixed-header');
        $('header').addClass('visible-title');
    }
    else {
        $('header').removeClass('fixed-header');
        $('header').removeClass('visible-title');
    }
});

     $('.moreless-button').click(function() {
  $('.moretext').slideToggle();
  if ($('.moreless-button').text() == "Διάβασε περισσότερο") {
    $(this).text("Διαβάστε Λιγότερα")
  } else {
    $(this).text("Διάβασε περισσότερο")
  }
});


// AOS.init({
//     duration: 1200,
//   })



  // $("#drop-1").click(function(){
  //   $("#box1").toggleClass("showMenu");
  // });

  // $("#drop-2").click(function(){
  //   $("#box2").toggleClass("showMenu");
  // });

  // $("#drop-3").click(function(){
  //   $("#box3").toggleClass("showMenu");
  // });
  // $("#drop-4").click(function(){
  //   $("#box4").toggleClass("showMenu");
  // });
  // $("#drop-5").click(function(){
  //   $("#box5").toggleClass("showMenu");
  // });

  

  $(document).ready(function() {
    $(".dropdowns").click(function(event) {
        // Prevent the event from propagating to the document
        event.stopPropagation();

        // The specific dropdown box related to the clicked dropdown
        var targetBox = $(this).data("target");

        // Check if the clicked dropdown's box is already shown
        var isBoxVisible = $("#" + targetBox).hasClass("showMenu");

        // Close all open boxes
        $(".box").removeClass("showMenu");

        // If the clicked box was not already shown, show it
        if (!isBoxVisible) {
            $("#" + targetBox).toggleClass("showMenu");
        }
    });

    // Remove 'showMenu' class from all boxes when clicking anywhere else on the document
    $(document).click(function() {
        $(".box").removeClass("showMenu");
    });

    // Prevent the click inside the box from closing the menu
    $(".box").click(function(event) {
        event.stopPropagation();
    });
});
