$(document).ready(function() {
  getData();

  var selectedValue = '1';
  var radio = $('input[type=radio][name=baby-steps]');
  var data = {};

  radio.change(handleChange);

  function getData() {
    $.ajax({
      url: '/baby-steps.json',
      success: function(result) {
        data = result.friends.reduce(function(acc, curr) {
          acc[curr.babyStep] = acc[curr.babyStep] || [];
          acc[curr.babyStep].push(
            '<a href="#">' + curr.firstName + ' ' + curr.lastName + '</a>'
          );
          return acc;
        }, {});
        setFriendsStatus();
      },
    });
  }

  function getFriends() {
    var friends = data[selectedValue] || [];
    var ending = ' also in this step';
    if (friends.length === 1) {
      return friends[0] + ' is' + ending;
    } else if (friends.length === 2) {
      return friends.join(' and ') + ' are' + ending;
    } else if (friends.length > 2) {
      var remainder = friends.slice(2).length;
      var plural = remainder > 1 ? 's' : '';
      return (
        friends.slice(0, 2).join(', ') +
        ', and ' +
        remainder +
        ' other friend' +
        plural +
        ' are' +
        ending
      );
    }

    return '';
  }

  function setFriendsStatus() {
    var curr = $('#baby-steps-content-' + selectedValue);
    var el = curr.find('.friends')[0];

    $(el).empty();
    $(el).append(getFriends());
  }

  function hideCurrent(el) {
    var currHeight = el.height();
    el.animate(
      {
        height: 0,
      },
      250,
      function() {
        el.css({ height: currHeight });
        el.hide();
      }
    );
  }

  function showClicked(el) {
    var newHeight = el.height();
    el.show();
    el.css({ height: 0 }).animate(
      {
        height: newHeight,
      },
      250
    );
    setFriendsStatus();
  }

  function handleChange(e) {
    var curr = $('#baby-steps-content-' + selectedValue);
    selectedValue = e.target.value;
    var clicked = $('#baby-steps-content-' + selectedValue);
    hideCurrent(curr);
    showClicked(clicked);
  }
});
