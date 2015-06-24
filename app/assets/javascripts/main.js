/* Prototypes */
var APP = {};

function Tabbed(options) {
  this.TAB_HEIGHT = 61;
  this.BABY_STEPS_ENDPOINT = 'assets/javascripts/baby-steps.json';

  this.currentBabyStep = 1;
  this.currentTabIndex = 0;
  this.whosWatching = [];

  this.$panelContainer = $(options['panel_parent']);
  this.$panels = this.$panelContainer.find(options['panel_selector']);

  this.$tabContainer = $(options['tab_container']);
  this.$tabs = this.$tabContainer.find(options['tab_selector']);

  this.$navHighlighter = this.$tabContainer.parent().find(options['nav_highlighter'])
  this.$whosWatching = $(options['whos_watching_selector'])

  this.init();
}

Tabbed.prototype = {
  init: function init() {
    this._setupEventHandlers();
  },

  _setupEventHandlers: function _setupEventHandlers() {
    var self = this;

    this.$tabs.each(function() {
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

  moveNavHighlight: function moveNavHighlight(index) {
    var translateYAmount = (index * this.TAB_HEIGHT);

    this.$navHighlighter.css('transform', 'translateY(' + translateYAmount + 'px)');
  },

  renderFriendsWatching: function renderFriendsWatching() {
    $.getJSON(this.BABY_STEPS_ENDPOINT, function(data) {
      this.whosWatching = [];

      $.each(data.friends, function(index, obj) {
        if (obj.babyStep == this.currentBabyStep) {
          this.whosWatching.push(obj);
        }
      }.bind(this));

      this.whosWatchingMessage();
    }.bind(this));    
  },

  whosWatchingMessage: function whosWatchingMessage() {
    var message = '';

    if (this.whosWatching) {
      switch(this.whosWatching.length) {
        case 1:
          message = '<a href="#" class="no-click">Paul Taylor</a> is also in Baby Step 2';
          break;
        case 2:
          message = '<a href="#" class="no-click">Thomas Harris</a> and <a href="#" class="no-click">Sharon Thomas</a> are also in Baby Step 3';
          break;
        case 3:
          message = '<a href="#" class="no-click">Deborah Lee</a>, <a href="#" class="no-click">Shirley Perez</a>, and 1 other friend are also in Baby Step 4';
          break;
        case 4:
          message = '<a href="#" class="no-click">Patricia Allen</a>, <a href="#" class="no-click">Matthew Garcia</a>, and 2 other friends are also in Baby Step 5';
          break;
      }
    }

    this.$whosWatching.html(message);
  },

  showPanel: function showPanel(panel) {
    var activeClass = 'baby-step-active';
    var $clickedPanel = $('.' + panel.substr(1));
    var $startingPanel = this.$panelContainer.find('.' + activeClass);

    // Inactivate active panel
    $startingPanel.removeClass(activeClass);

    // Show relative content
    $clickedPanel.addClass(activeClass);
    this.renderFriendsWatching();
  }
};

/* Document ready */
$(function() {
  var options = {
    tab_container: '.primary-nav',
    tab_selector: 'li',
    nav_highlighter: '.nav-highlighter',
    panel_parent: '.page-main',
    panel_selector: 'article',
    whos_watching_selector: '.whos-watching'
  }

  // Initialize tabs
  APP.tabbed = new Tabbed(options);
});