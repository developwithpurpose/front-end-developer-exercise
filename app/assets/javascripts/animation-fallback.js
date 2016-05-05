(function () {

    "use strict";

    $("img.kitten")
        .animate({ width:   300 }, 1000)  // Animate to 300px wide
        .animate({ width:    50 }, 2000)  // Then, to 50px wide
        .animate({ opacity: .25 }, 1000); // Then, make it semi-transparent

       console.log("IE 9 Support");

}());