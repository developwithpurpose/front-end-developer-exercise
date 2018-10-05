const getFriends = () => {
    return $.ajax({
        url: "./baby-steps.json"
    })
}

const getFriendName = friend => {
    return `${friend.firstName} ${friend.lastName}`
}

const generateFriendString = (friendsArray, currentStep) => {
    friendsOnCurrentStep = friendsArray.filter(friend => friend.babyStep === currentStep)
    if (friendsOnCurrentStep.length === 0) return ""

    const friendOverflow = friendsOnCurrentStep.length - 2
    let str = ""

    switch(friendsOnCurrentStep.length) {
        case 1:
            str = `${getFriendName(friendsOnCurrentStep[0])} is also in Baby Step ${currentStep}`
            break;
        case 2:
            str = `${getFriendName(friendsOnCurrentStep[0])} and ${getFriendName(friendsOnCurrentStep[1])} are also in Baby Step ${currentStep}`
            break;
        default:
            str = `${getFriendName(friendsOnCurrentStep[0])}, ${getFriendName(friendsOnCurrentStep[1])} and ${friendOverflow} other friend${friendOverflow > 1 ? 's' : ''} are also in Baby Step ${currentStep}`
    }
    return str
}

const appendFriendInfo = (string, step) => {
    $(`#step-${step}`).append(
        `
            <p>${string}</p>
        `
    )
}

$(document).ready(() => {
    getFriends()
        .then(response => {
            const friends = response.friends
            for (let i = 1; i <= 7; i++) {
                appendFriendInfo(generateFriendString(friends, i), i)
            }
        })
})