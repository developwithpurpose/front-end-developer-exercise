let babyStepFriendsContainer = document.getElementById("jsonDataContainer")

function getFriends() {
    fetch(`http://localhost:5002/friends`)
        .then(friends => friends.json())
        .then(AllFriends => {
            AllFriends.forEach(friend => {
                console.log(friend.firstName)
            });
        })
}