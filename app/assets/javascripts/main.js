$( document ).ready(function() {
    console.log('It works!');
    // console.log( "main.js reports ", babysteps_data );

    $("#button1").click(function() {
        
        $(this).removeClass().addClass("button-white");
        $("#button2, #button3, #button4, #button5, #button6, #button7").removeClass().addClass('button-gray');
        $("#button1text").removeClass().addClass('button-text-blue');
        $("#button2text, #button3text, #button4text, #button5text, #button6text, #button7text").removeClass().addClass('button-text-gray');
        
        $("#btnicon1").attr("src","/assets/images/icons/individual/icons_small_bs1_blue.png");
        $("#btnicon2").attr("src","/assets/images/icons/individual/icons_small_bs2.png");
        $("#btnicon3").attr("src","/assets/images/icons/individual/icons_small_bs3.png");
        $("#btnicon4").attr("src","/assets/images/icons/individual/icons_small_bs4.png");
        $("#btnicon5").attr("src","/assets/images/icons/individual/icons_small_bs5.png");
        $("#btnicon6").attr("src","/assets/images/icons/individual/icons_small_bs6.png");
        $("#btnicon7").attr("src","/assets/images/icons/individual/icons_small_bs7.png");
    }); 

    $("#button2").click(function() {
        
        $(this).removeClass().addClass("button-white");
        $("#button1, #button3, #button4, #button5, #button6, #button7").removeClass().addClass('button-gray');
        $("#button2text").removeClass().addClass('button-text-blue');
        $("#button1text, #button3text, #button4text, #button5text, #button6text, #button7text").removeClass().addClass('button-text-gray');
    
        $("#btnicon1").attr("src","/assets/images/icons/individual/icons_small_bs1.png");
        $("#btnicon2").attr("src","/assets/images/icons/individual/icons_small_bs2_blue.png");
        $("#btnicon3").attr("src","/assets/images/icons/individual/icons_small_bs3.png");
        $("#btnicon4").attr("src","/assets/images/icons/individual/icons_small_bs4.png");
        $("#btnicon5").attr("src","/assets/images/icons/individual/icons_small_bs5.png");
        $("#btnicon6").attr("src","/assets/images/icons/individual/icons_small_bs6.png");
        $("#btnicon7").attr("src","/assets/images/icons/individual/icons_small_bs7.png");
    }); 

    $('#button3').click(function() {
        $(this).removeClass().addClass("button-white");
        $("#button1, #button2, #button4, #button5, #button6, #button7").removeClass().addClass('button-gray');
        $("#button3text").removeClass().addClass('button-text-blue');
        $("#button1text, #button2text, #button4text, #button5text, #button6text, #button7text").removeClass().addClass('button-text-gray');
 
        $("#btnicon1").attr("src","/assets/images/icons/individual/icons_small_bs1.png");
        $("#btnicon2").attr("src","/assets/images/icons/individual/icons_small_bs2.png");
        $("#btnicon3").attr("src","/assets/images/icons/individual/icons_small_bs3_blue.png");
        $("#btnicon4").attr("src","/assets/images/icons/individual/icons_small_bs4.png");
        $("#btnicon5").attr("src","/assets/images/icons/individual/icons_small_bs5.png");
        $("#btnicon6").attr("src","/assets/images/icons/individual/icons_small_bs6.png");
        $("#btnicon7").attr("src","/assets/images/icons/individual/icons_small_bs7.png");
    }); 

    $('#button4').click(function() {
        $(this).removeClass().addClass("button-white");
        $("#button1, #button2, #button3, #button5, #button6, #button7").removeClass().addClass('button-gray');
        $("#button4text").removeClass().addClass('button-text-blue');
        $("#button1text, #button2text, #button3text, #button5text, #button6text, #button7text").removeClass().addClass('button-text-gray');
    
        $("#btnicon1").attr("src","/assets/images/icons/individual/icons_small_bs1.png");
        $("#btnicon2").attr("src","/assets/images/icons/individual/icons_small_bs2.png");
        $("#btnicon3").attr("src","/assets/images/icons/individual/icons_small_bs3.png");
        $("#btnicon4").attr("src","/assets/images/icons/individual/icons_small_bs4_blue.png");
        $("#btnicon5").attr("src","/assets/images/icons/individual/icons_small_bs5.png");
        $("#btnicon6").attr("src","/assets/images/icons/individual/icons_small_bs6.png");
        $("#btnicon7").attr("src","/assets/images/icons/individual/icons_small_bs7.png");
    
    }); 

    $('#button5').click(function() {
        $(this).removeClass().addClass("button-white");
        $("#button1, #button2, #button3, #button4, #button6, #button7").removeClass().addClass('button-gray');
        $("#button5text").removeClass().addClass('button-text-blue');
        $("#button1text, #button2text, #button3text, #button4text, #button6text, #button7text").removeClass().addClass('button-text-gray');
    
        $("#btnicon1").attr("src","/assets/images/icons/individual/icons_small_bs1.png");
        $("#btnicon2").attr("src","/assets/images/icons/individual/icons_small_bs2.png");
        $("#btnicon3").attr("src","/assets/images/icons/individual/icons_small_bs3.png");
        $("#btnicon4").attr("src","/assets/images/icons/individual/icons_small_bs4.png");
        $("#btnicon5").attr("src","/assets/images/icons/individual/icons_small_bs5_blue.png");
        $("#btnicon6").attr("src","/assets/images/icons/individual/icons_small_bs6.png");
        $("#btnicon7").attr("src","/assets/images/icons/individual/icons_small_bs7.png");
    }); 

    $('#button6').click(function() {
        $(this).removeClass().addClass("button-white");
        $("#button1, #button2, #button3, #button4, #button5, #button7").removeClass().addClass('button-gray');
        $("#button6text").removeClass().addClass('button-text-blue');
        $("#button1text, #button2text, #button3text, #button4text, #button5text, #button7text").removeClass().addClass('button-text-gray');
    
        $("#btnicon1").attr("src","/assets/images/icons/individual/icons_small_bs1.png");
        $("#btnicon2").attr("src","/assets/images/icons/individual/icons_small_bs2.png");
        $("#btnicon3").attr("src","/assets/images/icons/individual/icons_small_bs3.png");
        $("#btnicon4").attr("src","/assets/images/icons/individual/icons_small_bs4.png");
        $("#btnicon5").attr("src","/assets/images/icons/individual/icons_small_bs5.png");
        $("#btnicon6").attr("src","/assets/images/icons/individual/icons_small_bs6_blue.png");
        $("#btnicon7").attr("src","/assets/images/icons/individual/icons_small_bs7.png");
    }); 

    $('#button7').click(function() {
        $(this).removeClass().addClass("button-white");
        $("#button1, #button2, #button3, #button4, #button5, #button6").removeClass().addClass('button-gray');
        $("#button7text").removeClass().addClass('button-text-blue');
        $("#button1text, #button2text, #button3text, #button4text, #button5text, #button6text").removeClass().addClass('button-text-gray');
    
        $("#btnicon1").attr("src","/assets/images/icons/individual/icons_small_bs1.png");
        $("#btnicon2").attr("src","/assets/images/icons/individual/icons_small_bs2.png");
        $("#btnicon3").attr("src","/assets/images/icons/individual/icons_small_bs3.png");
        $("#btnicon4").attr("src","/assets/images/icons/individual/icons_small_bs4.png");
        $("#btnicon5").attr("src","/assets/images/icons/individual/icons_small_bs5.png");
        $("#btnicon6").attr("src","/assets/images/icons/individual/icons_small_bs6.png");
        $("#btnicon7").attr("src","/assets/images/icons/individual/icons_small_bs7_blue.png");
    
    }); 























});