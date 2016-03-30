

$(document).ready( function() {
    $.ajax({
        type: 'GET',
        url: "../baby-steps.json",
        dataType: 'json',
        success: function(data) {
            //console.log('Friends', data);
            var list = data;
            console.log(list)            
        }
    });
    
});




//$.each(data.friends, function (firstName, lastName){
  //          $('#bs1Friends').append( '<span>' + firstName + '' + lastName + '</span>');
    //    });