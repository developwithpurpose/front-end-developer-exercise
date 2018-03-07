function populateFriends(step) {
    $.ajax({
        url: "../../baby-steps.json",
        type: 'get',
        dataType: 'json',
        success: function (data) {
            let dContent = ''
            let friend = data.friends
                .filter((f) => {
                    return f.babyStep === step
                })
                .sort((a, b) => {
                    return a.lastName < b.lastName ? -1 : 1
                })
            switch (friend.length) {
                case 0:
                    break
                case 1:
                    dContent =
                        `<p><a>${friend[0].firstName} ${friend[0].lastName}</a> is also in Baby Step ${friend[0].babyStep}</p>`
                    break

                case 2:
                    dContent =
                        ` <p><a>${friend[0].firstName} ${friend[0].lastName}</a> and <a>${friend[1].firstName} ${friend[1].lastName}</a> are also in Baby Step ${friend[0].babyStep}</p>`
                    break

                default:
                    dContent =
                        `<p><a>${friend[0].firstName} ${friend[0].lastName}</a>, <a>${friend[1].firstName} ${friend[1].lastName}</a>, and ${friend.length - 2} other friends are also in Baby Step ${friend[0].babyStep}</p>`
                    break
            }
            $('.dynamic').html(dContent);
        },
        error: function (e) {
            console.log("error", error)
        }
    })
}

$('a[href^="#"]').on('click', function (e) {
    populateFriends(parseInt(e.target.id))
})