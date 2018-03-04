let friendArray = []
$.ajax({
    url: "../../baby-steps.json",
    type: 'get',
    dataType: 'json',
    success: function (data) {
        $.each(data.friends, function (index, item) {
            friendArray.push(item)
        });
        friendArray.sort(function (a, b) {
            let nameA = a.lastName.toUpperCase()
            let nameB = b.lastName.toUpperCase()
            if (nameA < nameB) {
                return -1
            }
            if (nameA > nameB) {
                return 1
            }
            return 0
        });
    },
    error: function (e) {
        console.log("error", error)
    }
});


$('a[href^="#"]').on('click', function (e) {
    if ($("a[href~='two']")) {
        let friend = friendArray.filter(f => f.babyStep === 2)
        friend.forEach(function (f) {
            two.innerHTML =
                `
   <p><a>${f.firstName} ${f.lastName}</a> is also in Baby Step ${f.babyStep}</p>
   `
        })
    }
    if ($("a[href~='three']")) {
        let friend = friendArray.filter(f => f.babyStep === 3)
        three.innerHTML =
            `
   <p><a>${friend[0].firstName} ${friend[0].lastName}</a> and <a>${friend[1].firstName} ${friend[1].lastName}</a> are also in Baby Step ${friend[0].babyStep}</p>
   `
    }
    if ($("a[href~='four']")) {
        let friend = friendArray.filter(f => f.babyStep === 4)
        four.innerHTML =
            `
   <p><a>${friend[0].firstName} ${friend[0].lastName}</a>, <a>${friend[1].firstName} ${friend[1].lastName}</a>, and ${friend.length - 2} other friend are also in Baby Step ${friend[0].babyStep}</p>
   `
    }
    if ($("a[href~='five']")) {
        let friend = friendArray.filter(f => f.babyStep === 5)
        five.innerHTML =
            `
   <p><a>${friend[0].firstName} ${friend[0].lastName}</a>, <a>${friend[1].firstName} ${friend[1].lastName}</a>, and ${friend.length - 2} other friends are also in Baby Step ${friend[0].babyStep}</p>
   `
    }
    if ($("a[href~='six']")) {
        let friend = friendArray.filter(f => f.babyStep === 6)
        six.innerHTML =
            `
   <p><a>${friend[0].firstName} ${friend[0].lastName}</a>, <a>${friend[1].firstName} ${friend[1].lastName}</a>, and ${friend.length - 2} other friends are also in Baby Step ${friend[0].babyStep}</p>
   `
    }
    if ($("a[href~='seven']")) {
        let friend = friendArray.filter(f => f.babyStep === 7)
        seven.innerHTML =
            `
   <p><a>${friend[0].firstName} ${friend[0].lastName}</a>, <a>${friend[1].firstName} ${friend[1].lastName}</a>, and ${friend.length - 2} other friends are also in Baby Step ${friend[0].babyStep}</p>
   `
    }
});