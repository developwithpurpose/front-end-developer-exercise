$(document).ready(function() {
    $('.right > article').hide();
    $('.right > article.active').fadeIn();
    $('.left > ul').css('minHeight',window.innerHeight-310);
    
    //events
    $(document).on('click','section.mainbody > .left li',function(e) {
        var transHeight = ($(this).data('step') - 1)*61;
        var obj = $(this);
        
        $('.right > article.active').hide();
        $('.right > article.active').removeClass('active');
        $('.right > article[id=step'+$(this).data('step')+']').addClass('active').fadeIn();
        
        $('.left .transitioner').animate({top:transHeight},'slow',function() {
            
        });
        $('.left li.active').removeClass('active');
        $(this).find('i').animate({'backgroundPositionY':$(this).data('iconpos')},10);
        $(this).animate({color:'#36abe1',},'slow',function() {
            obj.addClass('active');
            obj.find('i').remove();
            obj.find('a').append("<i></i>");
            obj.get(0).style.color = null;
            obj.get(0).style.fontWeight = null;
        });
        window.curint = 300;
        window.myint = setInterval(function() { window.curint += 100; obj.css('fontWeight',window.curint); if(window.curint == 600) { clearInterval(window.myint) } },50);
        
    });
});