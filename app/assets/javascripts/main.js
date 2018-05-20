const stepItems = $('.stepItem');

for (let i = 0; i < stepItems.length; i++) {
  const currentStepItem = stepItems[i];
  const currentStepItemHeight =
    $(currentStepItem).offset().top + $(currentStepItem).height();

  $(window).on('scroll', function() {
    let stop = Math.round($(window).scrollTop());
    if (stop > currentStepItemHeight) {
      $('.nav').addClass('active');
      console.log('scrolled past ', currentStepItem);
    } else {
      $('.nav').removeClass('active');
      console.log('not past ', currentStepItem);
    }
  });
}

// friend zone
const getData = () => {
  fetch('../../baby-steps.json')
    .then(
      (response => {
        if (response.status !== 200) {
          console.log(
            'Looks like there was an unexpected response. Status Code: ' +
              response.status
          );
          return;
        }
        response.json().then(
          (r = data => {
            dom(data)
          })
        );
      })
    )
    .catch(function(err) {
      console.log('Fetch Error, check the function: ', err);
    });
};
getData();

const dom = response => {
  // console.log(response)
  let lazy = response.friends
  console.log(lazy[0])
  $('friend__Status').html(`${lazy[0].firstName}`);
};

// const stepItems = document.querySelectorAll('.stepItem');

// let currentstepItem = 0;

// const nextstepItem = () => {
//   goTostepItem(currentstepItem + 1);
// };

// const previousstepItem = () => {
//   goTostepItem(currentstepItem - 1);
// };

// const goTostepItem = n => {
//   stepItems[currentstepItem].className = 'stepItem';
//   currentstepItem = (n + stepItems.length) % stepItems.length;
//   stepItems[currentstepItem].className = 'stepItem showing';
// };

// document.scrollTop = event => {
//   switch (event.keyCode) {
//     case 37:
//       previousstepItem();
//       break;
//     case 39:
//       nextstepItem();
//       break;
//   }
// };
