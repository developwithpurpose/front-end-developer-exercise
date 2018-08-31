/*$.getJSON( "../app/baby-steps.json", function( data ) {
    var items = [];
    $.each( data, function( firstName, lastName, babyStep:key ) {
      items.push( '<span class="your-friend">'+ firstName + + lastName +'</span> and' + babyStep:key + 'Other Friends are also on this step'  );
    });
   
    $( "<div/>", {
      "class": "step-list",
      html: items.join( "" )
    }).appendTo( ".whos-on-step" );
  });