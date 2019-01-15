class Person {
    constructor(firstName, lastName, step) {
        this.firstName = firstName
        this.lastName = lastName
        this.step = step
    }

    getFullName() {
        return this.firstName + " " + this.lastName
    }
}

class BabySteps {
    constructor(maxStep) {
        this.steps = new Map()
        // Default initialize our steps with an empty array
        for (let i = 1; i <= maxStep; i++) {
            this.steps.set(i, [])
        }
    }

    addPerson (person)  {
        this.steps.get(person.step).push(person)
    }

    getStep(step) {
        return this.steps.get(step)
    }

}

let steps = new BabySteps(7)

$.ajax({
    url: "babysteps",
    method: 'GET',
    success: (res) =>{
        // Populate our BabySteps object with each friend
        res.friends.forEach(rawFriend => {
            const friend = new Person(rawFriend.firstName, rawFriend.lastName, rawFriend.babyStep)

            steps.addPerson(friend) 
        });

    },
    error: (res) => {
        console.log("ERROR: " + JSON.stringify(res))
    } 
})

