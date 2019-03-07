
var startPanel = 1;

$(document).ready(function(){

    $('.mainimg').addClass('activated');

    window.panelWidth = $('.starter').width();

    $('.panel-container .panel').each(function(index){

        $(this).css({'width':window.panelWidth+'px','left':(index*window.panelWidth)+'px'});

        $('.starter .panels').css('width',(index+1)*window.panelWidth+'px');

    });
    /*Add click event to items */
    $('.starter .items span').each(function(){
        $(this).on('click', function(){
            changePanels( $(this).index() );
        });
    });

    /* Trigger the first panel */
    $('.starter .items span:nth-child('+window.startPanel+')').trigger('click');

});


function changePanels(newIndex){

    var newPanelPosition = ( window.panelWidth * newIndex ) * -1;
    var newPanelHeight = $('.starter .panel:nth-child('+(newIndex+1)+')').find('.panel-content').height() + 0;



    $('.starter .items span').removeClass('selected');
    $('.starter .items span:nth-child('+(newIndex+1)+')').addClass('selected');
    $('.starter .panels').animate({left:newPanelPosition},1000);
    $('.starter .panel-container').animate({height:newPanelHeight},1000);
    $.get("/baby-steps.json").done( function(data){
        var friends = [];
        var friend_num = 0;
        $.each(data.friends, function(index, value) {

            if((newIndex + 1) == value.babyStep){
                friend_num++;
                if(friend_num <=2){
                    friends.push(value.firstName + ' ' + value.lastName);
                }




            }



        });
        if(friend_num == 1){
            $(".heading").html('<p><span style="color: #36abe1;">' + friends[0] + '</span> is also in Baby Step ' + (newIndex + 1) + '</p>');
        }
        else if(friend_num == 2){
            $(".heading").html('<p><span style="color: #36abe1;">' + friends[0] + ' and ' + friends[1] + '</span> are also in Baby Step ' + (newIndex + 1) + '</p>');
        }
        else if(friend_num == 3){
            $(".heading").html('<p><span style="color: #36abe1;">' + friends[0] + ' and ' + friends[1] + '</span> and 1 other friend are also in Baby Step ' + (newIndex + 1) + '</p>');
        }
        else if(friend_num > 3){
            $(".heading").html('<p><span style="color: #36abe1;">' + friends[0] + ' and ' + friends[1] + '</span> and ' + (friend_num - 2) + ' other friends are also in Baby Step ' + (newIndex + 1) + '</p>');
        }
        else {
            $(".heading").html('');
        }
    });

}