(function(){

  this.StepsController = function() {
    this.friendsUrl = '/baby-steps.json';
  }

  StepsController.prototype.start = function() {
    fetchFriendsData.call(this);
    setupListeners.call(this);
    renderFirstStep.call(this);
  }

  StepsController.prototype.fetchFriends = function() {
    fetchFriendsData.call(this);
  }



  renderFirstStep = function () {
    firstStep = window.steps.eq(0);
    $('#baby-step-1-btn').parent().addClass('selected');
    $('.baby-steps-container').html(firstStep);
  }

  setupListeners = function() {
    $('#baby-step-nav a').click($.proxy(selectStep, this));
  }

  selectStep = function(e) {
    e.preventDefault();

    if ($(e.target).parent().hasClass('selected')) { return; }

    var step = $(e.target).attr('href');

    $('#baby-step-nav .selected').removeClass('selected');
    $(e.target).parent().addClass('selected');
    animateToStep.call(this, step);
  }

  animateToStep = function(step) {
    if (this.tween) { this.tween.kill(); }

    this.currentStepView = $('.baby-steps .baby-step').not(step);
    this.newStepView = window.steps.filter(step);

    this.stagingPos = '120%';
    this.exitPos = '-120%';

    if (window.steps.index(this.newStepView) < window.steps.index(this.currentStepView)) {
      this.stagingPos = '-120%';
      this.exitPos = '120%';
    }

    this.tween = t = new TimelineLite();
    t.add($.proxy(stageAnimation, this));
    t.add(slide(this.newStepView, 0, 0.45));
    t.add(slide(this.currentStepView, this.exitPos, 0.45), '-= 0.45');
    t.add($.proxy(cleanUpOldView, this));
    t.play();
  }

  slide = function(el, left, speed) {
    return TweenLite.to(el, speed, {
      css: { left: left },
      ease: Power2.easeInOut
    });
  }

  stageAnimation = function() {
    $(this.currentStepView).add(this.newStepView).css({
      position: 'absolute',
      top: '0',
      left: '0',
      width: '100%'
    });
    $(this.newStepView).css({ left: this.stagingPos });
    $('.baby-steps-container').append(this.newStepView);
  }

  cleanUpOldView = function() {
    this.currentStepView.remove();
  }

  fetchFriendsData = function() {
    $.ajax({
      url: this.friendsUrl
    })
      .done($.proxy(loadFriendsData, this));
  }

  loadFriendsData = function(data) {
    var groupedFriendsData = _.groupBy(data.friends, 'babyStep');

    for (var step in groupedFriendsData) {
      var sortedData = _.sortBy(groupedFriendsData[step], function(friend) {
          return [friend.lastName, friend.firstName].join('');
      });
      addFriendsView(step, sortedData);
    }
  }

  addFriendsView = function(step, data) {
    var friendsView = $('<footer class="friends"></footer>');
    var friends = [];
    var verb = data.length > 1 ? 'are' : 'is';
    var joiner = data.length > 2 ? ', ' : ' and ';
    var text = verb + ' also in Baby Step ' + step;

    var x = 0;
    while (x < 2 && x < data.length) {
      friends.push([
        '<a href="#">',
        [data[x].firstName, data[x].lastName].join(' '),
        '</a>'
      ].join(''));
      x++;
    }

    if (data.length > 2) {
      var remainder = data.length - 2;
      var s = remainder > 1 ? 's' : '';
      friends.push('and ' + remainder + ' other friend' + s);
    }

    friendsView.append([friends.join(joiner), text].join(' '));

    stepView = window.steps.filter('#baby-step-' + step);
    stepView.find('.friends').remove();
    stepView.append(friendsView);
  }

}());

$(function() {
  var App = window.app = new StepsController();
  App.start();
});
