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

    addPerson (step, person)  {
        this.steps.get(step).push(person)
    }

    getStep(step) {
        return this.steps.get(step)
    }
}

let steps = new BabySteps()

$.ajax({
    url: "babysteps",
    method: 'GET',
    success: (res) =>{
        // Populate our BabySteps object with each friend
        res.friends.forEach(raw_friend => {
            const friend = new Person(raw_friend.firstName, raw_friend.lastName, raw_friend.babyStep)

            steps.addPerson(raw_friend.babyStep, friend) 
        });

    },
    error: (res) => {
        console.log("ERROR: " + JSON.stringify(res))
    } 
})

