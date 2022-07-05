$(document).ready(function(){
    $('.slider').slick({
        infinite:true,
        slidesToShow:1,
        slidesToScroll:1,
        autoplay:true,
        autoplaySpeed:1000,
        dots:false,
        arrows:true,
    });
});

$(document).ready(function(){
    $(".nav-toggler").each(function(_, navToggler){
        var target=$(navToggler).data("target");
        $(navToggler).on("click", function(){
            $(target).animate({
                height:"toggle",
            })
        })
    })
});

// $(window).on('load',function() {
//     $('.slider-2').flexslider();
// });