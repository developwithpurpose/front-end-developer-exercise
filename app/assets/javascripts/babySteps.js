let babyStepFriendsContainer = document.getElementById("jsonDataContainer")

function getFriends() {
    fetch(`http://localhost:5002/friends`)
        .then(friends => friends.json())
        .then(AllFriends => {
            let babyStep2FriendContainer = document.getElementById("jsonDataContainerStep2")
            let babyStep3FriendContainer = document.getElementById("jsonDataContainerStep3")
            AllFriendsSorted = AllFriends.sort((a, b) => (a.lastName > b.lastName) ? 1 : -1)
            AllFriendsSorted.forEach((friend) => {

                if(friend.babyStep === 2){

                    babyStep2FriendContainer.innerHTML += `<span class="friendName">${friend.firstName} ${friend.lastName}</span> is also in Baby Step 2`
                }
                else if (friend.babyStep === 3){

                    // console.log(friend.sort((a, b) => (a.lastName > b.lastName) ? 1 : -1))

                    let step3HTML = `<span class="friendName">${friend.firstName} ${friend.lastName} </span> and `

                   babyStep3FriendContainer.innerHTML += step3HTML

                }

                else if (friend.babyStep === 4){
                    console.log(friend.firstName)
                }
            });
                    let finalStep3FriendHTML = babyStep3FriendContainer.innerHTML.slice(0, -4)
                    babyStep3FriendContainer.innerHTML = `${finalStep3FriendHTML} are also in Baby Step 3`

        })
}

getFriends()