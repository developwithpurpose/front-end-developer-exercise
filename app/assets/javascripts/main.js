/*
 * Author:  Bryce Embry
 * 
 * Again, thanks for taking time to review my code.  
 * 
 * You'll see right away that I gave up on the JSON call and just dumped the data in
 * directly.  I wasn't able to get Node and Grunt configured on my Windows box, 
 * so the JSON calls weren't working out.    
 *
 */

$(document).ready(function(){
     
var activeArticle = "1";
   
 var friends =  [
        { "firstName" : "Paul", "lastName" : "Taylor", "babyStep": 2 },
        { "firstName" : "Sharon", "lastName" : "Thomas", "babyStep": 3 },
        { "firstName" : "Thomas", "lastName" : "Harris", "babyStep": 3 },
        { "firstName" : "Deborah", "lastName" : "Lee", "babyStep": 4 },
        { "firstName" : "Mark", "lastName" : "Young", "babyStep": 4 },
        { "firstName" : "Shirley", "lastName" : "Perez", "babyStep": 4 },
        { "firstName" : "Joseph", "lastName" : "Lee", "babyStep": 5 },
        { "firstName" : "Mary", "lastName" : "White", "babyStep": 5 },
        { "firstName" : "Matthew", "lastName" : "Garcia", "babyStep": 5 },
        { "firstName" : "Patricia", "lastName" : "Allen", "babyStep": 5 },
        { "firstName" : "Larry", "lastName" : "Robinson", "babyStep": 6 },
        { "firstName" : "Kimberly", "lastName" : "Lopez", "babyStep": 6 },
        { "firstName" : "Jose", "lastName" : "Martinez", "babyStep": 6 },
        { "firstName" : "Deborah", "lastName" : "Walker", "babyStep": 6 },
        { "firstName" : "Joseph", "lastName" : "Lopez", "babyStep": 6 },
        { "firstName" : "Dorothy", "lastName" : "Moore", "babyStep": 7 },
        { "firstName" : "Jose", "lastName" : "Jackson", "babyStep": 7 },
        { "firstName" : "Karen", "lastName" : "Lee", "babyStep": 7 },
        { "firstName" : "Paul", "lastName" : "Taylor", "babyStep": 7 },
        { "firstName" : "Amy", "lastName" : "Gonzalez", "babyStep": 7 },
        { "firstName" : "Richard", "lastName" : "Martinez", "babyStep": 7 }
    ];
   
/*
 * I usually work in PHP on the back end, so I would typically use a query to 
 * pull this data from the server side and feed it directly into the HTML.
 * Since that's not an option here, I'm taking the least efficient method and 
 * just iterating through the array. 
 */
        // set up an array for parsing the data above
        var friendStatus = [{babyStep: 1, users:0, name1:null, name2:null}, 
            {babyStep: 2, users:0, name1:null, name2:null},
            {babyStep: 3, users:0, name1:null, name2:null},
            {babyStep: 4, users:0, name1:null, name2:null},
            {babyStep: 5, users:0, name1:null, name2:null},
            {babyStep: 6, users:0, name1:null, name2:null},  
            {babyStep: 7, users:0, name1:null, name2:null}];

        // iterate through the original data to get the compiled info.
        $.each(friends, function(index, data){
            var key = data.babyStep - 1; 
            
            friendStatus[key].users += 1;
            
            if (!friendStatus[key].name1) {
                friendStatus[key].name1 = data.firstName + " " + data.lastName;
            }
            
            else if (!friendStatus[key].name2) {
                friendStatus[key].name2 = data.firstName + " " + data.lastName;
            }
        });
        
        //  And now iterate through the compiled data to update each article
        $.each(friendStatus, function(index, data){
            var babyStep = index + 1; 
            
            if(!data.users) {
                return;
                // leave the DIV empty if there are no other users at this level. 
            }
            
            var target = ".socialConnection" + babyStep;
            var link1 = "<a href='mailto:" + data.name1 + "'>" + data.name1 + "</a>";
            
            if (data.name2) {
                var link2 = "<a href='mailto:" + data.name2 + "'>" + data.name2 + "</a>";
            }
            
            if (data.users == 1){
                var text = link1 + " is also on Baby Step " + babyStep + "."; 
            }
            
            if (data.users == 2) {
                var text = link1 + " and " + link2 + " are also on Baby Step " + babyStep + "."; 
            }
            
            if (data.users == 3) {
                var text = link1 + ", " + link2 + " and 1 other friend are also on Baby Step " + babyStep + "."; 
            }
            
            if (data.users >= 4) {
                var extraFriends = data.users - 2;
                var text = link1 + ", " + link2 + " and " + extraFriends + " other friends are also on Baby Step " + babyStep + "."; 
            }        
            $(target).append(text);
        })

   
   function changeArticle(newArticle) {

       if (newArticle == activeArticle) {
           return;
           // if the user is clicking the currently active article, 
           // don't trigger the animation. 
       }
       
       // Otherwise, deactivate the old article and activate a new one
       var oldArticleNav = ".navItem" + activeArticle;
       var oldArticleContent = ".articleBody" + activeArticle;
       var oldNavLogoSelected = ".navLogoSelected" + activeArticle;
       var oldNavLogo = "navLogo" + activeArticle;
       
       var newArticleContent = ".articleBody" + newArticle;
       var newArticleNav = ".navItem" + newArticle;
       var newNavLogoSelected = "navLogoSelected" + newArticle;
       var newNavLogo = ".navLogo" + newArticle; 
       
       $(oldArticleNav).removeClass("navItemSelected");
       $(oldNavLogoSelected).attr("class", oldNavLogo);

     
              
       $(newArticleNav).addClass("navItemSelected");
       $(newNavLogo).attr("class", newNavLogoSelected);
       
       if (newArticle > activeArticle) {
            $(oldArticleContent).hide("slide", {direction: "left"}, 750);
            $(newArticleContent).show("slide", {direction: "right"}, 750); 
        }
        
        else {
            $(oldArticleContent).hide("slide", {direction: "right"}, 750);
            $(newArticleContent).show("slide", {direction: "left"}, 750); 
        }
       
       activeArticle = newArticle;
   }
   
   $(".navItem1").click(function(){
       changeArticle("1");
   });

   $(".navItem2").click(function(){
       changeArticle("2");
   });

    $(".navItem3").click(function(){
       changeArticle("3");
   });
 
    $(".navItem4").click(function(){
       changeArticle("4");
   });
 
    $(".navItem5").click(function(){
       changeArticle("5");
   });
  
    $(".navItem6").click(function(){
       changeArticle("6");
   });
  
    $(".navItem7").click(function(){
       changeArticle("7");
   });
   

});