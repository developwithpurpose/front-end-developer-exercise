const url = "baby-steps.json";

fetch(url).then((response) => {
    return response.json();
})
.then((data) => {
    const names = data.friends;

    return names.map((name) => {
        console.log(`Name: ${name.firstName} ${name.lastName} - Baby Step: ${name.babyStep}`);
    })
})