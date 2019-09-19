var bs1 = [];
var bs2 = [];
var bs3 = [];
var bs4 = [];
var bs5 = [];
var bs6 = [];
var bs7 = [];
var getFriends = function(jsonData) {
    Object.entries(jsonData.friends).forEach(element => {
        if (element[1].babyStep === 1) {
            bs1.push(element[1].firstName + " " + element[1].lastName);
        }
        if (element[1].babyStep === 2) {
            bs2.push(element[1].firstName + " " + element[1].lastName);
        }
        if (element[1].babyStep === 3) {
            bs3.push(element[1].firstName + " " + element[1].lastName);
        }
        if (element[1].babyStep === 4) {
            bs4.push(element[1].firstName + " " + element[1].lastName);
        }
        if (element[1].babyStep === 5) {
            bs5.push(element[1].firstName + " " + element[1].lastName);
        }
        if (element[1].babyStep === 6) {
            bs6.push(element[1].firstName + " " + element[1].lastName);
        }
        if (element[1].babyStep === 7) {
            bs7.push(element[1].firstName + " " + element[1].lastName);
        }
    });

}