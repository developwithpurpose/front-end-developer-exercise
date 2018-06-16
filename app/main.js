          function getFriends() {
              var xhr = new XMLHttpRequest();
              xhr.onreadystatechange = function () {
                  if (xhr.readyState === 4) {
                      document.getElementById('ajax').innerHTML = xhr.responseText;
                    }
                  };
                  xhr.open('GET', './baby-steps.json');
                  xhr.send();
                  const resultses = document.querySelectorAll('#results');
                  [...resultses].forEach(el => el.innerHTML = '<p>Test Content</p>');
                }
                
              function init() {
                    getFriends();
                  
                    // console.log()
                  }
                  
                  (function() {
                      init();
                    })();
                    
                  function show(id, color, num) {
                      var content = document.getElementsByClassName("right");
                      var option = document.getElementsByClassName("options");
                      
                      var o;
                      for (o = 0; o < option.length; o++) {
                        option[o].style.background = "linear-gradient(to right, #ebeced , #d1d5d6)";
                        option[o].style.color = "#9ba0a4";
                      }
                      var currentSide = document.getElementById(color).style;
                      currentSide.background = "white";
                      currentSide.color = "#36abe1";
                      var c;
                      for (c = 0; c < content.length; c++) {
                        content[c].style.display = "none";
                      }
                      var element = (document.getElementById(id).style.display = "block");
                      
                      var greyIcons = document.getElementsByClassName("option-icon_grey");
                      var blueIcons = document.getElementsByClassName("option-icon_blue");
                      var i;
                      for (i = 0; i < greyIcons.length; i++) {
                        greyIcons[i].style.display = "block";
                        blueIcons[i].style.display = "none";
                      }
                      var currentGreyIcon = document.getElementById("icon-grey" + num);
                      currentGreyIcon.style.display = "none";
                      var currentBlueIcon = document.getElementById("icon-blue" + num);
                      currentBlueIcon.style.display = "block";
                      
                      function parseFriends() {
                        var resultsContainer = $("#results");
                        $.each(friends, function (index, value) {
                          resultsContainer.append(
                            "<p>step: " +
                            index +
                            ", firstName: " +
                            value.firstName +
                            ", lastName: " +
                            value.lastName +
                            ", babyStep: " +
                            value.babyStep +
                            "</p>"
                          );
                        });
                      }
}