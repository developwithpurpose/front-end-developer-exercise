         function getString(index){
         		$.getJSON('../../baby-steps.json', function(jd) {
                var array = [];
                var str = "";
                var count = 0;
                for(var i = 0; i < jd.friends.length; i++){
                    if(jd.friends[i].babyStep === index){
                        array.push('<a href="#" class="blue-people">' + jd.friends[i].firstName + ' '+ jd.friends[i].lastName);
                        count++;
                    }
                }
                for(var q = 0; q < array.length; q++){
                    if(q <3){
                        str = str + array[q]
                        count--;
                        if(q < 2){
                            str = str + ",</a> ";
                        }else{
                            str = str + "</a> ";
                        }
                    }
                }
                var str2 = "";
                if(str.length > "2"){
                	str2 = '<p class="grey-comment">and '+count+' Other Friends on this step<p>';
                }else{
                	str2 = '<p class="grey-comment">' + count+' Other Friends on this step<p>';
                }
                str = str + str2;

                  $('#stage').html(str);
               });
         }

         $(document).ready(function() {
           	

         	  $("#load1").click(function(event){
               	getString(1)
         	  });

         	  $("#load2").click(function(event){
               	getString(2)
         	  });

         	  $("#load3").click(function(event){
               	getString(3)
         	  });

         	  $("#load4").click(function(event){
               	getString(4)
         	  });

         	  $("#load5").click(function(event){
               	getString(5)
         	  });

         	  $("#load6").click(function(event){
               	getString(6)
         	  });

         	  $("#load7").click(function(event){
               	getString(7)
         	  });
       });




