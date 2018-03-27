
 $(()=>{
    const arr1 = [];
    const arr2 = [];
    const arr3 = [];
    const arr4 = [];
    const arr5 = [];
    const arr6 = [];
    const arr7 = [];
    const subArr = [];
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
    var data = JSON.parse(response);
    let arr = data.friends;
    for (let i = 0; i<arr.length; i++ ){

        if ( arr[i].babyStep === 1){
          let people1 = arr[i]
          arr1.push(people1);
          if (arr1.length === 1){
            $('#p1').text(arr1[0].firstName + " " + arr1[0].lastName + " is also in Baby Step 1");
          } else if (arr1.length === 2){
            $('#p1').text(arr1[0].firstName  + " " +arr1[0].lastName + " and " + arr1[1].firstName  + " " + arr1[1].lastName +  " are also in Baby Step 1");
          } else if (arr1.length === 3){
            $('#p1').text(arr1[0].firstName + " " +  arr1[0].lastName + ", " + arr1[1].firstName + " " + arr1[1].lastName + " and " + " 1 other friend are also in Baby Step 1");
          }else if (arr1.length >= 4){
            $('#p1').text(arr1[0].firstName + " " + arr1[0].lastName + ", " + arr1[1].firstName + arr1[1].lastName + ", " + arr1[2].firstName+" "  + arr1[2].lastName + " and 2 other friends are also in Baby Step 1");
          };


        } else if ( arr[i].babyStep === 2){
          let people2 = arr[i]
          arr2.push(people2);
          if (arr2.length === 1){
            $('#p2').text(arr2[0].firstName + " " + arr2[0].lastName + " is also in Baby Step 1");
          } else if (arr2.length === 2){
            $('#p2').text(arr1[0].firstName +  " " +arr1[0].lastName + " and " + arr2[1].firstName +  " " +arr2[1].lastName +  " are also in Baby Step 1");
          } else if (arr2.length === 3){
            $('#p2').text(arr2[0].firstName + " " + arr2[0].lastName + ", " + arr[2].firstName +  " " +arr2[1].lastName + " and " + " 1 other friend are also in Baby Step 1");
          }else if (arr2.length >= 4){
            $('#p2').text(arr1[0].firstName + " " + arr2[0].lastName + ", " + arr2[1].firstName +  " " +arr2[1].lastName + ", " + arr2[2].firstName +  " " +arr2[2].lastName + " and 2 other friends are also in Baby Step 1");
          };

        }else if ( arr[i].babyStep === 3){
          let people3 = arr[i]
          arr3.push(people3);
          if (arr3.length === 1){
            $('#p3').text(arr3[0].firstName + " " + arr3[0].lastName + " is also in Baby Step 1");
          } else if (arr3.length === 2){
            $('#p3').text(arr3[0].firstName + " " + arr3[0].lastName + " and " + arr3[1].firstName +  " " +arr3[1].lastName +  " are also in Baby Step 1");
          } else if (arr3.length === 3){
            $('#p3').text(arr3[0].firstName + " " + arr3[0].lastName + ", " + arr3[1].firstName +  " " +arr3[1].lastName + " and " + " 1 other friend are also in Baby Step 1");
          }else if (arr3.length >= 4){
            $('#p3').text(arr3[0].firstName +  " " +arr3[0].lastName + ", " + arr3[1].firstName +  " " +arr3[1].lastName + ", " + arr3[2].firstName + " " + arr3[2].lastName + " and 2 other friends are also in Baby Step 1");
          };


        }else if ( arr[i].babyStep === 4){
          let people4 = arr[i]
          arr4.push(people4);
          if (arr4.length ===1){
            $('#p4').text(arr4[0].firstName + " " + arr4[0].lastName + " is also in Baby Step 1");
          } else if (arr4.length === 2){
            $('#p4').text(arr4[0].firstName +  " " +arr4[0].lastName + " and " + arr4[1].firstName +  " " +arr4[1].lastName +  " are also in Baby Step 1");
          } else if (arr4.length === 3){
            $('#p4').text(arr4[0].firstName +  " " +arr4[0].lastName + ", " + arr4[1].firstName +  " " +arr4[1].lastName + " and " + " 1 other friend are also in Baby Step 1");
          }else if (arr4.length >= 4){
            $('#p4').text(arr4[0].firstName +  " " +arr4[0].lastName + ", " + arr4[1].firstName +  " " +arr4[1].lastName + ", " + arr4[2].firstName +  " " +arr4[2].lastName + " and 2 other friends are also in Baby Step 1");
          };

        }else if ( arr[i].babyStep === 5){
          let people5 = arr[i]
          arr5.push(people5);
          if (arr5.length === 1){
            $('#p5').text(arr5[0].firstName + " " + arr5[0].lastName + " is also in Baby Step 1");
          } else if (arr5.length === 2){
            $('#p5').text(arr5[0].firstName +  " " +arr5[0].lastName + " and " + arr5[1].firstName +  " " +arr5[1].lastName +  " are also in Baby Step 1");
          } else if (arr5.length === 3){
            $('#p5').text(arr5[0].firstName +  " " +arr5[0].lastName + ", " + arr5[1].firstName + " " + arr5[1].lastName + " and " + " 1 other friend are also in Baby Step 1");
          }else if (arr5.length >= 4){
            $('#p5').text(arr5[0].firstName +  " " +arr5[0].lastName + ", " + arr5[1].firstName +  " " +arr5[1].lastName + ", " + arr5[2].firstName +  " " +arr5[2].lastName + " and 2 other friends are also in Baby Step 1");
          };

        }else if ( arr[i].babyStep === 6){
          let people6 = arr[i]
          arr6.push(people6);
          if (arr6.length === 1){
            $('#p6').text(arr6[0].firstName + " " + arr6[0].lastName + " is also in Baby Step 1");
          } else if (arr6.length === 2){
            $('#p6').text(arr6[0].firstName +  " " +arr6[0].lastName + " and " + arr6[1].firstName + " " + arr6[1].lastName +  " are also in Baby Step 1");
          } else if (arr6.length === 3){
            $('#p6').text(arr6[0].firstName +  " " +arr6[0].lastName + ", " + arr6[1].firstName +  " " +arr6[1].lastName + " and " + " 1 other friend are also in Baby Step 1");
          }else if (arr6.length >= 4){
            $('#p6').text(arr6[0].firstName + arr6[0].lastName + ", " + arr6[1].firstName +  " " +arr6[1].lastName + ", " + arr6[2].firstName +  " " +arr6[2].lastName + " and 2 other friends are also in Baby Step 1");
          };

        }else if ( arr[i].babyStep === 7){
          let people7 = arr[i]
          arr7.push(people7);
          if (arr7.length === 1){
            $('#p7').text(arr7[0].firstName + " " + arr7[0].lastName + " is also in Baby Step 1");
          } else if (arr7.length === 2){
            $('#p7').text(arr7[0].firstName +  " " +arr7[0].lastName + " and " + arr7[1].firstName +  " " +arr7[1].lastName +  " are also in Baby Step 1");
          } else if (arr7.length === 3){
            $('#p7').text(arr7[0].firstName +  " " +arr7[0].lastName + ", " + arr7[1].firstName +  " " +arr7[1].lastName + " and " + " 1 other friend are also in Baby Step 1");
          }else if (arr7.length >= 4){
            $('#p7').text(arr7[0].firstName +  " " +arr7[0].lastName + ", " + arr7[1].firstName +  " " +arr7[1].lastName + ", " + arr7[2].firstName +  " " +arr7[2].lastName + " and 2 other friends are also in Baby Step 1");
          };
        }

}
 });

   $one.on('click', ()=>{
     console.log("step one clicked");
     $oneC.show();
     $('#two, #three, #four, #five, #six, #seven').hide();
     $one.css("background-color", "white").find('h3').css("color", "#36abe1").animate({"font-size":"20pt"}, 1000).find('img').attr('src', './assets/images/icons/individual/icons_large_bs1_blue.png');
     $('#stepTwo, #stepThree, #stepFour, #stepFive, #stepSix, #stepSeven').css("background-color", "lightgray").find('h3').css("color", "#9ba0a4").css("font-size", "18px");
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
     $two.css("background-color", "white").find('h3').css("color", "#36abe1").animate({"font-size":"20pt"}, 1000).find('img').attr('src', './assets/images/icons/individual/icons_large_bs2_blue.png');
     $('#stepOne, #stepThree, #stepFour, #stepFive, #stepSix, #stepSeven').css("background-color", "lightgray").find('h3').css("color", "#9ba0a4").css("font-size", "18px");
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
     $three.css("background-color", "white").find('h3').css("color", "#36abe1").animate({"font-size":"20pt"}, 1000).find('img').attr('src', './assets/images/icons/individual/icons_large_bs3_blue.png');
     $('#stepOne, #stepTwo, #stepFour, #stepFive, #stepSix, #stepSeven').css("background-color", "lightgray").find('h3').css("color", "#9ba0a4").css("font-size", "18px");
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
     $four.css("background-color", "white").find('h3').css("color", "#36abe1").animate({"font-size":"20pt"}, 1000).find('img').attr('src', './assets/images/icons/individual/icons_large_bs4_blue.png');
     $('#stepOne, #stepTwo, #stepThree, #stepFive, #stepSix, #stepSeven').css("background-color", "lightgray").find('h3').css("color", "#9ba0a4").css("font-size", "18px");
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
     $five.css("background-color", "white").find('h3').css("color", "#36abe1").animate({"font-size":"20pt"}, 1000).find('img').attr('src', './assets/images/icons/individual/icons_large_bs5_blue.png');
     $('#stepOne, #stepTwo, #stepThree, #stepFour, #stepSix, #stepSeven').css("background-color", "lightgray").find('h3').css("color", "#9ba0a4").css("font-size", "18px");
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
     $six.css("background-color", "white").find('h3').css("color", "#36abe1").animate({"font-size":"20pt"}, 1000).find('img').attr('src', './assets/images/icons/individual/icons_large_bs6_blue.png');
     $('#stepOne, #stepTwo, #stepThree, #stepFour, #stepFive, #stepSeven').css("background-color", "lightgray").find('h3').css("color", "#9ba0a4").css("font-size", "18px");
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
     $seven.css("background-color", "white").find('h3').css("color", "#36abe1").animate({"font-size":"20pt"}, 1000).find('img').attr('src', './assets/images/icons/individual/icons_large_bs7_blue.png');
     $('#stepOne, #stepTwo, #stepThree, #stepFour, #stepFive, #stepSix').css("background-color", "lightgray").find('h3').css("color", "#9ba0a4").css("font-size", "18px");
     $one.find('img').attr('src','./assets/images/icons/individual/icons_large_bs1.png');
     $two.find('img').attr('src','./assets/images/icons/individual/icons_large_bs2.png');
     $three.find('img').attr('src','./assets/images/icons/individual/icons_large_bs3.png');
     $four.find('img').attr('src','./assets/images/icons/individual/icons_large_bs4.png');
     $five.find('img').attr('src','./assets/images/icons/individual/icons_large_bs5.png');
     $six.find('img').attr('src','./assets/images/icons/individual/icons_large_bs6.png');

   });

 });
