$(function () {
    let currentStep = 1;
    friendLoader();
    $(document).on('click', function () {
        $('input:radio[name=radio-set]').change(function () {
            currentStep = this.value;
            friendLoader();
        });
    });

    function friendLoader() {
        $.getJSON('./assets/javascripts/baby-steps.json', function (data) {

            let currentFriends = [];
            let friendFilter = data.friends.filter(x => x.babyStep == currentStep).sort((a, b) => (a.lastName < b.lastName)
                ? -1
                : a.lastName > b.lastName
                    ? 1
                    : 0);

            friendFilter.map((y, i) =>
                (friendFilter.length == 1)
                    ? currentFriends.push(`<span class="blueName">${y.firstName} ${y.lastName}</span> is also in Baby Step ${currentStep}`)
                    : (friendFilter.length == 2)
                        ? currentFriends.push(`<span class="blueName">${y.firstName} ${y.lastName} and ${friendFilter[1].firstName} ${friendFilter[1].lastName}</span> are also in Baby Step  ${currentStep}`)
                        : (friendFilter.length == 3)
                            ? currentFriends.push(`<span class="blueName">${y.firstName} ${y.lastName}</span>, <span class="blueName">${friendFilter[1].firstName} ${friendFilter[1].lastName}</span>, and 1 other friend are also in Baby Step  ${currentStep}`)
                            : (friendFilter.length > 3)
                                ? currentFriends.push(`<span class="blueName">${y.firstName} ${y.lastName}</span>, <span class="blueName">${friendFilter[1].firstName} ${friendFilter[1].lastName}</span>, and ${friendFilter.length - 2} other friends are also in Baby Step  ${currentStep}`)
                                : '');
            $("span.friends").html(`<p class="showFriends">${(friendFilter.length == 0) ? '' : currentFriends[0]}</p>`);
        });
    }
});