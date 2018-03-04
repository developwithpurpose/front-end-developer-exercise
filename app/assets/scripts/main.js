$(document).ready(function () {
  function reset() {
    $('a>img:nth-child(even)').addClass("hidden");
    $('a>img:nth-child(odd)').removeClass("hidden");
  }

  $('a[href^="#"]').on('click', function (e) {
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