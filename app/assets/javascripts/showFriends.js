$("#bs1button").click(function(){
    if(bs1.length > 0){
        var list = '';
        for(i = 0; i < bs1.length; i++) {
            list += bs1[i] + ", ";
        }
        $("#friendList").replaceWith(list + " is also on Baby Step 1.");
    } else {
        $("#friendList").empty();
    }
});

$("#bs2button").click(function(){
    if(bs2.length > 0){
        var list = '';
        for(i = 0; i < bs2.length; i++) {
            list += bs2[i] + ", ";
        }
        $("#friendList").replaceWith(list+ " is also on Baby Step 2.");
    } else {
        $("#friendList").empty();
    }
});

$("#bs3button").click(function(){
    if(bs3.length > 0){
        var list = '';
        for(i = 0; i < bs3.length; i++) {
            list += bs3[i] + ", ";
        }
        $("#friendList").replaceWith(list + " is also on Baby Step 3.");
    } else {
        $("#friendList").empty();
    }
});

$("#bs4button").click(function(){
    if(bs4.length > 0){
        var list = '';
        for(i = 0; i < bs4.length; i++) {
            list += bs4[i] + ", ";
        }
        $("#friendList").replaceWith(list + " is also on Baby Step 4.");
    } else {
        $("#friendList").empty();
    }
});

$("#bs5button").click(function(){
    if(bs5.length > 0){
        var list = '';
        for(i = 0; i < bs5.length; i++) {
            list += bs5[i] + ", ";
        }
        $("#friendList").replaceWith(list + " is also on Baby Step 5.");
    } else {
        $("#friendList").empty();
    }
});

$("#bs6button").click(function(){
    if(bs6.length > 0){
        var list = '';
        for(i = 0; i < bs6.length; i++) {
            list += bs6[i] + ", ";
        }
        $("#friendList").replaceWith(list + " is also on Baby Step 6.");
    } else {
        $("#friendList").empty();
    }
});

$("#bs7button").click(function(){
    if(bs7.length > 0){
        var list = '';
        for(i = 0; i < bs7.length; i++) {
            list += bs7[i] + ", ";
        }
        $("#friendList").replaceWith(list + " is also on Baby Step 7.");
    } else {
        $("#friendList").empty();
    }
});