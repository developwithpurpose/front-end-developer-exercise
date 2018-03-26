
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
   
   $one.on('click', ()=>{
     console.log("step one clicked")
   });

   $two.on('click', ()=>{
     console.log("step two clicked")
   });
   $three.on('click', ()=>{
     console.log("step three clicked")
   });
   $four.on('click', ()=>{
     console.log("step four clicked")
   });
   $five.on('click', ()=>{
     console.log("step five clicked")
   });
   $six.on('click', ()=>{
     console.log("step six clicked")
   });
   $seven.on('click', ()=>{
     console.log("step seven clicked")
   });

 });
