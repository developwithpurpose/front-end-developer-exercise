$(document).ready(function(){
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
        
   });
});





    function Person(first,last,step) {
        this.firstName = first;
        this.lastName = last;
        this.babyStep = step;
    }

        var ross = new Person("Ross", "Wakefield", 1);
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

var personArray = [ross, paul, sharon, thomas, deborah, mark, shirley, joseph, mary, matthew, patricia, larry, kimberly, jose, deborahLee, josephLopez, dorothy, joseJackson, karen, paulTaylor, amy, richard];

var arrayLength = personArray.length;
                   
    
  for(var i = 0; i < arrayLength; i++) {
    if(personArray[i].babyStep === 1) {
        document.getElementById("demo_1").innerHTML = personArray[i].firstName;
        document.getElementById("demo_1_last").innerHTML = personArray[i].lastName;
    }
      else if(personArray[i].babyStep === 2) {
        document.getElementById("demo_2").innerHTML = personArray[i].firstName;
        document.getElementById("demo_2_last").innerHTML = personArray[i].lastName;
    }
      else if(personArray[i].babyStep === 3) {
        document.getElementById("demo_3a").innerHTML = personArray[i].firstName;
        document.getElementById("demo_3a_last").innerHTML = personArray[i].lastName;
        document.getElementById("demo_3b").innerHTML = personArray[i].firstName;
        document.getElementById("demo_3b_last").innerHTML = personArray[i].lastName;  
    }
      else if(personArray[i].babyStep === 4) {
        document.getElementById("demo_4").innerHTML = personArray[i].firstName;
        document.getElementById("demo_4_last").innerHTML = personArray[i].lastName;  
    }
      
      else if(personArray[i].babyStep === 5) {
        document.getElementById("demo_5").innerHTML = personArray[i].firstName;
        document.getElementById("demo_5_last").innerHTML = personArray[i].lastName;  
    }
      else if(personArray[i].babyStep === 6) {
        document.getElementById("demo_6").innerHTML = personArray[i].firstName;
        document.getElementById("demo_6_last").innerHTML = personArray[i].lastName;  
    }
      else if(personArray[i].babyStep === 7) {
        document.getElementById("demo_7").innerHTML = personArray[i].firstName;
        document.getElementById("demo_7_last").innerHTML = personArray[i].lastName;  
    }
  }

