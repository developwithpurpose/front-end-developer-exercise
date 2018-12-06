$(document).ready(function(){
    $('.tabs .tab').click(function(){
        var index       = $(this).index(),
            $eqTab   = $('.tab-content .content').eq(index);
      
            $(this).addClass('active').siblings().removeClass('active');
            $eqTab.addClass('active').find('.right, .left').removeClass('active').end()
            .siblings().removeClass('active');
            // setTimeout(function(){
            //   $eqTab.find('.right, .left').addClass('active');
            // }, 50);
      });

      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var response = JSON.parse(xhttp.responseText);
            console.log(response.friends[0].babyStep);
        }
      };
      xhttp.open("GET", "baby-steps.json", true);
      xhttp.send();
});