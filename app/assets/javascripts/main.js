//BabySteps

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

    addFriend (person)  {
        this.steps.get(person.step).push(person)
    }

    getFriendsByStep(step) {
        return this.steps.get(step)
    }
}

const babyStepList = [
    {
        goal: "<img class = hdrImg src = images/headings/heading_bs1.png>  ",
        description: `An emergency fund is for those unexpected events in life that you can’t plan for: the loss of a job, an unexpected pregnancy, a faulty car transmission, and the list goes on and on. 
        <br>
        <br>
        It’s not a matter of if these events will happen; it’s simply a matter of when they will happen. This beginning emergency fund will keep life’s little Murphies from turning into new debt while you work off the old debt. If a real emergency happens, you can handle it with your emergency fund. No more borrowing. It’s time to break the cycle of debt!`
    }, 
    {
        goal: "<img class = hdrImg src = images/headings/heading_bs2.png>", 
        description: `List your debts, excluding the house, in order. The smallest balance should be your number one priority. Don’t worry about interest rates unless two debts have similar payoffs. If that’s the case, then list the higher interest rate debt first.
        <br>
        <br>
        The point of the debt snowball is simply this: You need some quick wins in order to stay pumped up about getting out of debt! Paying off debt is not always about math. It’s about motivation. Personal finance is 20% head knowledge and 80% behavior. When you start knocking off the easier debts, you will see results and you will stay motivated to dump your debt.`
    },
    {
        goal: "<img class = hdrImg src = images/headings/heading_bs3.png>", 
        description: `Once you complete the first two baby steps, you will have built serious momentum. But don’t start throwing all your “extra” money into investments quite yet. It’s time to build your full emergency fund. Ask yourself, “What would it take for me to live for three to six months if I lost my income?” Your answer to that question is how much you should save.
        <br>
        <br>
        Use this money for emergencies only: incidents that would have a major impact on you and your family. Keep these savings in a money market account. Remember, this stash of money is not an investment; it is insurance you’re paying to yourself, a buffer between you and life.`
    },
    {
        goal: "<img class = hdrImg src = images/headings/heading_bs4.png>", 
        description: `When you reach this step, you’ll have no payments—except the house—and a fully funded emergency fund. Now it’s time to get serious about building wealth.
        <br>
        <br>
        Dave suggests investing 15% of your household income into Roth IRAs and pre-tax retirement plans. Don’t invest more than that because the extra money will help you complete the next two steps: college savings and paying off your home early.`
    },
    {
        goal: "<img class = hdrImg src = images/headings/heading_bs5.png>", 
        description: `By this point, you should have already started Baby Step 4—investing 15% of your income—before saving for college. Whether you are saving for you or your child to go to college, you need to start now.
        <br>
        <br>
        In order to have enough money saved for college, you need to have a goal. Determine how much per month you should be saving at 12% interest in order to have enough for college. If you save at 12% and inflation is at 4%, then you are moving ahead of inflation at a net of 8% per year!`
    },
    { 
        goal: "<img class = hdrImg src = images/headings/heading_bs6.png>", 
        description: `Now it’s time to begin chunking all of your extra money toward the mortgage. You are getting closer to realizing the dream of a life with no house payments.
        <br>
        <br>
        As you attack this last debt, you will gain momentum much like you did back in the second step of the debt snowball. Remember, having absolutely no payments is totally within your reach!`
    },
    { 
        goal: "<img class = hdrImg src = images/headings/heading_bs7.png>", 
        description: `It’s time to build wealth and give like never before. Leave an inheritance for future generations, and bless others now with your excess. It's really the only way to live!
        <br>
        <br>
        Golda Meir says, “You can’t shake hands with a clenched fist.” Vow to never hold your money so tightly that you never give any away. Hoarding money is not the way to wealth. Save for yourself, save for your family’s future, and be gracious enough to bless others. You can do all three at the same time.
        `
    },
]


const steps = new BabySteps(7)

$.ajax({
    url: "babysteps",
    method: 'GET',
    success: (res) =>{
        // Populate our BabySteps object with each friend
        res.friends.map(rawFriend => {
            const friend = new Person(rawFriend.firstName, rawFriend.lastName, rawFriend.babyStep)

            steps.addFriend(friend) 
        });
        initPage()
    },
    error: (res) => {
        console.error("ERROR: " + JSON.stringify(res))
    } 
})

let images = [""]

initPage = () => {

    $("#babyStepName").empty()
    $("#babyStepGoal").empty()
    $("#babyStepDesc").empty()
    $("#babyStepName").append(babyStepList[0].name)
    $("#babyStepGoal").append(babyStepList[0].goal)
    $("#babyStepDesc").append(babyStepList[0].description)

    for(let i = 1; i <= 7; i++){
        $(`#step${i}`).on('click', (e) => {
            e.preventDefault()
            
            $("#babyStepName").empty()
            $("#babyStepGoal").empty()
            $("#babyStepDesc").empty()

            for(let j = 1; j <= 7; j++){
                $(`#step${j}`).css('color', '#9ba0a4');
                $(`#step${j}`).css( 'background-image',
                'linear-gradient(to right, #ebebeb, #d1d4d6)');

            }
            
            $(`#step${i}`).css('background', 'white');
            $(`#step${i}`).css('color', ' #6fbee7');
            
            $("#babyStepName").append(babyStepList[i - 1].name)
            $("#babyStepGoal").append(babyStepList[i - 1].goal)
            $("#babyStepDesc").append(babyStepList[i - 1].description)
            
            // Friend List
            const friends = steps.getFriendsByStep(i)

            $("#friendList").empty()

            if(friends.length === 1){
                const name = friends[0].getFullName()
                $("#friendList").append(`<span class = "names"> ${name} </span> is also in Baby Step ${i}`)
            } else if (friends.length === 2){
                const name1 = friends[0].getFullName()
                const name2 = friends[1].getFullName()

                $("#friendList").append(`<span class = "names">${name1} </span> and <span class = "names"> ${name2} </span> are also in Baby Step ${i}`)
            } else if (friends.length === 3){
                const name1 = friends[0].getFullName()
                const name2 = friends[1].getFullName()

                $("#friendList")
                    .append(`<span class = "names"> ${name1}, ${name2}, </span> and 1 other are also in Baby Step ${i}`)
            } else if (friends.length >= 4) {
                const name1 = friends[0].getFullName()
                const name2 = friends[1].getFullName()
                const remaining = (friends.length - 2).toString()

                $("#friendList")
                    .append(`<span class = "names"> ${name1}, ${name2}, </span> and ${remaining} Other Friends are also in Baby Step ${i}`)
            }
        })
    }
}
