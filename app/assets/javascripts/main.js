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
});

$('#bs2').on('click', function(){
  $.ajax({
    url: '/app/assets/views/babystep2.html',
    dataType: 'html',
    success: function(data) {
     $('.content').hide().html(data).fadeIn('slow');
   }
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
});

$('#bs4').on('click', function(){
  $.ajax({
    url: '/app/assets/views/babystep4.html',
    dataType: 'html',
    success: function(data) {
     $('.content').hide().html(data).fadeIn('slow');
   }
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
});

$('#bs6').on('click', function(){
  $.ajax({
    url: '/app/assets/views/babystep6.html',
    dataType: 'html',
    success: function(data) {
     $('.content').hide().html(data).fadeIn('slow');
   }
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
});
