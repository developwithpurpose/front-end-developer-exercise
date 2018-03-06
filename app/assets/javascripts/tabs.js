$(document).ready(function(){
    $('.side-menu li').on('click', function(e){
        var self = $(this);
        var id = e.target.value;
        var $menuInfoID = $('.menu-info #'+id+'');
        var $menuInfoCopy = $('.menu-info .copy');
        var $sideMenuLi = $('.side-menu li');
        var getClassCopy = $menuInfoCopy.hasClass('active');
        var getClassSideMenuLi = $sideMenuLi.hasClass('active');
        if(getClassCopy && getClassSideMenuLi){
            $menuInfoCopy.removeClass('active');
            $sideMenuLi.removeClass('active');
        }
        $menuInfoID.addClass('active');
        $(this).addClass('active');

        $.ajax({
            url: 'baby-steps.json',
            dataType: 'json',
            success: function(data){
                data = data.friends;// return DATA
                //FILTER FRIEND BY ID FOR TABS
                var res = data.filter(function(friend){
                    friend = friend.babyStep == id;
                    return friend;
                })
                var count = res.length; // GET COUNT
                // LOGICAL PART FOR OUTPUTTING TO HTML
                if(count === 0){
                    friends = '';
                }
                if(count === 1){
                    friends = "<a href='#'>Paul Taylor</a> is also in Baby Step 2";
                }
                if(count === 2){
                    friends = "<a href='#'>Thomas Harris and Sharon Thomas</a> are also in Baby Step 3";
                }
                if(count === 3){
                    friends = "<a href='#'>Deborah Lee, Shirley Perez,</a> and 1 other friend are also in Baby Step 4";
                }
                if(count >= 4){
                    friends = "<a href='#'>Patricia Allen, Matthew Garcia,</a> and 2 other friends are also in Baby Step 5";
                }

                $('.menu-info #'+id+' .friends').html(friends);
            }
        })
    })
});