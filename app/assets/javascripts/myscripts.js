jQuery(document).ready(function($){
    $(".babySteps li:first").addClass("active");

    $(".babySteps li").click(function(){
        $(".babySteps li").removeClass("active");
        $(this).addClass("active");
    });

    $("#tabs").tabs({ 
        hide: { effect: "fade", duration: 400 },
        show: { effect: "slideDown", duration: 400 }
    });

    var numberOfBabySteps = 7;
    
    jQuery(document).ready(function($){
     
       // Get friend data
       $.get( "../baby-steps.json", function( data ) {

           dataSetFriend = data.friends;

      displayFriends();
      
       
       });
 
       function displayFriends() {

        for(var i = 1; i < numberOfBabySteps+1; i++) {
  
              
          friendCountThisStep = getCount(i);
          
          // no friends
          if(friendCountThisStep == 0 ){
              
              $("#step_"+i + " .friendStatus" ).html("");

          // 1 friend				
          } else if ( friendCountThisStep == 1){
          
              friendsThisStep = getFriends(i);

              $("#step_"+i + " .friendStatus" ).html("<span id='highlightFriends'>" + friendsThisStep[0].firstName + " " +  friendsThisStep[0].lastName + "</span>" + " is also in Baby Step " + i);
              

          // 2 friend				
          } else if ( friendCountThisStep == 2){
              
              friendsThisStep = getFriends(i);
              
              $("#step_"+i + " .friendStatus" ).html("<span id='highlightFriends'>" + friendsThisStep[0].firstName + " " +  friendsThisStep[0].lastName + "</span>" + " and " + "<span id='highlightFriends'>" + friendsThisStep[1].firstName + " " +  friendsThisStep[1].lastName + "</span>" +  " are also in Baby Step " + i);
          
          // 3 friends	
          }else if ( friendCountThisStep == 3){
              
              var friendList = " ";
              friendsThisStep = getFriends(i);
              
              for(var j = 2; j < friendsThisStep.length; j++) {
                  friendList +=  friendsThisStep[j].firstName + " " +  friendsThisStep[j].lastName ; 
                  if ( (j+1) != friendsThisStep.length) { friendList += ", "; }
              }
              

              
              $("#step_"+i + " .friendStatus" ).html("<span id='highlightFriends'>" + friendsThisStep[0].firstName + " " +  friendsThisStep[0].lastName + "</span>" + ", " + "<span id='highlightFriends'>" + friendsThisStep[1].firstName + " " +  friendsThisStep[1].lastName + "</span>" + " and " + (friendCountThisStep-2) + " other friend are also in Baby Step " + i);

              
              
          }else if ( friendCountThisStep > 3){
            
            var friendList = " ";
            friendsThisStep = getFriends(i);
            
            for(var j = 2; j < friendsThisStep.length; j++) {
                friendList +=  friendsThisStep[j].firstName + " " +  friendsThisStep[j].lastName ; 
                if ( (j+1) != friendsThisStep.length) { friendList += ", "; }
            }
            

            
            $("#step_"+i + " .friendStatus" ).html("<span id='highlightFriends'>" + friendsThisStep[0].firstName + " " +  friendsThisStep[0].lastName + "</span>" + ", " + "<span id='highlightFriends'>" + friendsThisStep[1].firstName + " " +  friendsThisStep[1].lastName + "</span>" +  " and " + (friendCountThisStep-2) + " other friends are also in Baby Step " + i);

          
        }
        

        }
        
       }  	  	

       // return friend count in babyStep
       function getCount(babyStep) {
           var count = 0;
           
           for (var i = 0; i < dataSetFriend.length; i++) {
              
               if (dataSetFriend[i].babyStep == babyStep) {
                   count++;
               }
           }
           return count;
       }
       
       // Return array of friends for babyStep
       function getFriends(babyStepSelect) {
           
           var returnFriends = $.grep(dataSetFriend,function(element, index){ 
               return element.babyStep == babyStepSelect; 
           });
           
           return returnFriends;
           
       }

 });
});