document.body.classList.remove('nojs');

var buttons = document.querySelectorAll('.bSteps-button');

function buttonClick (e) {
    e.preventDefault();

    var buttonActive = document.querySelector('.button-active');
    var targetActive = document.querySelector('.target-in');
    var target = document.querySelector(this.getAttribute('href'));

    if (target.classList.contains('target-in')) {
        return false;
    }
    
    if (buttonActive) {
        buttonActive.classList.remove('button-active');
    }

    if (targetActive) {
        targetActive.classList.remove('target-in');
        targetActive.classList.add('target-out');

        window.setTimeout(function () {
            targetActive.classList.remove('target-out');
        }, 250);
    }

    this.classList.add('button-active');
    target.classList.add('target-in');
}

for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', buttonClick);
}

document.querySelector('[href="#baby_step_1"]').classList.add('button-active');
document.querySelector('#baby_step_1').classList.add('target-in');

jacks().get('baby-steps.json')
    .query('limit', '50')
    .header('Accepts', 'application/json')
    .send(function(data) {
        var response = JSON.parse(data.response);
        var friends = response.friends;
        var sorted = [];

        for (var i = 0; i < 7; i++) {
            sorted[i] = [];
        }

        friends.forEach(function (element) {
            sorted[element.babyStep - 1].push(element);
        });

        sorted.forEach(function(element) {
            var count = element.length;
            var text;

            if (count === 1) {
                text = '<span class="bSteps-name">' + element[0].firstName + ' ' + element[0].lastName + '</span> is also in <span class="bSteps-babystep">Baby Step ' + element[0].babyStep + '</span>';
            } else if (count === 2) {
                text = '<span class="bSteps-name">' + element[0].firstName + ' ' + element[0].lastName + '</span> and <span class="bSteps-name">' + element[1].firstName + ' ' + element[1].lastName + '</span> are also in <span class="bSteps-babystep">Baby Step ' + element[0].babyStep + '</span>';
            } else if (count === 3) {
                text = '<span class="bSteps-name">' + element[0].firstName + ' ' + element[0].lastName + '</span>, <span class="bSteps-name">' + element[1].firstName + ' ' + element[1].lastName + '</span>, and 1 other friend are also in <span class="bSteps-babystep">Baby Step ' + element[0].babyStep + '</span>';
            } else if (count > 3) {
                text = '<span class="bSteps-name">' + element[0].firstName + ' ' + element[0].lastName + '</span>, <span class="bSteps-name">' + element[1].firstName + ' ' + element[1].lastName + '</span>, and ' + (count - 2) + ' other friends are also in <span class="bSteps-babystep">Baby Step ' + element[0].babyStep + '</span>';
            }

            if (count) {
                document.querySelector('#baby_step_' + element[0].babyStep + ' .bSteps-friends').innerHTML = text;
            }
        });

    }, function (error) {
        console.log(error);
    });