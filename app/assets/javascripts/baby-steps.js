function parseData(data) {
    const parsedResult = {}
    for (let i=0; i<data.length; i++) {
        if (parsedResult[data[i].babyStep]) {
            parsedResult[data[i].babyStep].push(data[i]);
        } else {
            parsedResult[data[i].babyStep] = [data[i]];
        }
    }

    return parsedResult;
}

function instertDynamicContent(dynamicData) {
    $(".step").each(function() {
        const index = $(this).index()+1;
        if (dynamicData[index]) {
            let data = dynamicData[index];
            data = data.sort(function(a, b) {
                if (a.lastName < b.lastName) {
                    return -1;
                } else if (a.lastName > b.lastName) {
                    return 1;
                } else 
                    return 0;
            });
            switch (data.length) {
                case 1:
                    $(this).append("<p>"+"<a>"+data[0].firstName + " " + data[0].lastName+"</a>" + " is also in Baby Step " + index+"</p>");
                    break;
                case 2:
                    $(this).append("<p><a>"+data[0].firstName + " " + data[0].lastName+"</a>" + " and " + "<a>" +data[1].firstName + " " + data[1].lastName+ "</a>" + " are also in Baby Step " + index+"</p>")
                    break;
                case 3:
                    $(this).append("<p><a>"+data[0].firstName + " " + data[0].lastName+"</a>" + " and " + "<a>" +data[1].firstName + " " + data[1].lastName+ "</a>" + " and 1 other friend are also in Baby Step " + index+"</p>")
                    break;
                default:
                    $(this).append("<p><a>"+data[0].firstName + " " + data[0].lastName+"</a>" + " and " + "<a>" +data[1].firstName + " " + data[1].lastName+ "</a>" + " and " + (data.length - 2) + "other friends are also in Baby Step " + index+"</p>")
                    break;
            }
        }
    })
}

$(document).ready(function(){
    $.get("/baby-steps.json", function(data) {
        const insertObject = parseData(data.friends);
        instertDynamicContent(insertObject)
    })
    $("button").click(function() {
        const index = $(this).index()+1;
        // $(".button-img").each(function (otherIndex) {
        //     if (otherIndex + 1 !== index) {
                
        //     }
        // })
        $(".step-" + index).animatescroll({element: "section" });
    })
 });