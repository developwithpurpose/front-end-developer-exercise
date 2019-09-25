$(document).ready(function () {
    function getFriends(babyStep) {
        $.ajax({
            url : '/baby-steps.json',
            type : 'GET',
            dataType:'json',
            success : function(data) {
                var content = '';
                var friends = data.friends.filter(function(x) {
                    return x.babyStep === babyStep;
                }).sort(function(a,b) {
                    return a.lastName < b.lastName ? -1 : 1;
                });
                
                switch(friends.length) {
                    case 0:
                        break;
                    case 1:
                        content = '<p><a href="#">' + friends[0].firstName + ' ' + friends[0].lastName + '</a> is also in Baby Step ' + friends[0].babyStep + '</p>';
                        break;
                    case 2:
                        content = '<p><a href="#">' + friends[0].firstName + ' ' + friends[0].lastName + '</a> and <a href="#">' + friends[1].firstName + ' ' + friends[1].lastName + '</a> are also in Baby Step ' + friends[0].babyStep + '</p>';
                        break;
                    case 3:
                        content = '<p><a href="#">' + friends[0].firstName + ' ' + friends[0].lastName + '</a>, <a href="#">' + friends[1].firstName + ' ' + friends[1].lastName + '</a>, and 1 other friend are also in Baby Step ' + friends[0].babyStep + '</p>';
                        break;
                    case 4:
                        content = '<p><a href="#">' + friends[0].firstName + ' ' + friends[0].lastName + '</a>, <a href="#">' + friends[1].firstName + ' ' + friends[1].lastName + '</a>, and 2 other friends are also in Baby Step ' + friends[0].babyStep + '</p>';
                        break;
                }
    
                $('.friends').html(content);
            },
            error : function(e) {
                console.log('Failed to load JSON file.');
            }
        });
    }

    $('body').addClass('js-enabled');

    $('.steps-nav').each(function() {
        var $this = $(this);
        var $tab = $this.find('span.active');
        var $link = $tab.find('a');
        var $panel = $($link.attr('href'));

        $this.on('click', '.step-nav', function(e) {
            e.preventDefault();
            var $link = $(this);
            var id = this.hash;

            if(id && !$link.is('.active')) {
                $panel.removeClass('active');
                $tab.removeClass('active');

                $panel = $(id).addClass('active');
                $tab = $link.parent().addClass('active');

                var babyStep = id.replace('#step','');
                getFriends(parseInt(babyStep));
            }
        });
    });
});