/**
 * Quick and dirty utility functions
 * @type {Object}
 */
const DR = {
  util: {
    nameLink: record => `<a href='javascript:void())'>${record.firstName} ${record.lastName}</a>`,
    heightReducer: (accumulator, currentValue) => accumulator + currentValue,
  },
};

/**
 * Module to encapsulate vertical slider functionality
 * @param {jQuery} $ jQuery reference
 * @constructor
 */
function SlideShow($) {
  let slideHeights;
  let currentSlide = 1;
  const numSlides = $('article').length;

  /**
   * Maps the height of each slide in the deck
   * @return {null} none
   */
  function mapSlideHeights() {
    slideHeights = [];
    $('article').each(function(article) {
      // 13 accounts for extra padding from the headings
      slideHeights.push($(this).height() + 13);
    });
  }

  /**
   * Shows a particular slide, given it's position in the slide deck.
   * @param {int} slideNum slide number to show. 1 based (not the index)
   * @return {null} none
   */
  function showSlide(slideNum) {
      if (!slideNum) {
        slideNum = currentSlide;
      }
      if (slideNum < 1 || slideNum > numSlides) {
        console.error('Invalid slide number specified');
        return;
      }
      const height = slideHeights[slideNum - 1];
      const scrollTop = slideHeights
        .slice(0, slideNum - 1)
        .reduce(DR.util.heightReducer, 0);
      $('.slide-wrapper')
        .height(height)
        .animate({ scrollTop: scrollTop }, 'fast');
      $('.menu .active')
        .removeClass('active');
      $('.menu li:nth-child('+slideNum+')')
        .addClass('active');
      currentSlide = slideNum;
  }

  return {
    mapSlideHeights,
    showSlide,
    numSlides,
  }
}

$(document).ready(function() {
  const slides = SlideShow($);
  slides.mapSlideHeights();
  slides.showSlide();

  /**
   * Setup onClick handler for menu links
   */
  $('.menu .item').click(function(e) {
      e.preventDefault();
      const slideNum = $(this).attr("href").substr(1);
      slides.showSlide(slideNum);
  });

  /**
   * Fetch the json data in order to show number of friends that are on
   * the same baby step.
   */
  $.get('/baby-steps.json', function(data) {
    if (data.friends) {
      for (var i = 1; i <= slides.numSlides; i++) {
        const onStep = data.friends.filter(x => x.babyStep === i);
        const total = onStep.length;
        let template;

        // !!!TODO - put templates in html
        if (total > 3) {
          template =
            `${DR.util.nameLink(onStep[0])}, `+
            `${DR.util.nameLink(onStep[1])},`+
            ` and ${total - 2} other friends are also in Baby Step ${i}`;
        } else if (total === 3) {
          template =
            `${DR.util.nameLink(onStep[0])}, `+
            `${DR.util.nameLink(onStep[1])},`+
            ` and 1 other friend are also in Baby Step ${i}`;
        } else if (total === 2) {
          template =
            `${DR.util.nameLink(onStep[0])} and `+
            `${DR.util.nameLink(onStep[1])}`+
            ` are also in Baby Step ${i}`;
        } else if (total === 1) {
          template =
            `${DR.util.nameLink(onStep[0])}`+
            ` is also in Baby Step ${i}`;
        }
        if (template) {
          $(`article#${i}`).append(`<p class="friends">${template}</p>`);
        }
      }
      // As appending the .friends paragraph changes the slide heights, we need
      // to recalculate and reshow the current slide.
      slides.mapSlideHeights();
      slides.showSlide();
    }
  });
});
