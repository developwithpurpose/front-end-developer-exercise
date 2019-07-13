// import getData from './getData';

const babyStep1Button = document.getElementById("one");
babyStep1Button.addEventListener('click', () => {
        const id = babyStep1Button.getAttribute("id");
        if(id == "one"){
            $("#step-one").show();
            $("#step-two").hide();
            $("#step-three").hide();
            $("#step-four").hide();
            $("#step-five").hide();
            $("#step-six").hide();
            $("#step-seven").hide();
        }
        
})

const babyStep2Button = document.getElementById("two");
babyStep2Button.addEventListener('click', () => {
    const id = babyStep2Button.getAttribute("id");
    if(id == "two"){
        $("#step-two").show();
        $("#step-one").hide();
        $("#step-three").hide();
        $("#step-four").hide();
        $("#step-five").hide();
        $("#step-six").hide();
        $("#step-seven").hide();
    }
    
})

const babyStep3Button = document.getElementById("three");
babyStep3Button.addEventListener('click', () => {
    const id = babyStep3Button.getAttribute("id");
    if(id == "three"){
        $("#step-one").hide();
        $("#step-two").hide();
        $("#step-three").show();
        $("#step-four").hide();
        $("#step-five").hide();
        $("#step-six").hide();
        $("#step-seven").hide();
    }
    
})

const babyStep4Button = document.getElementById("four");
babyStep4Button.addEventListener('click', () => {
    const id = babyStep4Button.getAttribute("id");
    if(id == "four"){
        $("#step-one").hide();
        $("#step-two").hide();
        $("#step-three").hide();
        $("#step-four").show();
        $("#step-five").hide();
        $("#step-six").hide();
        $("#step-seven").hide();
    }
    
})


const babyStep5Button = document.getElementById("five");
babyStep5Button.addEventListener('click', () => {
    const id = babyStep5Button.getAttribute("id");
    if(id == "five"){
        $("#step-one").hide();
        $("#step-two").hide();
        $("#step-three").hide();
        $("#step-four").hide();
        $("#step-five").show();
        $("#step-six").hide();
        $("#step-seven").hide();
    }
    
})

const babyStep6Button = document.getElementById("six");
babyStep6Button.addEventListener('click', () => {
    const id = babyStep6Button.getAttribute("id");
    if(id == "six"){
        $("#step-one").hide();
        $("#step-two").hide();
        $("#step-three").hide();
        $("#step-four").hide();
        $("#step-five").hide();
        $("#step-six").show();
        $("#step-seven").hide();
    }
    
})

const babyStep7Button = document.getElementById("seven");
babyStep7Button.addEventListener('click', () => {
    const id = babyStep7Button.getAttribute("id");
    if(id == "seven"){
        $("#step-one").hide();
        $("#step-two").hide();
        $("#step-three").hide();
        $("#step-four").hide();
        $("#step-five").hide();
        $("#step-six").hide();
        $("#step-seven").show();
    }
    
})

// const friends = () => {
//     getData.getFriendsData().then((data) => {
//         console.log(data.data[0]);
//     })
// }
// friends();