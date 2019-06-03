$(document).ready(function () {
    findFriends();
    $(".step1").addClass("clicked");
    $(".pic1").attr("src", "assets/images/icons/individual/icons_small_bs1_blue.png");
    $(".babyStep2").hide();
    $(".babyStep3").hide();
    $(".babyStep4").hide();
    $(".babyStep5").hide();
    $(".babyStep6").hide();
    $(".babyStep7").hide();

    $(".step1").on("click", function () {
        findFriends();
        $(".step1").addClass("clicked");
        $(".pic1").attr("src", "assets/images/icons/individual/icons_small_bs1_blue.png");
        $(".pic2").attr("src", "assets/images/icons/individual/icons_small_bs2.png");
        $(".pic3").attr("src", "assets/images/icons/individual/icons_small_bs3.png");
        $(".pic4").attr("src", "assets/images/icons/individual/icons_small_bs4.png");
        $(".pic5").attr("src", "assets/images/icons/individual/icons_small_bs5.png");
        $(".pic6").attr("src", "assets/images/icons/individual/icons_small_bs6.png");
        $(".pic7").attr("src", "assets/images/icons/individual/icons_small_bs7.png");
        $(".step2").removeClass("clicked");
        $(".step3").removeClass("clicked");
        $(".step4").removeClass("clicked");
        $(".step5").removeClass("clicked");
        $(".step6").removeClass("clicked");
        $(".step7").removeClass("clicked");
        $(".babyStep1").toggle("fold");
        $(".babyStep2").hide();
        $(".babyStep3").hide();
        $(".babyStep4").hide();
        $(".babyStep5").hide();
        $(".babyStep6").hide();
        $(".babyStep7").hide();
    });

    $(".step2").on("click", function () {
        findFriends();
        $(".step2").addClass("clicked");
        $(".pic2").attr("src", "assets/images/icons/individual/icons_small_bs2_blue.png");
        $(".pic1").attr("src", "assets/images/icons/individual/icons_small_bs1.png");
        $(".pic3").attr("src", "assets/images/icons/individual/icons_small_bs3.png");
        $(".pic4").attr("src", "assets/images/icons/individual/icons_small_bs4.png");
        $(".pic5").attr("src", "assets/images/icons/individual/icons_small_bs5.png");
        $(".pic6").attr("src", "assets/images/icons/individual/icons_small_bs6.png");
        $(".pic7").attr("src", "assets/images/icons/individual/icons_small_bs7.png");
        $(".step1").removeClass("clicked");
        $(".step3").removeClass("clicked");
        $(".step4").removeClass("clicked");
        $(".step5").removeClass("clicked");
        $(".step6").removeClass("clicked");
        $(".step7").removeClass("clicked");
        $(".babyStep2").toggle("fold");
        $(".babyStep1").hide();
        $(".babyStep3").hide();
        $(".babyStep4").hide();
        $(".babyStep5").hide();
        $(".babyStep6").hide();
        $(".babyStep7").hide();
    });

    $(".step3").on("click", function () {
        findFriends();
        $(".step3").addClass("clicked");
        $(".pic3").attr("src", "assets/images/icons/individual/icons_small_bs3_blue.png");
        $(".pic2").attr("src", "assets/images/icons/individual/icons_small_bs2.png");
        $(".pic1").attr("src", "assets/images/icons/individual/icons_small_bs1.png");
        $(".pic4").attr("src", "assets/images/icons/individual/icons_small_bs4.png");
        $(".pic5").attr("src", "assets/images/icons/individual/icons_small_bs5.png");
        $(".pic6").attr("src", "assets/images/icons/individual/icons_small_bs6.png");
        $(".pic7").attr("src", "assets/images/icons/individual/icons_small_bs7.png");
        $(".step2").removeClass("clicked");
        $(".step1").removeClass("clicked");
        $(".step4").removeClass("clicked");
        $(".step5").removeClass("clicked");
        $(".step6").removeClass("clicked");
        $(".step7").removeClass("clicked");
        $(".babyStep3").toggle("fold");
        $(".babyStep1").hide();
        $(".babyStep2").hide();
        $(".babyStep4").hide();
        $(".babyStep5").hide();
        $(".babyStep6").hide();
        $(".babyStep7").hide();
    });

    $(".step4").on("click", function () {
        findFriends();
        $(".step4").addClass("clicked");
        $(".pic4").attr("src", "assets/images/icons/individual/icons_small_bs4_blue.png");
        $(".pic2").attr("src", "assets/images/icons/individual/icons_small_bs2.png");
        $(".pic3").attr("src", "assets/images/icons/individual/icons_small_bs3.png");
        $(".pic1").attr("src", "assets/images/icons/individual/icons_small_bs1.png");
        $(".pic5").attr("src", "assets/images/icons/individual/icons_small_bs5.png");
        $(".pic6").attr("src", "assets/images/icons/individual/icons_small_bs6.png");
        $(".pic7").attr("src", "assets/images/icons/individual/icons_small_bs7.png");
        $(".step2").removeClass("clicked");
        $(".step3").removeClass("clicked");
        $(".step1").removeClass("clicked");
        $(".step5").removeClass("clicked");
        $(".step6").removeClass("clicked");
        $(".step7").removeClass("clicked");
        $(".babyStep4").toggle("fold");
        $(".babyStep1").hide();
        $(".babyStep3").hide();
        $(".babyStep2").hide();
        $(".babyStep5").hide();
        $(".babyStep6").hide();
        $(".babyStep7").hide();
    });

    $(".step5").on("click", function () {
        findFriends();
        $(".step5").addClass("clicked");
        $(".pic5").attr("src", "assets/images/icons/individual/icons_small_bs5_blue.png");
        $(".pic2").attr("src", "assets/images/icons/individual/icons_small_bs2.png");
        $(".pic3").attr("src", "assets/images/icons/individual/icons_small_bs3.png");
        $(".pic4").attr("src", "assets/images/icons/individual/icons_small_bs4.png");
        $(".pic1").attr("src", "assets/images/icons/individual/icons_small_bs1.png");
        $(".pic6").attr("src", "assets/images/icons/individual/icons_small_bs6.png");
        $(".pic7").attr("src", "assets/images/icons/individual/icons_small_bs7.png");
        $(".step2").removeClass("clicked");
        $(".step3").removeClass("clicked");
        $(".step4").removeClass("clicked");
        $(".step1").removeClass("clicked");
        $(".step6").removeClass("clicked");
        $(".step7").removeClass("clicked");
        $(".babyStep5").toggle("fold");
        $(".babyStep1").hide();
        $(".babyStep3").hide();
        $(".babyStep4").hide();
        $(".babyStep2").hide();
        $(".babyStep6").hide();
        $(".babyStep7").hide();
    });

    $(".step6").on("click", function () {
        findFriends();
        $(".step6").addClass("clicked");
        $(".pic6").attr("src", "assets/images/icons/individual/icons_small_bs6_blue.png");
        $(".pic2").attr("src", "assets/images/icons/individual/icons_small_bs2.png");
        $(".pic3").attr("src", "assets/images/icons/individual/icons_small_bs3.png");
        $(".pic4").attr("src", "assets/images/icons/individual/icons_small_bs4.png");
        $(".pic5").attr("src", "assets/images/icons/individual/icons_small_bs5.png");
        $(".pic1").attr("src", "assets/images/icons/individual/icons_small_bs1.png");
        $(".pic7").attr("src", "assets/images/icons/individual/icons_small_bs7.png");
        $(".step2").removeClass("clicked");
        $(".step3").removeClass("clicked");
        $(".step4").removeClass("clicked");
        $(".step5").removeClass("clicked");
        $(".step1").removeClass("clicked");
        $(".step7").removeClass("clicked");
        $(".babyStep6").toggle("fold");
        $(".babyStep1").hide();
        $(".babyStep3").hide();
        $(".babyStep4").hide();
        $(".babyStep5").hide();
        $(".babyStep2").hide();
        $(".babyStep7").hide();
    });

    $(".step7").on("click", function () {
        findFriends();
        $(".step7").addClass("clicked");
        $(".pic7").attr("src", "assets/images/icons/individual/icons_small_bs7_blue.png");
        $(".pic2").attr("src", "assets/images/icons/individual/icons_small_bs2.png");
        $(".pic3").attr("src", "assets/images/icons/individual/icons_small_bs3.png");
        $(".pic4").attr("src", "assets/images/icons/individual/icons_small_bs4.png");
        $(".pic5").attr("src", "assets/images/icons/individual/icons_small_bs5.png");
        $(".pic6").attr("src", "assets/images/icons/individual/icons_small_bs6.png");
        $(".pic1").attr("src", "assets/images/icons/individual/icons_small_bs1.png");
        $(".step2").removeClass("clicked");
        $(".step3").removeClass("clicked");
        $(".step4").removeClass("clicked");
        $(".step5").removeClass("clicked");
        $(".step6").removeClass("clicked");
        $(".step1").removeClass("clicked");
        $(".babyStep7").toggle("fold");
        $(".babyStep1").hide();
        $(".babyStep3").hide();
        $(".babyStep4").hide();
        $(".babyStep5").hide();
        $(".babyStep6").hide();
        $(".babyStep2").hide();
    });

    function findFriends() {
        $.ajax({
            url: "baby-steps.json",
            method: "GET",
            async: false
        }).then(function(data) {
            $("#message").html(data)
        })
    }
})