
!function(){

  $(document).ready(function(){
    try {
      var data;
      $.get( "http://localhost:8080/baby-steps.json", function(returnedData){
        data = returnedData
       });
    }
    catch(e){
      console.log(e);
    };

    setIntialStep();
    var currentStep = $('li').find('.active').prevObject[0];
    $('.steps').click(function(){
      if(currentStep !== undefined){
        $(currentStep).removeClass("active");
        $(this).addClass("active");
        changeIcon(this, currentStep)
        changeContent(this)
    };
      if(currentStep !== this){
        currentStep = this;
      };
    });

    function changeIcon(el, cs){
      var rx = /_blue/;
      var src = $(el).children()[1].src;
      if(rx.test(src) !== true){
        var newSource = src.replace(/\.png/, "_blue.png");
        $(el).children()[1].src = newSource;
      };
      var csSrc =  $(cs).children()[1].src;
      var newCsSrc = csSrc.replace(rx, "");
      $(cs).children()[1].src = newCsSrc;
    }

    function changeContent(el){
      var articleText;
      var subText;
      var friendText;
      var stepText = "Baby Step 1";
      var cl = $(el).attr('class');
      var num = cl.slice(11, 12);
      var ss = parseJSON(data.friends, num);


      switch (num) {
          case "1":
              stepText = "Baby Step 1";
              articleText = "Quam viverra orci sagittis eu volutpat odio facilisis. Sit amet consectetur adipiscing elit ut aliquam purus sit amet. Pellentesque elit eget gravida cum sociis natoque. Vestibulum morbi blandit cursus risus at. Cursus vitae congue mauris rhoncus aenean vel. Fringilla urna porttitor rhoncus dolor purus non enim praesent elementum. Cursus turpis massa tincidunt dui ut. Adipiscing commodo elit at imperdiet dui accumsan sit. Nullam vehicula ipsum a arcu cursus vitae congue. Varius quam quisque id diam vel. Sed ullamcorper morbi tincidunt ornare massa eget egestas.";
              subText = "Something about baby step 1";
              friendText = getCount(ss);
              break;
          case "2":
            stepText = "Baby Step 2";
            articleText = "Mauris nunc congue nisi vitae suscipit. Consectetur adipiscing elit duis tristique sollicitudin nibh sit. Nisi quis eleifend quam adipiscing vitae proin sagittis. Nunc sed augue lacus viverra vitae congue eu consequat. Condimentum mattis pellentesque id nibh tortor id aliquet lectus proin. Est ultricies integer quis auctor elit sed vulputate. Id venenatis a condimentum vitae sapien pellentesque habitant morbi. Cras ornare arcu dui vivamus arcu felis bibendum ut tristique. At volutpat diam ut venenatis. Elementum tempus egestas sed sed. Et molestie ac feugiat sed lectus vestibulum."
            subText = "Something about baby step 2";
            friendText = getCount(ss);
              break;
          case "3":
            stepText = "Baby Step 3";
              articleText = "Magna fringilla urna porttitor rhoncus dolor purus non enim praesent. Sit amet tellus cras adipiscing. Orci ac auctor augue mauris augue neque gravida. Dui sapien eget mi proin sed libero enim sed. Augue lacus viverra vitae congue eu consequat. Aliquam etiam erat velit scelerisque in. Senectus et netus et malesuada fames. Porttitor lacus luctus accumsan tortor posuere ac ut consequat semper. A pellentesque sit amet porttitor eget dolor morbi non. Tempus iaculis urna id volutpat lacus.";
              subText = "Something about baby step 3";
              friendText = getCount(ss);
              break;
          case "4":
            stepText = "Baby Step 4";
              articleText = "Nisi porta lorem mollis aliquam. Mauris commodo quis imperdiet massa tincidunt. Tristique risus nec feugiat in fermentum posuere. Dolor sit amet consectetur adipiscing elit pellentesque habitant. Turpis cursus in hac habitasse platea dictumst quisque sagittis purus. Nibh cras pulvinar mattis nunc sed blandit. Pharetra sit amet aliquam id diam. Porta nibh venenatis cras sed. Viverra nibh cras pulvinar mattis nunc sed. Fermentum odio eu feugiat pretium nibh ipsum. Adipiscing elit duis tristique sollicitudin nibh sit amet commodo.";
              subText = "Something about baby step 4";
              friendText = getCount(ss);
              break;
          case "5":
            stepText = "Baby Step 5";
            articleText = "Ut aliquam purus sit amet luctus. Eget nunc lobortis mattis aliquam faucibus purus in massa. Accumsan lacus vel facilisis volutpat est velit egestas. Egestas maecenas pharetra convallis posuere morbi. Euismod in pellentesque massa placerat duis ultricies lacus. Aliquam ultrices sagittis orci a scelerisque purus. Porttitor eget dolor morbi non arcu risus quis. Dui faucibus in ornare quam viverra. Mollis aliquam ut porttitor leo. Nullam eget felis eget nunc lobortis mattis aliquam. Elementum eu facilisis sed odio morbi quis. Viverra ipsum nunc aliquet bibendum enim facilisis gravida. Nulla aliquet enim tortor at auctor urna nunc id cursus. Faucibus pulvinar elementum integer enim. Non arcu risus quis varius quam quisque id.";
            subText = "Something about baby step 5";
            friendText = getCount(ss);
              break;
          case "6":
            stepText = "Baby Step 6";
            articleText = "Quis enim lobortis scelerisque fermentum dui faucibus in. Et malesuada fames ac turpis egestas integer eget aliquet. Nunc pulvinar sapien et ligula ullamcorper malesuada proin libero nunc. Id semper risus in hendrerit gravida. Augue mauris augue neque gravida in fermentum et sollicitudin. Posuere sollicitudin aliquam ultrices sagittis orci a scelerisque. Feugiat pretium nibh ipsum consequat nisl vel pretium lectus quam."
            subText = "Something about step 6 here";
            friendText = getCount(ss);
              break;
          case "7":
            stepText = "Baby Step 7";
            articleText = "Venenatis urna cursus eget nunc scelerisque viverra. Convallis a cras semper auctor neque. Habitant morbi tristique senectus et netus. Dolor morbi non arcu risus quis varius quam quisque. In fermentum et sollicitudin ac orci. Parturient montes nascetur ridiculus mus mauris. Feugiat scelerisque varius morbi enim. Tellus cras adipiscing enim eu turpis egestas pretium. Quam elementum pulvinar etiam non quam lacus suspendisse faucibus interdum. Etiam non quam lacus suspendisse faucibus interdum posuere lorem ipsum.";
            subText = "Something about step 6 here";
            friendText = getCount(ss);
              break;
      };

      $('.content-wrapper').slideUp(700,function(){
        var imgSrc = $('#large-icon').attr('src').replace(/[1-7]/, num);
        $('#large-icon').attr('src', imgSrc);
        $('.step-row h3').text(subText)
        $('.step-row h1').text(stepText)
        $('.main-row p').text(articleText)
        $('.data-content p').text(friendText);
      }).fadeIn(1000, function(){
      });

    };

    function setIntialStep(){
      $('.step-row h3').text("Something about step 1 here")
      $('.step-row h1').text("Baby Step 1");
      $('.data-content p').text("You are on this step by yourself.");
            $('.main-row p').text("Quam viverra orci sagittis eu volutpat odio facilisis. Sit amet consectetur adipiscing elit ut aliquam purus sit amet. Pellentesque elit eget gravida cum sociis natoque. Vestibulum morbi blandit cursus risus at. Cursus vitae congue mauris rhoncus aenean vel. Fringilla urna porttitor rhoncus dolor purus non enim praesent elementum. Cursus turpis massa tincidunt dui ut. Adipiscing commodo elit at imperdiet dui accumsan sit. Nullam vehicula ipsum a arcu cursus vitae congue. Varius quam quisque id diam vel. Sed ullamcorper morbi tincidunt ornare massa eget egestas.");
    };
  });


  function parseJSON(data, num){
    var friends = [];
    for (var i = 0; i < data.length; i++) {
      if (data[i].babyStep == num) {
        friends.push(data[i].firstName + " " + data[i].lastName)
      }
    };
    return friends
  };

  function getCount(friends){
    if(friends.length == 0){
      return "You are on this step by yourself."
    }
    else if(friends.length == 1) {
      return friends[0] + " is on this step too!"
    }
    else if(friends.length == 2) {
      return friends[0] + " and " + friends[1] + " are on this step too!"
    }
    else if(friends.length == 3) {
      return friends[0] + ", " + friends[1] + " and " + (friends.length - 2) +  " other are on this step too!"
    }
    else if(friends.length > 3) {
      return friends[0] + ", " + friends[1] + " and " + (friends.length - 2) +  " others are on this step too!"
    };
  };
}();
