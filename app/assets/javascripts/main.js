$(document).ready(function(){
  $.ajax({
    url: '/app/assets/views/babystep1.html',
    dataType: 'html',
    success: function(data) {
     $('.content').append(data);
    }
  })  
});

$('#bs1').on('click', function(){
  $.ajax({
    url: '/app/assets/views/babystep1.html',
    dataType: 'html',
    success: function(data) {
     $('.content').hide().html(data).fadeIn('slow');
    }
  }) 
  $.getJSON("/app/assets/javascripts/baby-steps.json", function(data){
    var list = [];
    for (var i = 0; i < 5; i++) {
      var step = data.friends[i].babyStep;
      var last = data.friends[i].lastName;
      var first = data.friends[i].firstName;
      if (step === 1) {
        list.push(first + " " + last + ", ");
        newList = list[list.length - 1];        

        $('.content').append($("<span></span>").append(newList).addClass("names")); 
      }
    } 
  }) 
});

$('#bs2').on('click', function(){
  $.ajax({
    url: '/app/assets/views/babystep2.html',
    dataType: 'html',
    success: function(data) {
     $('.content').hide().html(data).fadeIn('slow');
   }
  })
  $.getJSON("/app/assets/javascripts/baby-steps.json", function(data){
    var list = [];
    for (var i = 0; i < 5; i++) {
      var step = data.friends[i].babyStep;
      var last = data.friends[i].lastName;
      var first = data.friends[i].firstName;
      if (step === 2) {
        list.push(first + " " + last + ", ");
        newList = list[list.length - 1];        

        $('.content').append($("<span></span>").append(newList).addClass("names"));  
      }
    }   
    $('.content').append("are on this step");    
  })     
});

$('#bs3').on('click', function(){
  $.ajax({
    url: '/app/assets/views/babystep3.html',
    dataType: 'html',
    success: function(data) {
     $('.content').hide().html(data).fadeIn('slow');
   }
  })  
  $.getJSON("/app/assets/javascripts/baby-steps.json", function(data){
    var list = [];
    for (var i = 0; i < 5; i++) {
      var step = data.friends[i].babyStep;
      var last = data.friends[i].lastName;
      var first = data.friends[i].firstName;
      if (step === 3) {
        list.push(first + " " + last + ", ");
        newList = list[list.length - 1];        

       $('.content').append($("<span></span>").append(newList).addClass("names")); 
      }
    }   
    $('.content').append("are on this step");    
  }) 
});

$('#bs4').on('click', function(){
  $.ajax({
    url: '/app/assets/views/babystep4.html',
    dataType: 'html',
    success: function(data) {
     $('.content').hide().html(data).fadeIn('slow');
   }
  })  
  $.getJSON("/app/assets/javascripts/baby-steps.json", function(data){
    var list = [];
    for (var i = 0; i < 21; i++) {
      var step = data.friends[i].babyStep;
      var last = data.friends[i].lastName;
      var first = data.friends[i].firstName;
      if (step === 4) {
        list.push(first + " " + last + ", ");
        newList = list[list.length - 1];        

        $('.content').append($("<span></span>").append(newList).addClass("names")); 
      }
    }   
    $('.content').append("are on this step");    
  }) 
});

$('#bs5').on('click', function(){
  $.ajax({
    url: '/app/assets/views/babystep5.html',
    dataType: 'html',
    success: function(data) {
     $('.content').hide().html(data).fadeIn('slow');
   }
  }) 
 $.getJSON("/app/assets/javascripts/baby-steps.json", function(data){
    var list = [];
    for (var i = 0; i < 21; i++) {
      var step = data.friends[i].babyStep;
      var last = data.friends[i].lastName;
      var first = data.friends[i].firstName;
      if (step === 5) {
        list.push(first + " " + last + ", ");
        newList = list[list.length - 1];        

        $('.content').append($("<span></span>").append(newList).addClass("names")); 
      }
    }   
    $('.content').append("are on this step");    
  })  
});

$('#bs6').on('click', function(){
  $.ajax({
    url: '/app/assets/views/babystep6.html',
    dataType: 'html',
    success: function(data) {
     $('.content').hide().html(data).fadeIn('slow');
   }
  })  
  $.getJSON("/app/assets/javascripts/baby-steps.json", function(data){
    var list = [];
    for (var i = 0; i < 21; i++) {
      var step = data.friends[i].babyStep;
      var last = data.friends[i].lastName;
      var first = data.friends[i].firstName;
      if (step === 6) {
        list.push(first + " " + last + ", ");
        newList = list[list.length - 1];        

        $('.content').append($("<span></span>").append(newList).addClass("names")); 
      }
    }   
    $('.content').append("are on this step");    
  }) 
});

$('#bs7').on('click', function(){
  $.ajax({
    url: '/app/assets/views/babystep7.html',
    dataType: 'html',
    success: function(data) {
     $('.content').hide().html(data).fadeIn('slow');
   }
  })  
  $.getJSON("/app/assets/javascripts/baby-steps.json", function(data){
    var list = [];
    for (var i = 0; i < 21; i++) {
      var step = data.friends[i].babyStep;
      var last = data.friends[i].lastName;
      var first = data.friends[i].firstName;
      if (step === 5) {
        list.push(first + " " + last + ", ");
        newList = list[list.length - 1];        

        $('.content').append($("<span></span>").append(newList).addClass("names")); 
      }
    }   
    $('.content').append("are on this step");    
  }) 
});


