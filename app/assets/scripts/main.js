$(document).ready(function () {
  let friendArray = []

  function reset() {
    $('a>img:nth-child(even)').addClass("hidden");
    $('a>img:nth-child(odd)').removeClass("hidden");
  }

  function nameSort(x, y) {
    return ((x.lastName == y.lastName) ? 0 : ((x.lastName > y.lastName) ? 1 : -1));
  }
  $('a[href^="#"]').on('click', function (e) {
    $.ajax({
      url: "../../baby-steps.json",
      type: 'get',
      dataType: 'json',
      success: function (data) {
        $.each(data.friends, function (index, item) {
          // console.log(item)
          friendArray.push(item)
          // console.log(friendArray)
        });
        friendArray.sort(function (a, b) {
          let nameA = a.lastName.toUpperCase()
          let nameB = b.lastName.toUpperCase()
          if (nameA < nameB) {
            return -1
          }
          if (nameA > nameB) {
            return 1
          }
          return 0
        });
        console.log(friendArray)
      },
      error: function (e) {
        console.log("error", error)
      }
    });
    $("a").removeClass("active")
    $(e.target).addClass("active");
    reset();
    e.target.children[1].classList.remove("hidden");
    e.target.children[0].classList.add("hidden");
    event.preventDefault();
    let hash = this.hash;
    $('main')
      .animate({
        scrollTop: $(hash).offset().top
      }, 500, function () {
        window.location.hash = hash;
      });
  });
});