jQuery.fn.scrollTo = function(elem, speed) { 
    $(this).animate({
        scrollTop:  $(this).scrollTop() - $(this).offset().top + $(elem).offset().top 
    }, speed == undefined ? 1000 : speed); 
    return this; 
};

$(document).ready(function() {
    $('#sidebar-highlight').css('display', 'block');
    
    $('.sidebar-item').on('click', function(e) {
        $.each($('.sidebar-item'), function() {
            $(this).removeClass('selected');    
        });
        
        $(this).addClass('selected');
        $('#sidebar-highlight').animate({top:$(this).offset().top - $('.sidebar').offset().top}, 800, function() {});
        $(".content-body").scrollTo("#step-" + $(this).attr('data-id'), 1000);
    });
    
    function getFriends(step) {
        var friends = Array();
        
        $.ajax({
            dataType: "json",
            url: '/baby-steps.json',
            success: function(data) {
                $.each(data.friends, function(index, element) {
                    if (element.babyStep == step) {
                        friends.push(element);
                    }
                });
                
                var x = friends.sort(function(a,b){ return a.lastName > b.lastName ? 1 : -1; });
                
                var text = '';
                switch (true) {
                    case x.length == 0: break;
                    case x.length == 1: text += '<a href="#">' + x[0].firstName + ' ' + x[0].lastName + '</a> is also in Baby Step ' + step; break;
                    case x.length == 2: text += '<a href="#">' + x[0].firstName + ' ' + x[0].lastName + '</a> and <a href="#">' + x[1].firstName + ' ' + x[1].lastName + '</a> are also in Baby Step ' + step; break;
                    case x.length == 3: text += '<a href="#">' + x[0].firstName + ' ' + x[0].lastName + '</a>, <a href="#">' + x[1].firstName + ' ' + x[1].lastName + '</a>, and 1 other friend are also in Baby Step ' + step; break;
                    case x.length > 3: text += '<a href="#">' + x[0].firstName + ' ' + x[0].lastName + '</a>, <a href="#">' + x[1].firstName + ' ' + x[1].lastName + '</a>, and ' + (x.length - 2) + ' other friends are also in Baby Step ' + step; break;
                    default: break;
                }
                
                $('#friends-' + step).html(text);
            }
        });
    }
    
    for (var i = 1; i < 8; i++) {
        getFriends(i);
    }
});