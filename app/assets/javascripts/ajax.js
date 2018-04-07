var friends = [];
var ajax_get = function (url) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.onload = function () {
        if (xhr.status === 200) {
            friends = JSON.parse(xhr.responseText);
            console.log("JSON returned: ", friends.friends);
        } else {
            alert('Request failed.  Returned status of ' + xhr.status);
        }
    };
    xhr.send();
}
