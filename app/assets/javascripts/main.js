var APP = {};

function BabySteps(options) {
  // Constants
  this.TAB_HEIGHT = 61;
  this.BABY_STEPS_ENDPOINT = 'assets/javascripts/baby-steps.json';

  // Variables
  this.cssTransforms = $('html').hasClass('csstransforms');
  this.currentBabyStep = 1;
  this.currentTabIndex = 0;
  this.whosWatching = [];

  // Elements
  this.$panelContainer = $(options.panel_parent);
  this.$panels = this.$panelContainer.find(options.panel_selector);

  this.$tabContainer = $(options.tab_container);
  this.$tabs = this.$tabContainer.find(options.tab_selector);

  this.$navHighlighter = this.$tabContainer.parent().find(options.nav_highlighter);
  this.$whosWatching = $(options.whos_watching_selector);

  // Start app
  this.init();
}

BabySteps.prototype = {
  init: function init() {
    this._setupEventHandlers();

    // Just in case there are friends on Baby Step 1
    this.pollFriends();
  },

  _setupEventHandlers: function _setupEventHandlers() {
    var self = this;

    this.$tabs.each(function () {
      $(this).on('click', $.proxy(self, 'clickHandler'));
    });
  },

  clickHandler: function clickHandler(e) {
    var panel = $(e.target).attr('href');
    var $tab = $(e.currentTarget);

    this.currentTabIndex = $tab.index();
    this.currentBabyStep = this.currentTabIndex + 1;

    e.preventDefault();

    // If there is no target OR the target is already active
    if (!panel || $tab.hasClass('active')) {
      return;
    }

    // Highlight tab
    this.highlightTab($tab);

    // Request JSON data of friends on the same baby step
    this.pollFriends();

    // Show appropriate panel
    this.showPanel(panel);
  },

  highlightTab: function highlightTab($tab) {
    // Inactivate active tab
    this.$tabContainer.find('.active').removeClass('active');

    // Activate clicked tab
    $tab.addClass('active');

    // Move .nav-highlight
    this.moveNavHighlight(this.currentTabIndex);
  },

  linkToFriend: function linkToFriend(name) {
    return '<a href="#" class="no-follow">' + name + '</a>';
  },

  moveNavHighlight: function moveNavHighlight(index) {
    var translateYAmount = (index * this.TAB_HEIGHT);
    var unit = 'px';

    if (this.csstransforms) {
      this.$navHighlighter.css('transform', 'translateY(' + translateYAmount + unit);
    } else {
      this.$navHighlighter.animate({ top: translateYAmount + unit}, 250);

      // This helps guard against the text/icon looking grainy in IE8
      this.$tabContainer.find('a').each(function () {
        $(this).get(0).style.filter = '';
      });
    }
  },

  pollFriends: function pollFriends() {
    $.ajax(this.BABY_STEPS_ENDPOINT, { dataType: 'json' })
      .success(function (data) {
        this.whosWatching = [];

        /*jslint unparam: true*/
        $.each(data.friends, function (index, obj) {
          if (obj.babyStep === this.currentBabyStep) {
            this.whosWatching.push(obj);
          }
        }.bind(this));
        /*jslint unparam: false*/

        // Sort the friends by last name ascending
        this.sortFriends();

        // Render the message string
        this.renderWatchingMessage();
      }.bind(this));
  },

  renderWatchingMessage: function renderWatchingMessage() {
    var friendCount = this.whosWatching.length;
    var i;
    var message = '';
    var names = [];
    var numberLeft = 0;
    var maxFriendsToShow = (friendCount === 1 ? 1 : 2); // Max to show is 2
    var singular = (friendCount === 1 ? true : false);
    var verb = (singular ? 'is' : 'are');

    if (friendCount) {
      // Collect the names and linkify them
      for (i = 0; i < maxFriendsToShow; i++) {
        names.push(this.linkToFriend(this.whosWatching[i].firstName + ' ' + this.whosWatching[i].lastName));
      }

      // How many friends are left over after we've reached our max?
      numberLeft = friendCount - maxFriendsToShow;

      // If there are people left over
      if (numberLeft > 0) {
        message += names.join(', ');
        message += ', and ' + numberLeft + ' other friend' + (numberLeft === 1 ? '' : 's');
      } else {
        message += names.join(' and ');
      }

      // End the sentence
      message += ' ' + verb + ' also in Baby Step ' + this.currentBabyStep;
    }

    this.$whosWatching.hide().html(message).fadeIn(250);
  },

  showPanel: function showPanel(panel) {
    var activeClass = 'baby-step-active';
    var $clickedPanel = $('.' + panel.substr(1));
    var $startingPanel = this.$panelContainer.find('.' + activeClass);

    // To prevent a flash of the previous friend list, clear the value
    this.$whosWatching.html('');

    // Inactivate active panel
    $startingPanel.removeClass(activeClass);

    // Show relative content
    $clickedPanel.addClass(activeClass);
  },

  sortFriends: function sortFriends() {
    this.whosWatching.sort(function (a, b) {
      var firstNameOne = a.firstName.toLowerCase();
      var firstNameTwo = b.firstName.toLowerCase();
      var lastNameOne = a.lastName.toLowerCase();
      var lastNameTwo = b.lastName.toLowerCase();

      // Sort by last name first
      if (lastNameOne < lastNameTwo) {
        return -1;
      } else if (lastNameOne > lastNameTwo) {
        return 1;
      }

      // Sort by first name
      if (firstNameOne < firstNameTwo) {
        return -1;
      } else if (firstNameOne > firstNameTwo) {
        return 1;
      }

      return 0;
    });
  }
};

/* Document ready */
$(function () {
  var options = {
    tab_container: '.primary-nav',
    tab_selector: 'li',
    nav_highlighter: '.nav-highlighter',
    panel_parent: '.page-main',
    panel_selector: 'article',
    whos_watching_selector: '.whos-watching'
  };

  // Initialize tabs
  APP.BabySteps = new BabySteps(options);

  // Ensure .no-follow links are not clickable
  // Must use document because the .no-follow links are dynamically inserted
  $(document).on('click', '.no-follow', function (e) {
    e.preventDefault();
  });
});