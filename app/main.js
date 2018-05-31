let stepSlide = 0;

function findOthers(step){
stepInt=parseInt(step);
fetch("baby-steps.json")
.then((resp) => resp.json())
.then(function(data) {
    let peopleArray = [];
    let countArray = [];
    let stepCount=0;
    for(let i=0;i<data.friends.length;i++){
        let currentFind = data.friends[i].babyStep;
        if(step == currentFind){

            stepCount = stepCount + 1
            peopleArray.push([`${data.friends[i].lastName}`,`${data.friends[i].firstName} ${data.friends[i].lastName}`]);
        }
    }


    for(let z=0;z<8;z++){
        let currentLink = `#link${z}`;
        $(`${currentLink}`).removeClass("active");
        let currentIcon = `#icon${z}`;
        $(`${currentIcon}`).attr('src',`assets/images/icons/individual/icons_small_bs${z}.png`)
    }
    $(`#link${step}`).addClass("active");
    $(`#icon${step}`).attr('src',`assets/images/icons/individual/icons_small_bs${step}_blue.png`)
    slide(stepInt);
    peopleArray.sort();
    if(stepCount === 0 && step){
        $(`#step-foot${step}`).html("");
    }else if(stepCount === 1){
        $(`#step-foot${step}`).html(`<a> ${peopleArray[0][1]}</a> is also in Baby Step ${step}`)
    }else if(stepCount === 2){
        $(`#step-foot${step}`).html(`<a>${peopleArray[0][1]}</a> and <a>${peopleArray[1][1]}</a> are also in Baby Step ${step}`)
    }else if(stepCount === 3){
        $(`#step-foot${step}`).html(`<a>${peopleArray[0][1]}</a>, <a>${peopleArray[1][1]}</a> and 1 other friend are also in Baby Step ${step}`)
    }else if(stepCount === 4){
        $(`#step-foot${step}`).html(`<a>${peopleArray[0][1]}</a>, <a>${peopleArray[1][1]}</a> and 2 other friends are also in Baby Step ${step}`)
    }else if(stepCount === 5){
        $(`#step-foot${step}`).html(`<a>${peopleArray[0][1]}</a>, <a>${peopleArray[1][1]}</a> and 3 other friends are also in Baby Step ${step}`)
    }else if(stepCount === 6){
        $(`#step-foot${step}`).html(`<a>${peopleArray[0][1]}</a>, <a>${peopleArray[1][1]}</a> and 4 other friends are also in Baby Step ${step}`)
    }
})}

function slide(step){  
    if (step > stepSlide){
        for(let i=0;i<step;i++){
        $(`#bs${i}`).slideUp(1000);
        }
        stepSlide = step
    }else if(step < stepSlide){
        for(let i=stepSlide;i>step-1;i--){
            $(`#bs${i}`).slideDown(1000);
        }
        stepSlide = step;
    }

}


$("body").click((element) => {
    let currentStep = element.target.id;
    currentStep = currentStep.slice(4,5);
    findOthers(currentStep);
})




