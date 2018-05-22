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
        (data => {
          dom(data);
        })
      );
    })
    .catch(function (err) {
      console.log('Fetch Error, check the function: ', err);
    });
};
getData();

// super duper functional way.
const dom = response => {
  const friends = response.friends
  const sortByBabyStep = (currentFriendStepArray, el) => {
    let step = el.babyStep - 1;
    if (!!currentFriendStepArray[step]) {
      currentFriendStepArray[step].push(el);
      // console.log(el)
    } else {
      console.log(
        "Error occurred parsing friends' current steps: " +
        el.babyStep +
        " has no matching html element."
      );
    }
    return currentFriendStepArray;
  }
  const flatten = (currentFriendStepArray, el) => currentFriendStepArray.concat(el)
  const pushToDivs = el => {
    console.log(el)
    const string = `<a href="/user=${el.firstName} ${el.lastName}"> ${el.firstName} ${el.lastName}</a>, `;
    $(`.friendDivStep_${el.babyStep}`).append(string);
  }
  return friends
    .reduce(sortByBabyStep, [...Array(7)].map(x => []))
    .map(array => array.sort((a, b) => a.lastName.localeCompare(b.lastName)))
    .reduce(flatten, [])
    .forEach(pushToDivs);
}

// Jquery manipulation to the CSS for navbar adding removing classes on select...
const reset = () => {
  $('a>img:nth-child(even)').addClass("hidden");
  $('a>img:nth-child(odd)').removeClass("hidden");
}

$('a[href^="#"]').on('click', function (e) {
  $("a").removeClass("active")
  $(this).addClass("active")
  reset();
  this.children[1].classList.remove("hidden");
  this.children[0].classList.add("hidden");
  hash = this.hash;
  $('.steps__main')
    .animate({
      scrollTop: $(hash).offset().top
    }, 500, () => {
      window.location.hash = hash;
    });
})