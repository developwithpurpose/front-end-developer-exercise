let findFriends = (step) => {
    fetch("../../../baby-steps.json")
    .then((response) => response.json())
    .then((response) => {
        let friendsArray = Object.values(response)[0]
        let matchingFriends = []
        friendsArray.forEach(friend => {
            if (friend.babyStep === parseInt(step)) {
                matchingFriends.push(friend)
            }
        });
        matchingFriends.sort((a, b) => (a.lastName > b.lastName) ? 1 : -1)
        return matchingFriends
    })
    .then((matchingFriends) => {
        let html = ""
        if (matchingFriends.length === 1) {
            html = `<a>${matchingFriends[0].firstName} ${matchingFriends[0].lastName}</a> is also in Baby Step ${step}`
        } else if (matchingFriends.length === 2) {
            html = `<a>${matchingFriends[0].firstName} ${matchingFriends[0].lastName}</a> and <a>${matchingFriends[1].firstName} ${matchingFriends[1].lastName}</a> are also in Baby Step ${step}`
        } else if (matchingFriends.length > 2) {
            html = `<a>${matchingFriends[0].firstName} ${matchingFriends[0].lastName}</a>, <a>${matchingFriends[1].firstName} ${matchingFriends[1].lastName}</a>, and ${matchingFriends.length - 2} other friends are also in Baby Step ${step}`
        }
        document.querySelector("#friends").innerHTML = html
    })
}

// Event listener on nav section to allow tab switching
document.querySelector("#nav-tabs").addEventListener("click", (e) => {
    let currentTab = document.querySelector(".active-nav")
    let currentContent = document.querySelector(".active-content")

    let selectedTab = e.target
    let stepNumber = selectedTab.id.split("-")[1]

    let selectedContent = document.querySelector(`#step-${stepNumber}`)

    currentTab.classList.toggle("active-nav")
    currentContent.classList.toggle("active-content")
    selectedTab.classList.toggle("active-nav")
    selectedContent.classList.toggle("active-content")

    findFriends(stepNumber)
})