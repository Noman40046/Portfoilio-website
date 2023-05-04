
$(document).ready(function()
{
/* text animation------------------------------- */
    $('.container').animatedHeadline();


    $('.container').animatedHeadline({
        animationType: "rotate-1",
        animationDelay: 2500,
        barAnimationDelay: 3800,
        barWaiting: 800,
        lettersDelay: 50,
        typeLettersDelay: 150,
        selectionDuration: 500,
        typeAnimationDelay: 1300,
        revealDuration: 600,
        revealAnimationDelay: 1500
      });
/* text animation------------------------------- */

/* counter------------------------ */

$('.demo1').animationCounter({
  start: 0,
  end: 1251,
  delay: 5
});

$('.demo2').animationCounter({
  start: 0,
  end: 30,
  delay: 200
});

$('.demo3').animationCounter({
  start: 0,
  end: 1650,
  delay: 1
});

$('.demo4').animationCounter({
  start: 0,
  end: 35,
  delay: 200
});
/* counter------------------------ */

//popup--------------
$('.portfolio-image').magnificPopup({
  type: 'image'
  
});

 

})



