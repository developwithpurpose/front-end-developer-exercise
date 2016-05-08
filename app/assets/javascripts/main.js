(function(){
  'use strict';
  setTimeout(function() {
    $('#r1').trigger('click');
  },10);

  var getDataFromJson = function(jsonFile, step, element){
    $.getJSON(jsonFile, function(data){
      data = filterResults(data, step);
      data = formatData(data, step);
      display(data, element);
    });
  };

  var filterResults = function(data, step){
    var items = data.friends.filter(function(f){return f.babyStep === step;});
    var friendsOnStep = [];

    $.each(items, function(){
      friendsOnStep.push(this.firstName + ' ' + this.lastName);
    });
    return friendsOnStep;
  };

  var formatData = function(data, step) {
    var content = '';
    switch(data.length){
    case 0:
      content = '';
      break;
    case 1:
      content = '<p class="dynamic"><span class="link">' + data[0] + '</span> is also in Baby Step ' + step + '</p>';
      break;
    case 2:
      content = '<p class="dynamic"><span class="link">' + data[0] + '</span> and <span class="link">' +
      data[1] + '</span> are also in Baby Step ' + step + '</p>';
      break;
    case 3:
      content = '<p class="dynamic"><span class="link">' + data[0] + '</span>, <span class="link">' + data[1] +
      '</span>, and 1 other friend are also in Baby Step ' + step + '</p>';
      break;
    default:
      content = '<p class="dynamic"><span class="link">' + data[0] + '</span>, <span class="link">' + data[1] +
      '</span> and ' + (data.length - 2) + ' other friends are also in Baby Step ' + step + '</p>';
      break;
    }
    return content;
  };

  var display = function(data, element) {
    element.empty();
    element.append(data);
  };

  $('input.state').click(function (){
    var showData = $('.show-data');
    var div_id = $('input.state').index($(this));
    var myBabyStep = div_id + 1;
    var jsonFile = '../../baby-steps.json';
    getDataFromJson(jsonFile, myBabyStep, showData);
  });
  window.getDataFromJson = getDataFromJson;
  window.filterResults = filterResults;
  window.formatData = formatData;
  window.display = display;
})();
