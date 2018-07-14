$(document).ready(function() {
    $('.menu-bs1').click(function(){
      $('.scroll-content').animate({
         top: '0'
       });
       $('.menu-item').removeClass('active');
       $(this).addClass("active");

       //$(".friend-content1").load();  -ran out of time
    });

    $('.menu-bs2').click(function(){
      $('.scroll-content').animate({
         top: '-375px'
       });
       $('.menu-item').removeClass('active');
       $(this).addClass("active");

       //$(".friend-content2").load();  -ran out of time
    });

    $('.menu-bs3').click(function(){
      $('.scroll-content').animate({
         top: '-750px'
       });
       $('.menu-item').removeClass('active');
       $(this).addClass("active");

       //$(".friend-content3").load();  -ran out of time
    });

    $('.menu-bs4').click(function(){
      $('.scroll-content').animate({
         top: '-1125px'
       });
       $('.menu-item').removeClass('active');
       $(this).addClass("active");

       //$(".friend-content4").load();  -ran out of time
    });

    $('.menu-bs5').click(function(){
      $('.scroll-content').animate({
         top: '-1500px'
       });
       $('.menu-item').removeClass('active');
       $(this).addClass("active");

       //$(".friend-content5").load();  -ran out of time
    });

    $('.menu-bs6').click(function(){
      $('.scroll-content').animate({
         top: '-1875px'
       });
       $('.menu-item').removeClass('active');
       $(this).addClass("active");

       //$(".friend-content6").load();  -ran out of time
    });

    $('.menu-bs7').click(function(){
      $('.scroll-content').animate({
         top: '-2250px'
       });
       $('.menu-item').removeClass('active');
       $(this).addClass("active");

       //$(".friend-content7").load();  -ran out of time
    });
});

