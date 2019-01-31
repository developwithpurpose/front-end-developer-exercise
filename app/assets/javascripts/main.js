
jQuery(document).ready(function(){
    var jsFolder = "";

    //Ajax Call
      $.ajax({dataType: "json", url: "baby-steps.json", success: function(result){
        var friends = result.friends;
        var masterList = [];

        //This loop breaks up the json data into a Multidimensional array, orginized by baby step.
        for (x = 0; x < 6; x++) {
          masterList[x] = [];
          $.each(friends, function( key, val ){
              if(val.babyStep == (x+2)){
              masterList[x].push(val.firstName + ' ' + val.lastName);
              }
          });
        }

        //This loop pushes the data to its respective step.
        for (i = 0; i < 6; i++) {
          var currentList = document.getElementById('tagLine' + (i+2));

            //The first Step will end with '____ is also in Baby Step 2'.
            if(masterList[i].length <= 1){
              $.each(masterList[i], function( key, val ){
                currentList.innerHTML += ('<a href="#">' + val + '</a> ');
              });
              currentList.innerHTML += ('is also in Baby Step 2.');
            }else if(masterList[i].length <= 2){
              //This second Step will include an 'and' between the 2 names and end with '____ are also in Baby Step 3'.
              var z = 0;
              $.each(masterList[i], function( key, val ){
                currentList.innerHTML += ('<a href="#">' + val + '</a> ');
                if(z == 0){currentList.innerHTML += (' and ');}
                z++;
              });
              currentList.innerHTML += ('are also in Baby Step 3.');
            }else{
              //The rest of the steps will list the first two names in the array and the end with '___ and (number) other friends are on this step'.
              var y = 0;
              $.each(masterList[i], function( key, val ){
                if (y < 2){currentList.innerHTML += ('<a href="#">' + val + '</a>, ');}
                y++;
              });
              var howManyFriends = ''; if(masterList[i].length == 3){howManyFriends = 'friend'}else{{howManyFriends = 'friends'}}
              currentList.innerHTML += (' and '+ (masterList[i].length-2) +' other '+ howManyFriends +' are also in Baby Step ' + (i+2) +'.');
            }
        }
      }});

    if ( typeof html5Lightbox === "undefined" )
    {
        html5Lightbox = jQuery(".html5lightbox").html5lightbox({
            jsfolder:jsFolder
        });
    }
    jQuery("#amazingcarousel-5").amazingcarousel({
        jsfolder:jsFolder,
        interval:3000,
        itembottomshadowimagetop:99,
        random:false,
        direction:"vertical",
        arrowheight:32,
        itembackgroundimagewidth:100,
        skin:"Showcase",
        responsive:true,
        bottomshadowimage:"bottomshadow-110-95-0.png",
        navstyle:"bullets",
        enabletouchswipe:true,
        backgroundimagetop:-40,
        arrowstyle:"none",
        bottomshadowimagetop:95,
        transitionduration:1000,
        hoveroverlayimage:"hoveroverlay-64-64-5.png",
        itembottomshadowimage:"itembottomshadow-100-98-3.png",
        showitembottomshadow:false,
        transitioneasing:"easeOutExpo",
        showitembackgroundimage:false,
        itembackgroundimage:"",
        playvideoimagepos:"center",
        circular:true,
        arrowimage:"arrows-32-32-4.png",
        showbottomshadow:false,
        screenquery:{
	mobile: {
		screenwidth: 600,
		visibleitems: 1
	}
},
        navimage:"bullet-16-16-0.png",
        itembackgroundimagetop:0,
        showbackgroundimage:false,
        showplayvideo:true,
        spacing:8,
        scrollitems:1,
        showhoveroverlay:false,
        scrollmode:"page",
        navdirection:"vertical",
        itembottomshadowimagewidth:100,
        backgroundimage:"",
        arrowwidth:32,
        pauseonmouseover:false,
        navmode:"page",
        arrowhideonmouseleave:1000,
        navwidth:16,
        navspacing:8,
        playvideoimage:"playvideo-64-64-0.png",
        visibleitems:1,
        navswitchonmouseover:false,
        bottomshadowimagewidth:110,
        autoplay:false,
        backgroundimagewidth:110,
        loop:0,
        navheight:16
    });
});
