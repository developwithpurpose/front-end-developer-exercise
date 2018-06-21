
$.ajax({
    url: '../../baby-steps.json',
    type: 'GET',
    datatype: 'json',
    success(res) {
        let friendsList = [];
        $.each(res.friends, function (index, value) {
            if (value.babyStep === 4) {
                friendsList.push(value)
            }
        })
        console.log(friendsList);

         
        
    },
    error(err) {
        console.log(err);
    }

});