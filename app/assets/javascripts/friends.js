let myRequest = new Request("../baby-steps.json");

fetch(myRequest)
    .then(function(resp){
        return resp.json();
    })
    .then(function(data) {
        console.log(data.friends);
    });
