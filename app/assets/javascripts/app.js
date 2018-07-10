
$(document).ready(function () {
    $("#nav-link-one").toggleClass('a-focus');
    $("#nav-item-one").toggleClass("li-focus");
});

$(".nav-items").on('click', 'a', function () {
    let items = $('.baby-step-items');
    $(items).toggleClass('fadeIn');
    $(".nav-links").removeClass('a-focus');
    $(this).toggleClass('a-focus');
    $(this.parentElement).toggleClass('li-focus').siblings().removeClass('li-focus');

})

$(document).ready(function () {
    $.ajax({
        url: "../../baby-steps.json",
        success:
            function (result) {
                let friends = result.friends;
                let stepOne = [];
                let stepTwo = [];
                let stepThree = [];
                let stepFour = [];
                let stepFive = [];
                let stepSix = [];
                let stepSeven = [];

                for (let i = 0; i < friends.length; i++) {
                    let friend = friends[i];
                    if (friend.babyStep === 1) {
                        stepOne.push(friend);
                        stepOne.sort(function (a, b) {
                            let nameA = a.lastName.toLowerCase(), nameB = b.lastName.toLowerCase()
                            if (nameA < nameB)
                                return -1
                            if (nameA > nameB)
                                return 1
                            return 0
                        });
                    } else if (friend.babyStep === 2) {
                        stepTwo.push(friend);
                        stepTwo.sort(function (a, b) {
                            let nameA = a.lastName.toLowerCase(), nameB = b.lastName.toLowerCase()
                            if (nameA < nameB)
                                return -1
                            if (nameA > nameB)
                                return 1
                            return 0
                        });
                    } else if (friend.babyStep === 3) {
                        stepThree.push(friend);
                        stepThree.sort(function (a, b) {
                            let nameA = a.lastName.toLowerCase(), nameB = b.lastName.toLowerCase()
                            if (nameA < nameB)
                                return -1
                            if (nameA > nameB)
                                return 1
                            return 0
                        });
                    } else if (friend.babyStep === 4) {
                        stepFour.push(friend);
                        stepFour.sort(function (a, b) {
                            let nameA = a.lastName.toLowerCase(), nameB = b.lastName.toLowerCase()
                            if (nameA < nameB)
                                return -1
                            if (nameA > nameB)
                                return 1
                            return 0
                        });
                    } else if (friend.babyStep === 5) {
                        stepFive.push(friend);
                        stepFive.sort(function (a, b) {
                            let nameA = a.lastName.toLowerCase(), nameB = b.lastName.toLowerCase()
                            if (nameA < nameB)
                                return -1
                            if (nameA > nameB)
                                return 1
                            return 0
                        });
                    } else if (friend.babyStep === 6) {
                        stepSix.push(friend);
                        stepSix.sort(function (a, b) {
                            let nameA = a.lastName.toLowerCase(), nameB = b.lastName.toLowerCase()
                            if (nameA < nameB)
                                return -1
                            if (nameA > nameB)
                                return 1
                            return 0
                        });
                    } else if (friend.babyStep === 7) {
                        stepSeven.push(friend);
                        stepSeven.sort(function (a, b) {
                            let nameA = a.lastName.toLowerCase(), nameB = b.lastName.toLowerCase()
                            if (nameA < nameB)
                                return -1
                            if (nameA > nameB)
                                return 1
                            return 0
                        });
                        stepSeven.sort(function (a, b) {
                            let nameA = a.lastName.toLowerCase(), nameB = b.lastName.toLowerCase()
                            if (nameA < nameB)
                                return -1
                            if (nameA > nameB)
                                return 1
                            return 0
                        });
                    }
                }

                // STEP ONE

                console.log(stepSeven);

                if (stepOne.length === 1) {
                    $('#users-one').append(`<p><a href="#">${stepOne[0].firstName} ${stepOne[0].lastName}</a> is also in baby step 1</p>`);
                } else if (stepOne.length === 2) {
                    $('#users-one').append(`<p><a href="#">${stepOne[0].firstName} ${stepOne[0].lastName}</a> and <a href="#">${stepOne[1].firstName} ${stepOne[1].lastName}</a> are also in baby step 1</p>`);
                } else if (stepOne.length === 3) {
                    $('#users-one').append(`<p><a href="#">${stepOne[0].firstName} ${stepOne[0].lastName}</a>, <a href="#">${stepOne[1].firstName} ${stepOne[1].lastName}</a> and <a href="#">${stepOne.length - 2}</a> other friend are also in baby step 1</p>`);
                } else if (stepOne.length > 3) {
                    $('#users-one').append(`<p><a href="#">${stepOne[0].firstName} ${stepOne[0].lastName}</a>, <a href="#">${stepOne[1].firstName} ${stepOne[1].lastName}</a> and <a href="#">${stepOne.length - 2}</a> other friends are also in baby step 1</p>`);
                }

                // STEP TWO

                if (stepTwo.length === 1) {
                    $('#users-two').append(`<p><a href="#">${stepTwo[0].firstName} ${stepTwo[0].lastName}</a> is also in baby step 2</p>`);
                } else if (stepTwo.length === 2) {
                    $('#users-two').append(`<p><a href="#">${stepTwo[0].firstName} ${stepTwo[0].lastName}</a> and <a href="#">${stepTwo[1].firstName} ${stepTwo[1].lastName}</a> are also in baby step 2</p>`);
                } else if (stepTwo.length === 3) {
                    $('#users-two').append(`<p><a href="#">${stepTwo[0].firstName} ${stepTwo[0].lastName}</a>, <a href="#">${stepTwo[1].firstName} ${stepTwo[1].lastName}</a> and <a href="#">${stepTwo.length - 2}</a> other friendare also in baby step 2</p>`);
                } else if (stepTwo.length > 3) {
                    $('#users-two').append(`<p><a href="#">${stepTwo[0].firstName} ${stepTwo[0].lastName}</a>, <a href="#">${stepTwo[1].firstName} ${stepTwo[1].lastName}</a> and <a href="#">${stepTwo.length - 2}</a> other friends are also in baby step 2</p>`);
                }

                // STEP THREE

                if (stepThree.length === 1) {
                    $('#users-three').append(`<p><a href="#">${stepThree[0].firstName} ${stepThree[0].lastName}</a> is also in baby step 3</p>`);
                } else if (stepThree.length === 2) {
                    $('#users-three').append(`<p><a href="#">${stepThree[0].firstName} ${stepThree[0].lastName}</a> and <a href="#">${stepThree[1].firstName} ${stepThree[1].lastName}</a> are also in baby step 3</p>`);
                } else if (stepThree.length === 3) {
                    $('#users-three').append(`<p><a href="#">${stepThree[0].firstName} ${stepThree[0].lastName}</a>, <a href="#">${stepThree[1].firstName} ${stepThree[1].lastName}</a> and <a href="#">${stepThree.length - 2}</a> other friend are also in baby step 3</p>`);
                } else if (stepThree.length > 3) {
                    $('#users-three').append(`<p><a href="#">${stepThree[0].firstName} ${stepThree[0].lastName}</a>, <a href="#">${stepThree[1].firstName} ${stepThree[1].lastName}</a> and <a href="#">${stepThree.length - 2}</a> other friends are also in baby step 3</p>`);
                }

                // STEP FOUR

                if (stepFour.length === 1) {
                    $('#users-four').append(`<p><a href="#">${stepFour[0].firstName} ${stepFour[0].lastName}</a> is also in baby step 4</p>`);
                } else if (stepFour.length === 2) {
                    $('#users-four').append(`<p><a href="#">${stepFour[0].firstName} ${stepFour[0].lastName}</a> and <a href="#">${stepFour[1].firstName} ${stepFour[1].lastName}</a> are also in baby step 4</p>`);
                } else if (stepFour.length === 3) {
                    $('#users-four').append(`<p><a href="#">${stepFour[0].firstName} ${stepFour[0].lastName}</a>, <a href="#">${stepFour[1].firstName} ${stepFour[1].lastName}</a> and <a href="#">${stepFour.length - 2}</a> other friend are also in baby step 4</p>`);
                } else if (stepFour.length > 3) {
                    $('#users-four').append(`<p><a href="#">${stepFour[0].firstName} ${stepFour[0].lastName}</a>, <a href="#">${stepFour[1].firstName} ${stepFour[1].lastName},</a> and <a href="#">${stepFour.length - 2}</a> other friends are also in baby step 4</p>`);
                }

                // STEP FIVE

                if (stepFive.length === 1) {
                    $('#users-five').append(`<p><a href="#">${stepFive[0].firstName} ${stepFive[0].lastName}</a> is also in baby step 5</p>`);
                } else if (stepFive.length === 2) {
                    $('#users-five').append(`<p><a href="#">${stepFive[0].firstName} ${stepFive[0].lastName}</a> and <a href="#">${stepFive[1].firstName} ${stepFive[1].lastName}</a> are also in baby step 5</p>`);
                } else if (stepFive.length === 3) {
                    $('#users-five').append(`<p><a href="#">${stepFive[0].firstName} ${stepFive[0].lastName}</a>, <a href="#">${stepFive[1].firstName} ${stepFive[1].lastName}</a> and <a href="#">${stepFive.length - 2}</a> other friend are also in baby step 5</p>`);
                } else if (stepFive.length > 3) {
                    $('#users-five').append(`<p><a href="#">${stepFive[0].firstName} ${stepFive[0].lastName}</a>, <a href="#">${stepFive[1].firstName} ${stepFive[1].lastName}</a> and <a href="#">${stepFive.length - 2}</a> other friends are also in baby step 5</p>`);
                }

                // STEP SIX

                if (stepSix.length === 1) {
                    $('#users-six').append(`<p><a href="#">${stepSix[0].firstName} ${stepSix[0].lastName}</a> is also in baby step 6</p>`);
                } else if (stepSix.length === 2) {
                    $('#users-six').append(`<p><a href="#">${stepSix[0].firstName} ${stepSix[0].lastName}</a> and <a href="#">${stepSix[1].firstName} ${stepSix[1].lastName}</a> are also in baby step 6</p>`);
                } else if (stepSix.length === 3) {
                    $('#users-six').append(`<p><a href="#">${stepSix[0].firstName} ${stepSix[0].lastName}</a>, <a href="#">${stepSix[1].firstName} ${stepSix[1].lastName}</a> and <a href="#">${stepSix.length - 2}</a> other friend are also in baby step 6</p>`);
                } else if (stepSix.length > 3) {
                    $('#users-six').append(`<p><a href="#">${stepSix[0].firstName} ${stepSix[0].lastName}</a>, <a href="#">${stepSix[1].firstName} ${stepSix[1].lastName}</a> and <a href="#">${stepSix.length - 2}</a> other friends are also in baby step 6</p>`);
                }

                // STEP SEVEN

                if (stepSeven.length === 1) {
                    $('#users-seven').append(`<p><a href="#">${stepSeven[0].firstName} ${stepSeven[0].lastName}</a> is also in baby step 7</p>`);
                } else if (stepSeven.length === 2) {
                    $('#users-seven').append(`<p><a href="#">${stepSeven[0].firstName} ${stepSeven[0].lastName}</a> and <a href="#">${stepSeven[1].firstName} ${stepSeven[1].lastName}</a> are also in baby step 7</p>`);
                } else if (stepSeven.length === 3) {
                    $('#users-seven').append(`<p><a href="#">${stepSeven[0].firstName} ${stepSeven[0].lastName}</a>, <a href="#">${stepSeven[1].firstName} ${stepSeven[1].lastName}</a> and <a href="#">${stepSeven.length - 2}</a> other friend are also in baby step 7</p>`);
                } else if (stepSeven.length > 3) {
                    $('#users-seven').append(`<p><a href="#">${stepSeven[0].firstName} ${stepSeven[0].lastName}</a>, <a href="#">${stepSeven[1].firstName} ${stepSeven[1].lastName}</a> and <a href="#">${stepSeven.length - 2}</a> other friends are also in baby step 7</p>`);
                }
            }
    });
});