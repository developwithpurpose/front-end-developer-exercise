$(function () {
    //console.log("ready!");
    let currentStep = 1;
    friendLoader();
    $(document).on('click', function () {

        console.log(currentStep);
        $('input:radio[name=radio-set]').change(function () {
            currentStep = this.value;
            //console.log(currentStep);
            // do stuff with currentStep
            //Load JSON from 'baby-steps.json'
            friendLoader();
        });
    });
    //Establish first button, and determine active radio button

    function friendLoader() {
        $.getJSON('./assets/javascripts/baby-steps.json', function (data) {
            //console.log(data);
            console.log(currentStep);
            //console.log(data.friends[currentStep - 1]);
            let currentFriends = [];
            let friendData = data.friends.filter(x => x.babyStep == currentStep);
            //console.log(friendData);
            console.log(friendData.length);
            //console.log(data.friends.map([]))

            $("span.friends").html(`<p>${(friendData.length == 0) ? '' : (JSON.stringify(friendData))}</p>`);
        });
    }
});