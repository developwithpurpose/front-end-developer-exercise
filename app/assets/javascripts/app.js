
   function loadJSON(callback) {

      var request = new XMLHttpRequest();
          request.overrideMimeType("application/json");
      request.open('GET', '../../baby-steps.json', true);
      request.onreadystatechange = function () {
            if (request.readyState == 4 && request.status == "200") {
              callback(request.responseText);
            }
      };
      request.send(null);
   }

 loadJSON(function(response) {
    var json_data = JSON.parse(response);
    console.log(json_data);
 });

 $(()=>{
   const $one = $("#stepOne");
   const $two = $("#stepTwo");
   const $three = $("#stepThree");
   const $four = $("#stepFour");
   const $five = $("#stepFive");
   const $six = $("#stepSix");
   const $seven = $("#stepSeven");

   const $oneC = $("#one");
   const $twoC = $("#two");
   const $threeC = $("#three");
   const $fourC = $("#four");
   const $fiveC = $("#five");
   const $sixC = $("#six");
   const $sevenC = $("#seven");
   $one.on('click', ()=>{
     console.log("step one clicked");
     $oneC.show();
     $('#two, #three, #four, #five, #six, #seven').hide();
     $one.css("background-color", "white").find('h3').css("color", "#36abe1").find('img').attr('src', './assets/images/icons/individual/icons_large_bs1_blue.png');
     $('#stepTwo, #stepThree, #stepFour, #stepFive, #stepSix, #stepSeven').css("background-color", "lightgray").find('h3').css("color", "#9ba0a4");
     $seven.find('img').attr('src','./assets/images/icons/individual/icons_large_bs7.png');
     $two.find('img').attr('src','./assets/images/icons/individual/icons_large_bs2.png');
     $three.find('img').attr('src','./assets/images/icons/individual/icons_large_bs3.png');
     $four.find('img').attr('src','./assets/images/icons/individual/icons_large_bs4.png');
     $five.find('img').attr('src','./assets/images/icons/individual/icons_large_bs5.png');
     $six.find('img').attr('src','./assets/images/icons/individual/icons_large_bs6.png');
   });

   $two.on('click', ()=>{
     console.log("step two clicked");
     $('#one, #three, #four, #five, #six, #seven').hide();
     $twoC.show();
     $two.css("background-color", "white").find('h3').css("color", "#36abe1").find('img').attr('src', './assets/images/icons/individual/icons_large_bs2_blue.png');
     $('#stepOne, #stepThree, #stepFour, #stepFive, #stepSix, #stepSeven').css("background-color", "lightgray").find('h3').css("color", "#9ba0a4");
     $one.find('img').attr('src','./assets/images/icons/individual/icons_large_bs1.png');
     $three.find('img').attr('src','./assets/images/icons/individual/icons_large_bs3.png');
     $four.find('img').attr('src','./assets/images/icons/individual/icons_large_bs4.png');
     $five.find('img').attr('src','./assets/images/icons/individual/icons_large_bs5.png');
     $six.find('img').attr('src','./assets/images/icons/individual/icons_large_bs6.png');
     $seven.find('img').attr('src','./assets/images/icons/individual/icons_large_bs7.png');
   });
   $three.on('click', ()=>{
     console.log("step three clicked");
     $('#one, #two, #four, #five, #six, #seven').hide();
     $threeC.show();
     $three.css("background-color", "white").find('h3').css("color", "#36abe1").find('img').attr('src', './assets/images/icons/individual/icons_large_bs3_blue.png');
     $('#stepOne, #stepTwo, #stepFour, #stepFive, #stepSix, #stepSeven').css("background-color", "lightgray").find('h3').css("color", "#9ba0a4");
     $one.find('img').attr('src','./assets/images/icons/individual/icons_large_bs1.png');
     $two.find('img').attr('src','./assets/images/icons/individual/icons_large_bs2.png');
     $four.find('img').attr('src','./assets/images/icons/individual/icons_large_bs4.png');
     $five.find('img').attr('src','./assets/images/icons/individual/icons_large_bs5.png');
     $six.find('img').attr('src','./assets/images/icons/individual/icons_large_bs6.png');
     $seven.find('img').attr('src','./assets/images/icons/individual/icons_large_bs7.png');
   });
   $four.on('click', ()=>{
     console.log("step four clicked")
     $fourC.show();
     $('#one, #two, #three, #five, #six, #seven').hide();
     $four.css("background-color", "white").find('h3').css("color", "#36abe1").find('img').attr('src', './assets/images/icons/individual/icons_large_bs4_blue.png');
     $('#stepOne, #stepTwo, #stepThree, #stepFive, #stepSix, #stepSeven').css("background-color", "lightgray").find('h3').css("color", "#9ba0a4");
     $one.find('img').attr('src','./assets/images/icons/individual/icons_large_bs1.png');
     $two.find('img').attr('src','./assets/images/icons/individual/icons_large_bs2.png');
     $three.find('img').attr('src','./assets/images/icons/individual/icons_large_bs3.png');
     $five.find('img').attr('src','./assets/images/icons/individual/icons_large_bs5.png');
     $six.find('img').attr('src','./assets/images/icons/individual/icons_large_bs6.png');
     $seven.find('img').attr('src','./assets/images/icons/individual/icons_large_bs7.png');
   });
   $five.on('click', ()=>{
     console.log("step five clicked")
     $('#one, #two, #three, #four, #six, #seven').hide();
     $fiveC.show();
     $five.css("background-color", "white").find('h3').css("color", "#36abe1").find('img').attr('src', './assets/images/icons/individual/icons_large_bs5_blue.png');
     $('#stepOne, #stepTwo, #stepThree, #stepFour, #stepSix, #stepSeven').css("background-color", "lightgray").find('h3').css("color", "#9ba0a4");
     $one.find('img').attr('src','./assets/images/icons/individual/icons_large_bs1.png');
     $two.find('img').attr('src','./assets/images/icons/individual/icons_large_bs2.png');
     $three.find('img').attr('src','./assets/images/icons/individual/icons_large_bs3.png');
     $four.find('img').attr('src','./assets/images/icons/individual/icons_large_bs4.png');
     $six.find('img').attr('src','./assets/images/icons/individual/icons_large_bs6.png');
     $seven.find('img').attr('src','./assets/images/icons/individual/icons_large_bs7.png');
   });
   $six.on('click', ()=>{
     console.log("step six clicked")
     $('#one, #two, #three, #four, #five, #seven').hide();
     $sixC.show();
     $six.css("background-color", "white").find('h3').css("color", "#36abe1").find('img').attr('src', './assets/images/icons/individual/icons_large_bs6_blue.png');
     $('#stepOne, #stepTwo, #stepThree, #stepFour, #stepFive, #stepSeven').css("background-color", "lightgray").find('h3').css("color", "#9ba0a4");
     $one.find('img').attr('src','./assets/images/icons/individual/icons_large_bs1.png');
     $two.find('img').attr('src','./assets/images/icons/individual/icons_large_bs2.png');
     $three.find('img').attr('src','./assets/images/icons/individual/icons_large_bs3.png');
     $four.find('img').attr('src','./assets/images/icons/individual/icons_large_bs4.png');
     $five.find('img').attr('src','./assets/images/icons/individual/icons_large_bs5.png');
     $seven.find('img').attr('src','./assets/images/icons/individual/icons_large_bs7.png');
   });
   $seven.on('click', ()=>{
     console.log("step seven clicked");
     $sevenC.show();
     $('#one, #two, #three, #four, #five, #six').hide();
     $seven.css("background-color", "white").find('h3').css("color", "#36abe1").find('img').attr('src', './assets/images/icons/individual/icons_large_bs7_blue.png');
     $('#stepOne, #stepTwo, #stepThree, #stepFour, #stepFive, #stepSix').css("background-color", "lightgray").find('h3').css("color", "#9ba0a4");
     $one.find('img').attr('src','./assets/images/icons/individual/icons_large_bs1.png');
     $two.find('img').attr('src','./assets/images/icons/individual/icons_large_bs2.png');
     $three.find('img').attr('src','./assets/images/icons/individual/icons_large_bs3.png');
     $four.find('img').attr('src','./assets/images/icons/individual/icons_large_bs4.png');
     $five.find('img').attr('src','./assets/images/icons/individual/icons_large_bs5.png');
     $six.find('img').attr('src','./assets/images/icons/individual/icons_large_bs6.png');

   });

 });
