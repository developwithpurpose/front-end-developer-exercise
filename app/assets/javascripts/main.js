/*------------------------------------------------
					Show Baby Steps
------------------------------------------------*/
var maxPrompts=7;
function HideAll()
{
   for( var j = 1; j <= maxPrompts; j++ )
   {
       $("#step" + j).hide();
   }
}

/*------------------------------------------------
					Active Tab
------------------------------------------------*/
$(document).ready(function(){
    $("a").click(function(){
        $(this).addClass("active");
    });
});
$("a").click(function ( e ) {
    e.preventDefault();
    $("a.active").removeClass("active");
    $("a", this).addClass("active"); //Add "active" class to selected tab  
    var aClicked = e.target.getAttribute("class");
    HideAll();
    $("#" + aClicked).show();
});

