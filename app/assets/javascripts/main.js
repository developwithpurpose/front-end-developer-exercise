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

            let friendData = data.friends.filter(x => x.babyStep == currentStep).map((x, i) =>
                (data.friends.filter(x => x.babyStep == currentStep).length == 1)
                    ? currentFriends.push(`${x.firstName} ${x.lastName} is also in Baby Step ${currentStep}`)
                    : (data.friends.filter(x => x.babyStep == currentStep).length == 2)
                        ? currentFriends.push(`${x.firstName} ${x.lastName} and ${data.friends[i + 2].firstName} ${data.friends[i + 2].lastName} are also in Baby Step  ${currentStep}`)
                        : (data.friends.filter(x => x.babyStep == currentStep).length == 3)
                            ? currentFriends.push(`${x.firstName} ${x.lastName} and ${data.friends[i + 2].firstName} ${data.friends[i + 2].lastName} and 1 other friend are also in Baby Step  ${currentStep}`)
                            : (data.friends.filter(x => x.babyStep == currentStep).length > 3)
                                ? currentFriends.push(`${x.firstName} ${x.lastName} and ${data.friends[i + 2].firstName} ${data.friends[i + 2].lastName} and ${data.friends.filter(x => x.babyStep == currentStep).length - 1} other friends are also in Baby Step  ${currentStep}`)
                                : '');

            console.log(currentFriends);
            //console.log(friendData);
            console.log(friendData.length);
            //console.log(data.friends.map([]))

            $("span.friends").html(`<p>${(friendData.length == 0) ? '' : currentFriends[0]}</p>`);
        });
    }
});