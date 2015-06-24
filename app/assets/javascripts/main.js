/* Prototypes */
var APP = {};

function Tabbed(options) {
  this.TAB_HEIGHT = 61;
  this.$panelContainer = $(options['panel_parent']);
  this.$panels = this.$panelContainer.find(options['panel_selector']);

  this.$tabContainer = $(options['tab_container']);
  this.$tabs = this.$tabContainer.find(options['tab_selector']);

  this.$navHighlighter = this.$tabContainer.parent().find(options['nav_highlighter'])

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
    window.ta = $tab;

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
    var tabIndex = this.$tabContainer.find($tab).index();

    // Inactivate active tab
    this.$tabContainer.find('.active').removeClass('active');

    // Activate clicked tab
    $tab.addClass('active');

    // Move .nav-highlight
    this.moveNavHighlight(tabIndex);
  },

  moveNavHighlight: function moveNavHighlight(index) {
    var translateYAmount = (index * this.TAB_HEIGHT);

    this.$navHighlighter.css('transform', 'translateY(' + translateYAmount + 'px)');
  },

  showPanel: function showPanel(panel) {
    var activeClass = 'baby-step-active';
    var $panel = $('.' + panel.substr(1));

    // Inactivate active panel
    this.$panelContainer.find('.' + activeClass).removeClass(activeClass);

    // Show relative content
    $panel.addClass(activeClass);
  }
};

/* Document ready */
$(function() {
  var options = {
    tab_container: '.primary-nav',
    tab_selector: 'li',
    nav_highlighter: '.nav-highlighter',
    panel_parent: '.page-main',
    panel_selector: 'article'
  }

  // Initialize tabs
  APP.tabbed = new Tabbed(options);
});