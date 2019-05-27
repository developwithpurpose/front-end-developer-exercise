
// Add event listener to nav section to allow tab switching

document.querySelector("#nav-tabs").addEventListener("click", (e) => {
    // Find currently active tab and content
    let currentTab = document.querySelector(".active-nav")
    let currentContent = document.querySelector(".active-content")

    // Find selected tab and step number from tab's id
    let selectedTab = e.target
    let stepNumber = selectedTab.id.split("-")[1]

    // Find corresponding content section by id
    let selectedContent = document.querySelector(`#step-${stepNumber}`)
    console.log(selectedTab.id.split("-")[1])

    // Toggle classes to switch active tab and content
    currentTab.classList.toggle("active-nav")
    currentContent.classList.toggle("active-content")
    selectedTab.classList.toggle("active-nav")
    selectedContent.classList.toggle("active-content")
})

// Fetch friends info from .json

// Populate DOM with friends on the selected step