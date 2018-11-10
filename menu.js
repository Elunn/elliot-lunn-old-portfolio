$(document).ready(function(){

    $(".burger").on("click", function(){
        $("nav").toggleClass("open");
        
    });
    
});

$("#slideshow > div:gt(0)").hide();

setInterval(function() { 
  $('#slideshow > div:first')
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo('#slideshow');
},  3000);


$(document).ready(function(){
    $('.categoryItem').click(function(){
        var category = $(this).attr('id');
        
        if(category == 'all'){
            $('.potfolioItem').addClass('hide');
            setTimeout(function(){                $('.potfolioItem').removeClass('hide');
            }, 300);
        } else{
            $('.potfolioItem').addClass('hide');
            setTimeout(function(){
                $('.' + category).removeClass('hide');
            }, 300);
        }
    });              
});

