// HEADER SCRIPTS START
$(window).on("scroll", function() {
    if($(window).scrollTop() > 200) {
        $("header").addClass("header-active");
    } else {
        $("header").removeClass("header-active");
        $("header").removeClass("header-black");
        $("header").removeClass("header-white");
    }
});

var y=0
function burgerToggle() {
    y += 1
    x = document.getElementById('burger');
    x.classList.toggle("burger-active");
    $("#mobile-navigation-overlay").toggleClass("mobile-navigation-overlay-active");
    if(y%2!=0){
        $('body').css("overflow","hidden");
        $("header").addClass("header-active");
        $("#mobile-navigation-overlay").css("opacity","1");
        $("header").removeClass("header-black");
        $("header").addClass("header-white");
    }
    else{
        $("header").removeClass("header-black");
        $("header").removeClass("header-white");
        
        $('body').css("overflow","visible");
        if($(window).scrollTop() < 200){
            $("header").removeClass("header-active");
            
        }
        setTimeout(function(){
            $("#mobile-navigation-overlay").css("opacity","0");
        }, 850);
    }
}
//HEADER SCRIPTS END

// PURPOSE SCRIPT START
jQuery(document).ready(function(){
    jQuery('.purpose-btn').click(function(event){
        //remove all pre-existing active classes
        jQuery('.purpose-btn-active').removeClass('purpose-btn-active');
        jQuery('.purpose-desc-active').removeClass('purpose-desc-active');
        //add the active class to the link we clicked

        jQuery(this).addClass('purpose-btn-active');
        $("."+jQuery(this).attr('id')).addClass('purpose-desc-active');

        event.preventDefault();
    });
});
// PURPOSE SCRIPT END




$(".paroller-scroll-title, [data-paroller-factor]").paroller({
    factor: 0.2,            // multiplier for scrolling speed and offset
    factorXs: 0.1,           // multiplier for scrolling speed and offset
    type: 'foreground',     // background, foreground
    direction: 'horizontal', // vertical, horizontal
    //transition: 'transform 0.2s ease-in' // CSS transition
});
/*$(".paroller-project-image, [data-paroller-factor]").paroller({
    factor: 0.1,            // multiplier for scrolling speed and offset
    type: 'foreground',     // background, foreground
    direction: 'vertical', // vertical, horizontal
    //transition: 'transform 0.2s ease-in' // CSS transition
});
$(".paroller-project-image-inner, [data-paroller-factor]").paroller({
    factor: 0.1,            // multiplier for scrolling speed and offset
    type: 'foreground',     // background, foreground
    direction: 'vertical', // vertical, horizontal
    //transition: 'transform 0.2s ease-in' // CSS transition
});*/

//var rellax = new Rellax('.rellax');
// /https://tgomilar.github.io/paroller.js/#demo


// SMOOTH SCROLL START //
$(document).ready(function(){
    // Add smooth scrolling to all links
    $("a").on('click', function(event) {
  
      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();
  
        // Store hash
        var hash = this.hash;
        if(hash == "#initiatives"){
            offset = -60
        }
        else{
            offset = 0
        }
        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
          scrollTop: $(hash).offset().top + offset
        }, 100, function(){
  
          // Add hash (#) to URL when done scrolling (default click behavior)
          //window.location.hash = hash;
        });
      } // End if
    });
  });
// SMOOTH SCROLL END //