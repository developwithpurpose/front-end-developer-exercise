
var myStep = 0;
var myDemoA = "";
var myDemoB = "";


var personArray = [ ];

/*$.getJSON( "app/assets/javascripts/baby-steps.json", function( data ) {
  $.each( data, function( key, val ) {
    $.each( val, function( key1, val1, key2, val2, key3, val3){
        items.push(val1);
        items.push(val2);
        items.push(val3);
        personArray.push(val1, val2, val3); 
    });
  });
});*/



function Person(first,last,step) {
        this.firstName = first;
        this.lastName = last;
        this.babyStep = step;
    }
    
        var paul = new Person("Paul", "Taylor", 2);
        var sharon = new Person("Sharon", "Thomas", 3);
        var thomas = new Person("Thomas", "Harris", 3);
        var deborah = new Person("Deborah", "Lee", 4);
        var mark = new Person("Mark", "Young", 4);
        var shirley = new Person("Shirley", "Perez", 4);
        var joseph = new Person("Joseph", "Lee", 5);
        var mary = new Person("Mary", "White", 5);
        var matthew = new Person("Matthew", "Garcia", 5);
        var patricia = new Person("Patricia", "Allen", 5);
        var larry = new Person("Larry", "Robinson", 6);
        var kimberly = new Person("Kimberly", "Lopez", 6);
        var jose = new Person("Jose", "Martinez", 6);
        var deborahLee = new Person("Deborah", "Walker", 6);
        var josephLopez = new Person("Joseph", "Lopez", 6);
        var dorothy = new Person("Dorothy", "Moore", 7);
        var joseJackson = new Person("Jose", "Jackson", 7);
        var karen = new Person("Karen", "Lee", 7);
        var paulTaylor = new Person("Paul", "Taylor", 7);
        var amy = new Person("Amy","Gonzalez", 7);
        var richard = new Person("Richard", "Martinez", 7);

        
var personArray = [paul, sharon, thomas, deborah, mark, shirley, joseph, mary, matthew, patricia, larry, kimberly, jose, deborahLee, josephLopez, dorothy, joseJackson, karen, paulTaylor, amy, richard];

var arrayLength = personArray.length;

function getNames() {

var myArray = [];
var myCount = 0;

                   
    
  for(var i = 0; i < arrayLength; i++) {
    
    if(personArray[i].babyStep === myStep) {
        myArray[myCount] = personArray[i];
          myCount = myCount+1;
    }
  }

var theString = "";
var theOtherString = "";

/*for(var j = 0; j < myArray.length; j++) {
    theString = theString.concat(myArray[j].firstName);
    theString = theString.concat(" ");
    theString = theString.concat(myArray[j].lastName);
    
    if(myArray.length > 2) {
        theString = theString.concat(", ");
    }
    if(j === 1) {
        break;   
    }
}*/
   var myExtra = 0;
    myExtra = myArray.length-2;
    
    if(myExtra === 1) {
        theString = theString.concat(myArray[0].firstName + " " + myArray[0].lastName + ", " + myArray[1].firstName + " " + myArray[1].lastName);
        theOtherString = theOtherString.concat(", and " + myExtra + " other friend are also in Baby Step " + myStep);
    }
    else if(myExtra === 0) {
        theString = theString.concat(myArray[0].firstName + " "  + myArray[0].lastName +  " and " + myArray[1].firstName + " " + myArray[1].lastName);
        theOtherString = theOtherString.concat(" are also in Baby Step " + myStep);    
    }
    else if(myExtra === -1) {
        theString = theString.concat(myArray[0].firstName + " " + myArray[0].lastName);
        theOtherString = theOtherString.concat(" is also in Baby Step " + myStep);   
    }
    else if(myExtra === -2) {
        theString = "";   
    }
    else if(myExtra > 1) {
       theString = theString.concat(myArray[0].firstName + " " + myArray[0].lastName + ", " + myArray[1].firstName + " " + myArray[1].lastName);
        theOtherString = theOtherString.concat(", and " + myExtra + " other friends are also in Baby Step " + myStep);     
    }

document.getElementById(myDemoA).innerHTML = theString;
document.getElementById(myDemoB).innerHTML = theOtherString;    

}




