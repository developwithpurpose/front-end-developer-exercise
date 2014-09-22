$(function() {
	var $navElem = $('nav > a');
	var $navSelection = $('#navSelection');

	$navElem.click(function(event) {
		var $this = $(this);
		var topOffset = $this.position().top + 'px';

		$navElem.removeClass('selected');
		$this.addClass('selected');

		$navSelection.animate({ top: topOffset }, 200);

		event.preventDefault();
	});
});