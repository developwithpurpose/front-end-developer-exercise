function InitAjax() {
    $.ajax({
        url: '../../baby-steps.json',
        type: 'GET',
        datatype: 'json',
        success(res) {
            let friendsList = [];
            $.each(res.friends, function (index, value) {
                if (value.babyStep === 1) {
                    friendsList.push(value)
                }
            })
            let sortedFriends = friendsList.sort(function (a, b) {
                var nameA = a.lastName.toUpperCase();
                var nameB = b.lastName.toUpperCase();
                if (nameA < nameB) {
                    return -1;
                }
                if (nameA > nameB) {
                    return 1;
                }
                return 0;
            })


            if (sortedFriends.length >= 4) {
                $('#friends').html(`<p class="friends-text"><a href=# class="friends-highlighted">${sortedFriends[0].firstName} ${sortedFriends[0].lastName}</a>, <a href=# class="friends-highlighted">${sortedFriends[1].firstName} ${sortedFriends[1].lastName}</a> and ${sortedFriends.length - 2} other friends are also in Baby Step ${sortedFriends[0].babyStep}</p>`)
            } else if (sortedFriends.length >= 3) {
                $('#friends').html(`<p class="friends-text"><a href=# class="friends-highlighted">${sortedFriends[0].firstName} ${sortedFriends[0].lastName}</a>, <a href=# class="friends-highlighted">${sortedFriends[1].firstName} ${sortedFriends[1].lastName}</a> and ${sortedFriends.length - 2} other friend are also in Baby Step ${sortedFriends[0].babyStep}</p>`)
            } else if (sortedFriends.length === 2) {
                $('#friends').html(`<p class="friends-text"><a href=# class="friends-highlighted">${sortedFriends[0].firstName} ${sortedFriends[0].lastName}</a> and <a href=# class="friends-highlighted">${sortedFriends[1].firstName} ${sortedFriends[1].lastName}</a> are also in Baby Step ${sortedFriends[0].babyStep}</p>`)
            } else if (sortedFriends.length === 1) {
                $('#friends').html(`<p class="friends-text"><a href=# class="friends-highlighted">${sortedFriends[0].firstName} ${sortedFriends[0].lastName}</a> is also in Baby Step ${sortedFriends[0].babyStep}</p>`)
            }



        },
        error(err) {
            console.log(err);
        }

    });
}

InitAjax();