$( document ).ready(function() {
   $(this).addClass('active-1');
        $('.step_2').removeClass('active-2');
        $('.step_3').removeClass('active-3');
        $('.step_4').removeClass('active-4');
        $('.step_5').removeClass('active-5');
        $('.step_6').removeClass('active-6');
        $('.step_7').removeClass('active-7');
        $('.baby_step_1').addClass('open_box');
        $('.baby_step_2').removeClass('open_box');
        $('.baby_step_3').removeClass('open_box');
        $('.baby_step_4').removeClass('open_box');
        $('.baby_step_5').removeClass('open_box');
        $('.baby_step_6').removeClass('open_box');
        $('.baby_step_7').removeClass('open_box');
        myStep = 1;
        myDemoA = "demo_1a";
        myDemoB = "demo_1b";
       getNames();
});

   $('.step_1').click(function(){
        $(this).addClass('active-1');
        $('.step_2').removeClass('active-2');
        $('.step_3').removeClass('active-3');
        $('.step_4').removeClass('active-4');
        $('.step_5').removeClass('active-5');
        $('.step_6').removeClass('active-6');
        $('.step_7').removeClass('active-7');
        $('.baby_step_1').addClass('open_box');
        $('.baby_step_2').removeClass('open_box');
        $('.baby_step_3').removeClass('open_box');
        $('.baby_step_4').removeClass('open_box');
        $('.baby_step_5').removeClass('open_box');
        $('.baby_step_6').removeClass('open_box');
        $('.baby_step_7').removeClass('open_box');
        myStep = 1;
        myDemoA = "demo_1a";
        myDemoB = "demo_1b";
       getNames();
   });
    $('.step_2').click(function(){
        $(this).toggleClass('active-2');
        $('.step_1').removeClass('active-1');
        $('.step_3').removeClass('active-3');
        $('.step_4').removeClass('active-4');
        $('.step_5').removeClass('active-5');
        $('.step_6').removeClass('active-6');
        $('.step_7').removeClass('active-7');
        $('.baby_step_2').addClass('open_box');
        $('.baby_step_1').removeClass('open_box');
        $('.baby_step_3').removeClass('open_box');
        $('.baby_step_4').removeClass('open_box');
        $('.baby_step_5').removeClass('open_box');
        $('.baby_step_6').removeClass('open_box');
        $('.baby_step_7').removeClass('open_box');
        myStep = 2;
        myDemoA = "demo_2a";
        myDemoB = "demo_2b";
        getNames();
   });
    $('.step_3').click(function(){
        $(this).toggleClass('active-3');
        $('.step_1').removeClass('active-1');
        $('.step_2').removeClass('active-2');
        $('.step_4').removeClass('active-4');
        $('.step_5').removeClass('active-5');
        $('.step_6').removeClass('active-6');
        $('.step_7').removeClass('active-7');
        $('.baby_step_3').addClass('open_box');
        $('.baby_step_1').removeClass('open_box');
        $('.baby_step_2').removeClass('open_box');
        $('.baby_step_4').removeClass('open_box');
        $('.baby_step_5').removeClass('open_box');
        $('.baby_step_6').removeClass('open_box');
        $('.baby_step_7').removeClass('open_box');
        myStep = 3;
        myDemoA = "demo_3a";
        myDemoB = "demo_3b";
        getNames();
   });
    $('.step_4').click(function(){
        $(this).toggleClass('active-4');
        $('.step_1').removeClass('active-1');
        $('.step_2').removeClass('active-2');
        $('.step_3').removeClass('active-3');
        $('.step_5').removeClass('active-5');
        $('.step_6').removeClass('active-6');
        $('.step_7').removeClass('active-7');
        $('.baby_step_4').addClass('open_box');
        $('.baby_step_1').removeClass('open_box');
        $('.baby_step_2').removeClass('open_box');
        $('.baby_step_3').removeClass('open_box');
        $('.baby_step_5').removeClass('open_box');
        $('.baby_step_6').removeClass('open_box');
        $('.baby_step_7').removeClass('open_box');
        myStep = 4;
        myDemoA = "demo_4a";
        myDemoB = "demo_4b";
        getNames();
   });
    $('.step_5').click(function(){
        $(this).toggleClass('active-5');
        $('.step_1').removeClass('active-1');
        $('.step_2').removeClass('active-2');
        $('.step_3').removeClass('active-3');
        $('.step_4').removeClass('active-4');
        $('.step_6').removeClass('active-6');
        $('.step_7').removeClass('active-7');
        $('.baby_step_5').addClass('open_box');
        $('.baby_step_1').removeClass('open_box');
        $('.baby_step_2').removeClass('open_box');
        $('.baby_step_3').removeClass('open_box');
        $('.baby_step_4').removeClass('open_box');
        $('.baby_step_6').removeClass('open_box');
        $('.baby_step_7').removeClass('open_box');
        myStep = 5;
        myDemoA = "demo_5a";
        myDemoB = "demo_5b";
        getNames();
   });
    $('.step_6').click(function(){
        $(this).toggleClass('active-6');
        $('.step_1').removeClass('active-1');
        $('.step_2').removeClass('active-2');
        $('.step_3').removeClass('active-3');
        $('.step_4').removeClass('active-4');
        $('.step_5').removeClass('active-5');
        $('.step_7').removeClass('active-7');
        $('.baby_step_6').addClass('open_box');
        $('.baby_step_1').removeClass('open_box');
        $('.baby_step_2').removeClass('open_box');
        $('.baby_step_3').removeClass('open_box');
        $('.baby_step_4').removeClass('open_box');
        $('.baby_step_5').removeClass('open_box');
        $('.baby_step_7').removeClass('open_box');
        myStep = 6;
        myDemoA = "demo_6a";
        myDemoB = "demo_6b";
        getNames();
   });
    $('.step_7').click(function(){
        $(this).toggleClass('active-7');
        $('.step_1').removeClass('active-1');
        $('.step_2').removeClass('active-2');
        $('.step_3').removeClass('active-3');
        $('.step_4').removeClass('active-4');
        $('.step_5').removeClass('active-5');
        $('.step_6').removeClass('active-6');
        $('.baby_step_7').addClass('open_box');
        $('.baby_step_1').removeClass('open_box');
        $('.baby_step_2').removeClass('open_box');
        $('.baby_step_3').removeClass('open_box');
        $('.baby_step_4').removeClass('open_box');
        $('.baby_step_5').removeClass('open_box');
        $('.baby_step_6').removeClass('open_box');
        myStep = 7;
        myDemoA = "demo_7a";
        myDemoB = "demo_7b";
        getNames();
   });






    