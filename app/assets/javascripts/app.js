$(()=>{
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
   $('#toggle > li').click(function() {
       var bbStep = $(this).index();
       $('#one').toggle( bbStep === 0 );
       $('#two').toggle( bbStep === 1 );
       $('#three').toggle( bbStep === 2 );
       $('#four').toggle( bbStep === 3 );
       $('#five').toggle( bbStep === 4 );
       $('#six').toggle( bbStep === 5 );
       $('#seven').toggle( bbStep === 6 );
   });
const arr1 = [];
const arr2 = [];
const arr3 = [];
const arr4 = [];
const arr5 = [];
const arr6 = [];
const arr7 = [];
    var data = JSON.parse(response);
    let arr = data.friends;

    for (let i = 0; i<arr.length; i++ ){

      if( arr[i].babyStep === 1 ){

        arr1.push(arr[i]);
      } else if ( arr[i].babyStep === 2){

        arr2.push(arr[i])

      } else if ( arr[i].babyStep === 3){
        arr3.push(arr[i])
      } else if ( arr[i].babyStep === 4){
        arr4.push(arr[i])
      } else if ( arr[i].babyStep === 5){
        arr5.push(arr[i])
      } else if ( arr[i].babyStep === 6){
        arr6.push(arr[i])
      } else if ( arr[i].babyStep === 7){
        arr7.push(arr[i])
      };
};
      if( arr1.length === 1){
        $('#one').append(arr1[0].firstName + " " + arr1[0].lastName + " is also in Baby Step 1");
      } else if( arr1.length === 2){
         $('#one').append(arr1[0].firstName  + " " +arr1[0].lastName + " and " + arr1[1].firstName  + " " + arr1[1].lastName +  " are also in Baby Step 1");
      } else if ( arr1.length === 3){
         $('#one').append(arr1[0].firstName + " " +  arr1[0].lastName + ", " + arr1[1].firstName + " " + arr1[1].lastName + " and " + " 1 other friend are also in Baby Step 1");
      } else if ( arr1.length >= 4){
         $('#one').append(arr1[0].firstName + " " + arr1[0].lastName + ", " + arr1[1].firstName + arr1[1].lastName + ", " + arr1[2].firstName+" "  + arr1[2].lastName + " and 2 other friends are also in Baby Step 1");
      };
      if( arr2.length === 1){
        $('#two').append(arr2[0].firstName + " " + arr2[0].lastName + " is also in Baby Step 2");
      } else if( arr2.length === 2){
         $('#two').append(arr2[0].firstName  + " " +arr2[0].lastName + " and " + arr2[1].firstName  + " " + arr2[1].lastName +  " are also in Baby Step 2");
      } else if ( arr1.length === 3){
         $('#two').append(arr2[0].firstName + " " +  arr2[0].lastName + ", " + arr2[1].firstName + " " + arr2[1].lastName + " and " + " 1 other friend are also in Baby Step 2");
      } else if ( arr1.length >= 4){
         $('#two').append(arr2[0].firstName + " " + arr2[0].lastName + ", " + arr2[1].firstName + arr2[1].lastName + ", " + arr2[2].firstName+" "  + arr2[2].lastName + " and 2 other friends are also in Baby Step 2");
      };
      if( arr3.length === 1){
        $('#three').append(arr2[0].firstName + " " + arr2[0].lastName + " is also in Baby Step 2");
      } else if( arr3.length === 2){
         $('#three').append(arr3[0].firstName  + " " +arr3[0].lastName + " and " + arr3[1].firstName  + " " + arr3[1].lastName +  " are also in Baby Step 3");
      } else if ( arr3.length === 3){
         $('#three').append(arr3[0].firstName + " " +  arr3[0].lastName + ", " + arr3[1].firstName + " " + arr3[1].lastName + " and " + " 1 other friend are also in Baby Step 3");
      } else if ( arr3.length >= 4){
         $('#three').append(arr3[0].firstName + " " + arr3[0].lastName + ", " + arr3[1].firstName + arr3[1].lastName + ", " + arr3[2].firstName+" "  + arr3[2].lastName + " and 2 other friends are also in Baby Step 3");
      };
      if( arr4.length === 1){
        $('#four').append(arr4[0].firstName + " " + arr4[0].lastName + " is also in Baby Step 2");
      } else if( arr4.length === 2){
         $('#four').append(arr4[0].firstName  + " " +arr4[0].lastName + " and " + arr4[1].firstName  + " " + arr4[1].lastName +  " are also in Baby Step 4");
      } else if ( arr4.length === 3){
         $('#four').append(arr4[0].firstName + " " +  arr4[0].lastName + ", " + arr4[1].firstName + " " + arr4[1].lastName + " and " + " 1 other friend are also in Baby Step 4");
      } else if ( arr4.length >= 4){
         $('#four').append(arr4[0].firstName + " " + arr4[0].lastName + ", " + arr4[1].firstName + arr4[1].lastName + ", " + arr4[2].firstName+" "  + arr4[2].lastName + " and 2 other friends are also in Baby Step 4");
      };
      if( arr5.length === 1){
        $('#five').append(arr5[0].firstName + " " + arr5[0].lastName + " is also in Baby Step 5");
      } else if( arr5.length === 2){
         $('#five').append(arr5[0].firstName  + " " +arr5[0].lastName + " and " + arr5[1].firstName  + " " + arr5[1].lastName +  " are also in Baby Step 5");
      } else if ( arr5.length === 3){
         $('#five').append(arr5[0].firstName + " " +  arr5[0].lastName + ", " + arr5[1].firstName + " " + arr5[1].lastName + " and " + " 1 other friend are also in Baby Step 5");
      } else if ( arr5.length >= 4){
         $('#five').append(arr5[0].firstName + " " + arr5[0].lastName + ", " + arr5[1].firstName + arr5[1].lastName + ", " + arr5[2].firstName+" "  + arr5[2].lastName + " and 2 other friends are also in Baby Step 5");
      };
      if( arr6.length === 1){
        $('#six').append(arr6[0].firstName + " " + arr6[0].lastName + " is also in Baby Step 5");
      } else if( arr6.length === 2){
         $('#six').append(arr6[0].firstName  + " " +arr6[0].lastName + " and " + arr6[1].firstName  + " " + arr6[1].lastName +  " are also in Baby Step 6");
      } else if ( arr6.length === 3){
         $('#six').append(arr6[0].firstName + " " +  arr6[0].lastName + ", " + arr6[1].firstName + " " + arr6[1].lastName + " and " + " 1 other friend are also in Baby Step 6");
      } else if ( arr6.length >= 4){
         $('#six').append(arr6[0].firstName + " " + arr6[0].lastName + ", " + arr6[1].firstName + arr6[1].lastName + ", " + arr6[2].firstName+" "  + arr6[2].lastName + " and 2 other friends are also in Baby Step 6");
      };
      if( arr7.length === 1){
        $('#seven').append(arr7[0].firstName + " " + arr7[0].lastName + " is also in Baby Step 7");
      } else if( arr7.length === 2){
         $('#seven').append(arr5[0].firstName  + " " +arr7[0].lastName + " and " + arr7[1].firstName  + " " + arr7[1].lastName +  " are also in Baby Step 7");
      } else if ( arr7.length === 3){
         $('#seven').append(arr7[0].firstName + " " +  arr7[0].lastName + ", " + arr7[1].firstName + " " + arr7[1].lastName + " and " + " 1 other friend are also in Baby Step 7");
      } else if ( arr5.length >= 4){
         $('#seven').append(arr7[0].firstName + " " + arr7[0].lastName + ", " + arr7[1].firstName + arr7[1].lastName + ", " + arr7[2].firstName+" "  + arr7[2].lastName + " and 2 other friends are also in Baby Step 7");
      };
 });
 });
