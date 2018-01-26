$( document ).ready(function() {

    var friends = [];
    $.ajax({
        type: "GET",
        url: "baby-steps.json",
        success:function(data) {
            friends = data.friends;
            }
    });
    
    var showFriends = function (currentBabyStep) {
        var stepFriends = [];
        friends.forEach(function(friend) {
            if(friend.babyStep === currentBabyStep){
                stepFriends.push(friend);
                }               
            });
            
        var friendText;
                        
        switch(stepFriends.length){
                
            case 0:
                friendText = '';
                break;
            case 1:
                friendText = `<p class='friend-text'><a href="#" class="friend-link">${stepFriends[0].firstName} ${stepFriends[0].lastName}</a> is on this step. </p>`;
                break;
            case 2:
                friendText = `<p class='friend-text'><a href="#" class="friend-link">${stepFriends[0].firstName} ${stepFriends[0].lastName} and ${stepFriends[1].firstName} ${stepFriends[1].lastName}</a> are on this step.</p>`;
                break;
            case 3:
                friendText = `<p class='friend-text'><a href="#" class="friend-link">${stepFriends[0].firstName} ${stepFriends[0].lastName}, ${stepFriends[1].firstName} ${stepFriends[1].lastName}, </a> and ${stepFriends.length -2} other friend are on this step.</p>`;
                break;
            default:
                friendText = `<p class='friend-text'><a href="#" class="friend-link">${stepFriends[0].firstName} ${stepFriends[0].lastName}, ${stepFriends[1].firstName} ${stepFriends[1].lastName}, </a> and ${stepFriends.length -2} other friends are on this step.</p>`;
                break;
        }

        $('.friend-tracker').html(friendText);
        console.log(friendText);
        console.log(stepFriends);

    };
        
    $('.tab-li').click(function(){
        var currentBabyStep = Number.parseInt($(this).attr('datatype'));
        showFriends(currentBabyStep);
        console.log(currentBabyStep);
        var tab_id = $(this).attr('data-tab');
		$('.tab-li').removeClass('current');
        $('.tab-content').removeClass('current');
        $(this).addClass('current');
        $(this).find("img").addClass('active-img');
        $("#"+tab_id).addClass('current');
    });
});