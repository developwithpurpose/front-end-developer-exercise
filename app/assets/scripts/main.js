$(document).ready(function () {
  function reset() {
    $('a>img:nth-child(even)').addClass("hidden");
    $('a>img:nth-child(odd)').removeClass("hidden");
  }

  $('#mainNav > li:nth-child(1) > a').addClass("active")
  $('#mainNav > li:nth-child(1) > a').addClass("active")
  $('#mainNav > li:nth-child(1) > a >img:nth-child(odd)').addClass("hidden");
  $('#mainNav > li:nth-child(1) > a >img:nth-child(even)').removeClass("hidden");

  $('a[href^="#"]').on('click', function (e) {
    event.preventDefault();
    $("a").removeClass("active")
    $(this).addClass("active")
    reset();
    this.children[1].classList.remove("hidden");
    this.children[0].classList.add("hidden");
    let hash = this.hash;
    $('main')
      .animate({
        scrollTop: $(hash).offset().top
      }, 500, function () {
        window.location.hash = hash;
      });
  });
});