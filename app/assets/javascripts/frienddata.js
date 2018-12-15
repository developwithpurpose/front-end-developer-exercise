 $(document).ready(function(){
      $("#stepone").click(function(){
        $.getJSON("baby-steps.json", function(data){
                var output="<p>";
            for (var i in data.friends)
                {
                var score = data.friends[i].babyStep;
                    if (score === 6) {
                        counterone++;
                        output+= "<a>" +
                        data.friends[i].firstName +
                        " " +
                        data.friends[i].lastName +
                        "are friend(s) in this step." +
                        "</p>";
                        output+="</a>";
                        document.getElementById("onestepfriend").innerHTML=output;
                        document.getElementById("counterone").innerHTML=counterone; 
                        }
                }   
              counterone = 0; 
            });
          });
      $("#steptwo").click(function(){
        $.getJSON("baby-steps.json", function(data){
                  var friendItems = [];
                  $.each(data.friends, function(index,value){
                    friendItems.push(value);
                  });
                  friendItems.sort(function(a, b){
                      var nameA=a.lastName; 
                      var  nameB=b.lastName;
                      if (nameA < nameB) 
                      return -1 
                        if (nameA > nameB)
                        return 1
                      return 0 
                    })
                  var friendItems = friendItems.filter(function(drstep) {
                      return drstep.babyStep === 2;
                    });
                  var friendStep = [];
                    for (var i = 0; i < friendItems.length; i++) {
                      for (var key in friendItems[i]) {
                        if (friendStep.indexOf(key) === -1) {
                        friendStep.push(key);
                        }  
                      }
                    }
                  var table = document.createElement("table");
                  var tr = table.insertRow(-1);                  
                  for (var i = 0; i < friendItems.length; i++) {
                    tr = table.insertRow(-1);
                    for (var j = 0; j < friendStep.length; j++) {
                    var tabCell = tr.insertCell(-1);
                    tabCell.innerHTML = friendItems[i][friendStep[j]];
                    }
                  }
            var divContainer = document.getElementById("twostepfriend");
            divContainer.innerHTML = "";
            divContainer.appendChild(table);

            });
        });

      $("#stepthree").click(function(){
        $.getJSON("baby-steps.json", function(data){
                  var friendItems = [];
                  $.each(data.friends, function(index,value){
                    friendItems.push(value);
                  });
                  friendItems.sort(function(a, b){
                      var nameA=a.lastName; 
                      var  nameB=b.lastName;
                      if (nameA < nameB) 
                      return -1 
                        if (nameA > nameB)
                        return 1
                      return 0 
                    })
                  var friendItems = friendItems.filter(function(drstep) {
                      return drstep.babyStep === 3;
                    });
                  var friendStep = [];
                    for (var i = 0; i < friendItems.length; i++) {
                      for (var key in friendItems[i]) {
                        if (friendStep.indexOf(key) === -1) {
                        friendStep.push(key);
                        }  
                      }
                    }
                  var table = document.createElement("table");
                  var tr = table.insertRow(-1);                  
                  for (var i = 0; i < friendItems.length; i++) {
                    tr = table.insertRow(-1);
                    for (var j = 0; j < friendStep.length; j++) {
                    var tabCell = tr.insertCell(-1);
                    tabCell.innerHTML = friendItems[i][friendStep[j]];
                    }
                  }
            var divContainer = document.getElementById("threestepfriend");
            divContainer.innerHTML = "";
            divContainer.appendChild(table);

            });
        });
      $("#stepfour").click(function(){
        $.getJSON("baby-steps.json", function(data){
                  var friendItems = [];
                  $.each(data.friends, function(index,value){
                    friendItems.push(value);
                  });
                  friendItems.sort(function(a, b){
                      var nameA=a.lastName; 
                      var  nameB=b.lastName;
                      if (nameA < nameB) 
                      return -1 
                        if (nameA > nameB)
                        return 1
                      return 0 
                    })
                  var friendItems = friendItems.filter(function(drstep) {
                      return drstep.babyStep === 4;
                    });
                  var friendStep = [];
                    for (var i = 0; i < friendItems.length; i++) {
                      for (var key in friendItems[i]) {
                        if (friendStep.indexOf(key) === -1) {
                        friendStep.push(key);
                        }  
                      }
                    }
                  var table = document.createElement("table");
                  var tr = table.insertRow(-1);                  
                  for (var i = 0; i < friendItems.length; i++) {
                    tr = table.insertRow(-1);
                    for (var j = 0; j < friendStep.length; j++) {
                    var tabCell = tr.insertCell(-1);
                    tabCell.innerHTML = friendItems[i][friendStep[j]];
                    }
                  }
            var divContainer = document.getElementById("fourstepfriend");
            divContainer.innerHTML = "";
            divContainer.appendChild(table);

            });
        });

      $("#stepfive").click(function(){
        $.getJSON("baby-steps.json", function(data){
                  var friendItems = [];
                  $.each(data.friends, function(index,value){
                    friendItems.push(value);
                  });
                  friendItems.sort(function(a, b){
                      var nameA=a.lastName; 
                      var  nameB=b.lastName;
                      if (nameA < nameB) 
                      return -1 
                        if (nameA > nameB)
                        return 1
                      return 0 
                    })
                  var friendItems = friendItems.filter(function(drstep) {
                      return drstep.babyStep === 5;
                    });
                  var friendStep = [];
                    for (var i = 0; i < friendItems.length; i++) {
                      for (var key in friendItems[i]) {
                        if (friendStep.indexOf(key) === -1) {
                        friendStep.push(key);
                        }  
                      }
                    }
                  var table = document.createElement("table");
                  var tr = table.insertRow(-1);                  
                  for (var i = 0; i < friendItems.length; i++) {
                    tr = table.insertRow(-1);
                    for (var j = 0; j < friendStep.length; j++) {
                    var tabCell = tr.insertCell(-1);
                    tabCell.innerHTML = friendItems[i][friendStep[j]];
                    }
                  }
            var divContainer = document.getElementById("fivestepfriend");
            divContainer.innerHTML = "";
            divContainer.appendChild(table);
            });
        });
    $("#stepsix").click(function(){
        $.getJSON("baby-steps.json", function(data){
                  var friendItems = [];
                  $.each(data.friends, function(index,value){
                    friendItems.push(value);
                  });
                  friendItems.sort(function(a, b){
                      var nameA=a.lastName; 
                      var  nameB=b.lastName;
                      if (nameA < nameB) 
                      return -1 
                        if (nameA > nameB)
                        return 1
                      return 0 
                    })
                  var friendItems = friendItems.filter(function(drstep) {
                      return drstep.babyStep === 6;
                    });
                  var friendStep = [];
                    for (var i = 0; i < friendItems.length; i++) {
                      for (var key in friendItems[i]) {
                        if (friendStep.indexOf(key) === -1) {
                        friendStep.push(key);
                        }  
                      }
                    }
                  var table = document.createElement("table");
                  var tr = table.insertRow(-1);                  
                  for (var i = 0; i < friendItems.length; i++) {
                    tr = table.insertRow(-1);
                    for (var j = 0; j < friendStep.length; j++) {
                    var tabCell = tr.insertCell(-1);
                    tabCell.innerHTML = friendItems[i][friendStep[j]];
                    }
                  }
            var divContainer = document.getElementById("sixstepfriend");
            divContainer.innerHTML = "";
            divContainer.appendChild(table);
            });
        });
    $("#stepseven").click(function(){
        $.getJSON("baby-steps.json", function(data){
                  var friendItems = [];
                  $.each(data.friends, function(index,value){
                    friendItems.push(value);
                  });
                  friendItems.sort(function(a, b){
                      var nameA=a.lastName; 
                      var  nameB=b.lastName;
                      if (nameA < nameB) 
                      return -1 
                        if (nameA > nameB)
                        return 1
                      return 0 
                    })
                  var friendItems = friendItems.filter(function(drstep) {
                      return drstep.babyStep === 7;
                    });
                  var friendStep = [];
                    for (var i = 0; i < friendItems.length; i++) {
                      for (var key in friendItems[i]) {
                        if (friendStep.indexOf(key) === -1) {
                        friendStep.push(key);
                        }  
                      }
                    }
                  var table = document.createElement("table");
                  var tr = table.insertRow(-1);                  
                  for (var i = 0; i < friendItems.length; i++) {
                    tr = table.insertRow(-1);
                    for (var j = 0; j < friendStep.length; j++) {
                    var tabCell = tr.insertCell(-1);
                    tabCell.innerHTML = friendItems[i][friendStep[j]];
                    }
                  }
            var divContainer = document.getElementById("sevenstepfriend");
            divContainer.innerHTML = "";
            divContainer.appendChild(table);

            });
        });
});


////////////////////testcode///////
              //         $(document).ready(function(){
          //  $("#stepone").click(function(){
          //  $.getJSON("baby-steps.json", function(data){
          //      var output="<p>";
          //  for (var i in data.friends)
            //    {
            //    var score = data.friends[i].babyStep;
               //     if (score === 6) {
                //        counterone++;
                //        output+= "<a>" +
                 ///       data.friends[i].firstName +
                   //     " " +
                   //     data.friends[i].lastName +
                   //     "are friend(s) in this step." +
                   //     "</p>";
                    //    output+="</a>";
                     //   document.getElementById("onestepfriend").in//nerHTML=output;
                      //  document.getElementById("counterone").innerHTML=counterone; 
                      //  }
               // }   
             // counterone = 0; 
         // //  });
         // });