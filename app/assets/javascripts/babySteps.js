let babyStepFriendsContainer = document.getElementById("jsonDataContainer")

function getFriends() {
    fetch(`http://localhost:5002/friends`)
        .then(friends => friends.json())
        .then(AllFriends => {
            let babyStep2FriendContainer = document.getElementById("jsonDataContainerStep2")
            let babyStep3FriendContainer = document.getElementById("jsonDataContainerStep3")
            let babyStep4FriendContainer = document.getElementById("jsonDataContainerStep4")
            let babyStep4Friends = []
            let babyStep5FriendContainer = document.getElementById("jsonDataContainerStep5")
            let babyStep5Friends = []
            let babyStep6FriendContainer = document.getElementById("jsonDataContainerStep6")
            let babyStep6Friends = []
            let babyStep7FriendContainer = document.getElementById("jsonDataContainerStep7")
            let babyStep7Friends = []
            AllFriendsSorted = AllFriends.sort((a, b) => (a.lastName > b.lastName) ? 1 : -1)
            AllFriendsSorted.forEach((friend) => {

                if(friend.babyStep === 2){

                    babyStep2FriendContainer.innerHTML += `<span class="friendName">${friend.firstName} ${friend.lastName}</span> is also in Baby Step 2`
                }
                else if (friend.babyStep === 3){

                    let step3HTML = `<span class="friendName">${friend.firstName} ${friend.lastName} </span> and `

                   babyStep3FriendContainer.innerHTML += step3HTML

                }

                else if (friend.babyStep === 4){

                    babyStep4Friends.push(friend)

                }

                else if (friend.babyStep === 5){

                    babyStep5Friends.push(friend)

                }

                else if (friend.babyStep === 6){

                    babyStep6Friends.push(friend)

                }
                else{

                    babyStep7Friends.push(friend)

                }
            });
                    let finalStep3FriendHTML = babyStep3FriendContainer.innerHTML.slice(0, -4)
                    babyStep3FriendContainer.innerHTML = `${finalStep3FriendHTML} are also in Baby Step 3`

                    let top2Step4 = babyStep4Friends.slice(0,2)

                    babyStep4FriendContainer.innerHTML = `<span class="friendName">${top2Step4[0].firstName} ${top2Step4[0].lastName}</span>, <span class="friendName">${top2Step4[1].firstName} ${top2Step4[1].lastName}</span>, and 1 other friend are also in Baby Step 4`

                    let top2Step5 = babyStep5Friends.slice(0,2)

                    babyStep5FriendContainer.innerHTML = `<span class="friendName">${top2Step5[0].firstName} ${top2Step5[0].lastName}</span>, <span class="friendName">${top2Step5[1].firstName} ${top2Step5[1].lastName}</span>, and 2 other friends are also in Baby Step 5`

                    let top2Step6 = babyStep6Friends.slice(0,2)

                    babyStep6FriendContainer.innerHTML = `<span class="friendName">${top2Step6[0].firstName} ${top2Step6[0].lastName}</span>, <span class="friendName">${top2Step6[1].firstName} ${top2Step6[1].lastName}</span>, and 3 other friends are also in Baby Step 6`

                    let top2Step7 = babyStep7Friends.slice(0,2)

                    babyStep7FriendContainer.innerHTML = `<span class="friendName">${top2Step7[0].firstName} ${top2Step7[0].lastName}</span>, <span class="friendName">${top2Step7[1].firstName} ${top2Step7[1].lastName}</span>, and 4 other friends are also in Baby Step 7`
        })
}

getFriends()