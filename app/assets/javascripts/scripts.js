
// Function to fetch friends info from .json
let findFriends = (step) => {
    fetch("../../../baby-steps.json")
    .then((response) => response.json())
    .then((response) => {
        let friendsArray = Object.values(response)[0]
        // Find friends on selected step
        let matchingFriends = []
        friendsArray.forEach(friend => {
            if (friend.babyStep === parseInt(step)) {
                matchingFriends.push(friend)
            }
        });
        // Sort matching friends array alphabetically by last name
        matchingFriends.sort((a, b) => (a.lastName > b.lastName) ? 1 : -1)
        return matchingFriends
    })
    .then((matchingFriends) => {
        // Create HTML for friends section
        let html = ""
        // build html string based on array length
        if (matchingFriends.length === 0) {
        } else if (matchingFriends.length === 1) {
            html = `<a>${matchingFriends[0].firstName} ${matchingFriends[0].lastName}</a> is also in Baby Step ${step}`
        } else if (matchingFriends.length === 2) {
            html = `<a>${matchingFriends[0].firstName} ${matchingFriends[0].lastName}</a> and <a>${matchingFriends[1].firstName} ${matchingFriends[1].lastName}</a> are also in Baby Step ${step}`
        } else if (matchingFriends.length > 2) {
            html = `<a>${matchingFriends[0].firstName} ${matchingFriends[0].lastName}</a>, <a>${matchingFriends[1].firstName} ${matchingFriends[1].lastName}</a>, and ${matchingFriends.length - 2} other friends are also in Baby Step ${step}`
        }
        // Select friends section of DOM and print appropriate output
        document.querySelector("#friends").innerHTML = html
    })
}



// Event listener on nav section to allow tab switching
document.querySelector("#nav-tabs").addEventListener("click", (e) => {
    // Find currently active tab and content
    let currentTab = document.querySelector(".active-nav")
    let currentContent = document.querySelector(".active-content")

    // Find selected tab and step number from tab's id
    let selectedTab = e.target
    let stepNumber = selectedTab.id.split("-")[1]

    // Find corresponding content section by id
    let selectedContent = document.querySelector(`#step-${stepNumber}`)

    // Toggle classes to switch active tab and content
    currentTab.classList.toggle("active-nav")
    currentContent.classList.toggle("active-content")
    selectedTab.classList.toggle("active-nav")
    selectedContent.classList.toggle("active-content")

    // Find friends also on selected step and print to DOM
    findFriends(stepNumber)
})