
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
     $threeC.hide();
     $fourC.hide();
     $fiveC.hide();
     $sixC.hide();
     $sevenC.hide();
     $twoC.hide();
   });

   $two.on('click', ()=>{
     console.log("step two clicked");
     $oneC.hide();
     $threeC.hide();
     $fourC.hide();
     $fiveC.hide();
     $sixC.hide();
     $sevenC.hide();
     $twoC.show();
   });
   $three.on('click', ()=>{
     console.log("step three clicked");
     $oneC.hide();
     $threeC.show();
     $fourC.hide();
     $fiveC.hide();
     $sixC.hide();
     $sevenC.hide();
     $twoC.hide();
   });
   $four.on('click', ()=>{
     console.log("step four clicked")
     $oneC.hide();
     $threeC.hide();
     $fourC.show();
     $fiveC.hide();
     $sixC.hide();
     $sevenC.hide();
     $twoC.hide();
   });
   $five.on('click', ()=>{
     console.log("step five clicked")
     $oneC.hide();
     $threeC.hide();
     $fourC.hide();
     $fiveC.show();
     $sixC.hide();
     $sevenC.hide();
     $twoC.hide();
   });
   $six.on('click', ()=>{
     console.log("step six clicked")
     $oneC.hide();
     $threeC.hide();
     $fourC.hide();
     $fiveC.hide();
     $sixC.show();
     $sevenC.hide();
     $twoC.hide();
   });
   $seven.on('click', ()=>{
     console.log("step seven clicked");
     $sevenC.show();
     $oneC.hide();
     $threeC.hide();
     $fourC.hide();
     $fiveC.hide();
     $sixC.hide();
    
     $twoC.hide();
   });

 });
