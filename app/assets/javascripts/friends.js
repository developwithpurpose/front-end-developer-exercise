// let myRequest = new Request("./../baby-steps.json");
//
// fetch(myRequest)
//     .then(function(resp){
//         return resp.json();
//     })
//     .then(function(data) {
//         console.log(data.friends[3].firstName);
//     });

$(function () {
    $.ajax ({
        type: 'GET',
        url: '../../baby-steps.json',
        success: function () {
            console.log('success', data);
        }
    });
})
