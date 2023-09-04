

let sideBarWidth = $('.sideBar-inner').innerWidth();
$("#sideBar").css("left" , -sideBarWidth ); 


$("a[href^='#']").click(function (e) { 
    let aHref = e.target.getAttribute('href');
    let sectionAboutOffset =$(aHref).offset().top;   // rturn number
    $("html , body").animate({scrollTop:sectionAboutOffset} , 1000)
    
   })


   $('#sideBar').click(function(){
   
    let sideBarWidth = $('.sideBar-inner').innerWidth();
    if ($("#sideBar").css('left') == "0px" )
     {
        $("#sideBar").animate({left:-sideBarWidth} , 1000)
    }
    else
    {
         $("#sideBar").animate({left:'0px'} , 1000)
    }
   
   })

 
$('#sliderDown .action').click(function(){
    $('.inner-item').not($(this).next()).slideUp(1000);
    $(this).next().slideToggle(1000);
});

window.onload = function() {
   
    countDownToTime("25 october 2023 1:55:00");
  }
  function countDownToTime(countTo) {
  
    let futureDate = new Date(countTo);
futureDate = (futureDate.getTime()/1000);

let now = new Date();
now = (now.getTime()/1000);

timeDiffer = (futureDate- now);
    
let days = Math.floor( timeDiffer / (24*60*60));
let hours = Math.floor((timeDiffer - (days * (24*60*60))) / 3600);
let mins = Math.floor((timeDiffer - (days * (24*60*60)) - (hours * 3600 )) / 60);
let secs = Math.floor((timeDiffer- (days * (24*60*60)) - (hours * 3600) - (mins * 60)))


$(".days").html(`${days} D`);
$(".hours").html(`${hours} h`);
$(".minutes").html(`${ mins } m`);
$('.seconds').html(`${ secs} s`)


setInterval(function() {
      countDownToTime(countTo);
     },
      1000);
}







$('textarea').keyup(function(){
    let valueInput= $(this).val().length;
    $('#count').text(
        100 - valueInput <= 0 ? "your available character finished" : 100 - valueInput
    )
})

