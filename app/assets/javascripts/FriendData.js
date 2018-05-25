import $ from 'jquery';

export default $.getJSON('../baby-steps.json', function(data) {
  var bSteps = data;

  $.grep(bSteps.friends, function(element, index) {
    if (element.babyStep === 2) {
      var name = `${element.firstName} ${element.lastName}`;
      $('.description__friends--2').append(
        `<p class="description__friends--other"><a class="description__friends--name">
          ${name}</a> and ${
          element.babyStep.length
        } others are on this step</p>`
      );
    } else if (element.babyStep === 3) {
      var name = `${element.firstName} ${element.lastName}`;
      $('.description__friends--3').append(
        `<p class="description__friends--other"><a class="description__friends--name">
          ${name}</a> and ${
          element.babyStep.length
        } others are on this step</p>`
      );
    } else if (element.babyStep === 4) {
      var name = `${element.firstName} ${element.lastName}`;
      $('.description__friends--4').append(
        `<p class="description__friends--other"><a class="description__friends--name">
          ${name}</a> and ${
          element.babyStep.length
        } others are on this step</p>`
      );
    } else if (element.babyStep === 5) {
      var name = `${element.firstName} ${element.lastName}`;
      $('.description__friends--5').append(
        `<p class="description__friends--other"><a class="description__friends--name">
          ${name}</a> and ${
          element.babyStep.length
        } others are on this step</p>`
      );
    } else if (element.babyStep === 6) {
      var name = `${element.firstName} ${element.lastName}`;
      $('.description__friends--6').append(
        `<p class="description__friends--other"><a class="description__friends--name">
          ${name}</a> and ${
          element.babyStep.length
        } others are on this step</p>`
      );
    } else if (element.babyStep === 7) {
      var name = `${element.firstName} ${element.lastName}`;
      $('.description__friends--7').append(
        `<p class="description__friends--other"><a class="description__friends--name">
          ${name}</a> and ${
          element.babyStep.length
        } others are on this step</p>`
      );
    }
  });
});
