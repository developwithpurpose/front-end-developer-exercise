var APP = {};

function Tabbed(tab_container, tab_selector, panel_parent, panel_selector) {
  this.$panelContainer = $(panel_parent);
  this.$panels = this.$panelContainer.find(panel_selector);

  this.$tabContainer = $(tab_container);
  this.$tabs = this.$tabContainer.find(tab_selector);

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

    e.preventDefault();

    // Highlight tab
    this.highlightTab($tab);

    // Show appropriate panel
    this.showPanel(panel);
  },

  highlightTab: function highlightTab($tab) {
    // Inactivate active tab
    this.$tabContainer.find('.active').removeClass('active');

    // Highlight clicked tab
    $tab.addClass('active');
  },

  showPanel: function showPanel(panel) {
    var $panel = $(panel);

    // Inactivate active panel
    this.$panelContainer.find('.active').removeClass('active');

    // Show relative content
    $panel.addClass('active');
  }
};

$(function() {
  // Initialize tabs
  APP.tabbed = new Tabbed('.primary-nav', 'li', '#main', 'article');
});