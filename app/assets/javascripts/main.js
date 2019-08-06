$(function () {
    let currentStep = 1;
    friendLoader();
    $(document).on('click', function () {

        console.log(currentStep);
        $('input:radio[name=radio-set]').change(function () {
            currentStep = this.value;
            friendLoader();
        });
    });

    function friendLoader() {
        $.getJSON('./assets/javascripts/baby-steps.json', function (data) {

            let currentFriends = [];
            console.log(currentStep);
            let friendFilter = data.friends.filter(x => x.babyStep == currentStep).sort((a, b) => (a.lastName < b.lastName)
                ? -1
                : a.lastName > b.lastName
                    ? 1
                    : 0);

            console.log(friendFilter);
            friendFilter.map((y, i) =>
                (friendFilter.length == 1)
                    ? currentFriends.push(`${y.firstName} ${y.lastName} is also in Baby Step ${currentStep}`)
                    : (friendFilter.length == 2)
                        ? currentFriends.push(`${y.firstName} ${y.lastName} and ${friendFilter[1].firstName} ${friendFilter[1].lastName} are also in Baby Step  ${currentStep}`)
                        : (friendFilter.length == 3)
                            ? currentFriends.push(`${y.firstName} ${y.lastName} and ${friendFilter[1].firstName} ${friendFilter[1].lastName} and 1 other friend are also in Baby Step  ${currentStep}`)
                            : (friendFilter.length > 3)
                                ? currentFriends.push(`${y.firstName} ${y.lastName}, ${friendFilter[1].firstName} ${friendFilter[1].lastName} and ${currentStep - 2} other friends are also in Baby Step  ${currentStep}`)
                                : '');

            $("span.friends").html(`<p>${(friendFilter.length == 0) ? '' : currentFriends[0]}</p>`);
        });
    }
});