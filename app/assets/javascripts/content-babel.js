function _instanceof(left, right) { if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) { return right[Symbol.hasInstance](left); } else { return left instanceof right; } }

function _classCallCheck(instance, Constructor) { if (!_instanceof(instance, Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var ContentNav =
/*#__PURE__*/
function () {
  "use strict";

  function ContentNav() {
    var activeStep = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;

    _classCallCheck(this, ContentNav);

    this.slides = document.getElementsByClassName('c-content-slide');
    $('.js-content-nav-holder').prepend('<li class="c-content-nav__highlight js-nav-highlight"></li>');

    if (window.location.hash && window.location.hash.indexOf('step') >= 0) {
      activeStep = window.location.hash.replace('#step', '');
    }

    this.navigate(activeStep, false);
    this.getFriends();
  }

  _createClass(ContentNav, [{
    key: "getFriends",
    value: function getFriends() {
      var the_class = this;
      $.ajax({
        url: 'baby-steps.json',
        dataType: 'json'
      }).done(function (json) {
        json.friends.sort(function (a, b) {
          if (a.lastName < b.lastName) {
            return -1;
          }

          if (a.lastName > b.lastName) {
            return 1;
          }

          return;
        });

        for (var i = 0; i < the_class.slides.length; i++) {
          var friends = [];

          for (var a = 0; a < json.friends.length; a++) {
            if (json.friends[a].babyStep == the_class.slides[i].getAttribute('data-step')) {
              friends.push(json.friends[a]);
            }
          }

          if (friends.length > 0) {
            var tpl = document.getElementById('friends-template').innerHTML;

            var template = _.template(tpl);

            var html = template({
              friends: friends,
              step: i + 1
            });
            the_class.slides[i].innerHTML += html;
          }
        }
      }).fail(function (error) {
        console.log(error.responseText);
      });
    }
  }, {
    key: "navigate",
    value: function navigate(activeStep) {
      var animate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      var nav = $('.c-content-nav');
      var navItem = $('.c-content-nav__link[data-step="' + activeStep + '"]');

      if (!navItem.hasClass('c-content-nav__link--active')) {
        $('.c-content-nav__link--active').removeClass('c-content-nav__link--active');

        var _content = $('.c-content');

        var contentItem = $('#step' + activeStep);
        navItem.addClass('c-content-nav__link--active');

        if (animate == true) {
          $('.js-nav-highlight').animate({
            top: navItem.offset().top - nav.offset().top - 1
          }, 700);

          _content.animate({
            scrollTop: contentItem.offset().top - $('#step1').offset().top
          }, 700);

          window.history.pushState("", "", '#step' + activeStep);
        } else {
          $('.js-nav-highlight').css('top', navItem.offset().top - nav.offset().top - 1);

          _content.scrollTop(contentItem.offset().top - $('#step1').offset().top);
        }
      }
    }
  }]);

  return ContentNav;
}();

$('.js-content-nav-link').click(function (e) {
  e.preventDefault();
  content.navigate($(this).attr('data-step'));
});
window.addEventListener('hashchange', function () {
  if (window.location.hash && window.location.hash.indexOf('step') >= 0) {
    activeStep = window.location.hash.replace('#step', '');
  }

  content.navigate(activeStep, false);
});

var content = new ContentNav();