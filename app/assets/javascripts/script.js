$(document).ready(function() {
    $('.right > article').hide();
    $('.right > article.active').fadeIn();
    $('.left > ul').css('minHeight',window.innerHeight-310);
    
    //populate names
    $.getJSON('baby-steps.json',function(resp) {
        var friends = resp.friends;
        friends.sort(function(a,b) {
            return (a.lastName > b.lastName) ? 1 : ((a.lastName < b.lastName) ? -1 : 0);
        });
        window.steps = [];
        $.each(friends,function(ind,val) {
            if(typeof(window.steps[val.babyStep]) === "undefined")
                window.steps[val.babyStep] = [];
            val.fullName = val.firstName + " " + val.lastName;
            window.steps[val.babyStep].push(val);
        });
        $('.friends').each(function(e) {
            var step  = e+1;
            var len = window.steps[step] ? window.steps[step].length : 0;
            
            switch (len) {
                case 0:
                  break;
                case 1:
                  $(this).html("<span>"+window.steps[step][0].fullName+"</span> is also in Baby Step "+step);
                  break;
                case 2:
                  $(this).html("<span>"+window.steps[step][0].fullName+"</span> and <span>"+window.steps[step][1].fullName+"</span> are also in Baby Step "+step);
                  break;
                default:
                  $(this).html("<span>"+window.steps[step][0].fullName+", "+ window.steps[step][1].fullName+"</span> and "+(len - 2)+" other friends are also in Baby Step "+step);
            }
        });
    });        
    
    //events
    $(document).on('click','section.mainbody > .left li',function(e) {
        var transHeight = ($(this).data('step') - 1)*61;
        var obj = $(this);
                
        window.daveapp.step = $(this).data('step');
        window.localStorage["daveapp"] = JSON.stringify(window.daveapp);
        
        $('.right > article.active').hide();
        $('.right > article.active').removeClass('active');
        $('.right > article[id=step'+$(this).data('step')+']').addClass('active').fadeIn();
        
        $('.left .transitioner').animate({top:transHeight},'slow',function() {
            
        });
        $('.left li.active').removeClass('active');
        //$(this).find('i').animate({'backgroundPositionY':$(this).data('iconpos')},1);
        $(this).find('i').css('backgroundPosition','50% '+$(this).data('iconpos')+"px");
        $(this).animate({color:'#36abe1',},'slow',function() {
            obj.addClass('active');
            obj.find('i').remove();
            obj.find('a').append("<i></i>");
            /*obj.get(0).style.color = null;
            obj.get(0).style.fontWeight = null;
            */
            $('.left li').attr('style','');
        });
        window.curint = 300;
        window.myint = setInterval(function() { window.curint += 100; obj.css('fontWeight',window.curint); if(window.curint == 600) { clearInterval(window.myint) } },50);
        
    });
    
    //pull back last step
    window.localStorage["daveapp"] = window.localStorage['daveapp'] ? window.localStorage['daveapp'] : "{}";
    try {
        window.daveapp = JSON.parse(window.localStorage["daveapp"]);
    } catch(e) { window.localStorage["daveapp"] = "{}"; window.daveapp = {step:1}; }
    $('.left li[data-step='+window.daveapp.step+']').click();
});