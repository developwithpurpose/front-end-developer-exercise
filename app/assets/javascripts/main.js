// friend zone
const getData = () => {
  fetch('../../baby-steps.json', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then(response => {
      if (response.status !== 200) {
        console.log(
          'Looks like there was an unexpected response. Status Code: ' +
          response.status
        );
        return;
      }
      response.json().then(
        (r = data => {
          dom(data);
        })
      );
    })
    .catch(function (err) {
      console.log('Fetch Error, check the function: ', err);
    });
};
getData();

const dom = (response, divisions) => {
  const friends = response.friends,
    stepOne = [],
    stepTwo = [],
    stepThree = [],
    stepFour = [],
    stepFive = [],
    stepSix = [],
    stepSeven = [];
    divisions = [stepOne, stepTwo, stepThree, stepFour, stepFive, stepSix, stepSeven];

  friends.forEach(x => {
    if (x.babyStep === 1) {
      stepOne.push(x);
    } else if (x.babyStep === 2) {
      stepTwo.push(x);
    } else if (x.babyStep === 3) {
      stepThree.push(x);
    } else if (x.babyStep === 4) {
      stepFour.push(x);
    } else if (x.babyStep === 5) {
      stepFive.push(x);
    } else if (x.babyStep === 6) {
      stepSix.push(x);
    } else if (x.babyStep === 7) {
      stepSeven.push(x);
    } else {
      return console.log(
        "Error occurred parsing friends' current steps: " +
        x.babyStep +
        ' has no matching div.'
      );
    }
  });
  pushToDivs(divisions)
};

const pushToDivs = divisions => {
  divisions.forEach(friendArray => {
    friendArray.forEach(currentFriend => {
      const string = `${currentFriend.firstName} ${currentFriend.lastName} is on step ${currentFriend.babyStep}`;
      
    })


  })

}


// const interpolation = (divTwo, currentFriend) => {
//   console.log(divTwo[0]);
// };

// for (let i = 0; i < stepItems.length; i++) {
//   const currentStepItem = stepItems[i];
//   const currentStepItemHeight =
//     $(currentStepItem).offset().top + $(currentStepItem).height();

//   $(window).on('scroll', function() {
//     let stop = Math.round($(window).scrollTop());
//     if (stop > currentStepItemHeight) {
//       $('.nav').addClass('active');
//       console.log('scrolled past ', currentStepItem);
//     } else {
//       $('.nav').removeClass('active');
//       console.log('not past ', currentStepItem);
//     }
//   });
// }