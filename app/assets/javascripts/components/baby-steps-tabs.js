$(function() {
	$(".component-baby-steps-tabs").each(function() {
		var $component = $(this),
		$tabs = $component.find("a[id^='step']"),
		$tab1 = $component.find("#step1Tab"),
		hash = window.location.hash.substring(1);
		
		function activateTab1() {
			$tab1.addClass("active");
		}

		if (hash) {
			switch (hash) {
				case "baby-step-1":
				case "baby-step-2":
				case "baby-step-3":
				case "baby-step-4":
				case "baby-step-5":
				case "baby-step-6":
				case "baby-step-7":
					break;
				default :
					activateTab1();
			}
		} else {
			activateTab1();
		}

		$tabs.on('click', function() {
			var $this = $(this),
				$tabContent = $this.next(".content"),
				$allTabContent = $component.find(".content").not($tabContent);

			$tabs.each(function() {
				$this.removeClass("active");
			});

			if ($("html").hasClass("no-cssanimations")) {
				$this
				 .animate({
				 	"padding-left":"80px",
				 	"padding-right":"64px"
				 },167)
				 .animate({
				 	"padding-left": "130px",
				 	"padding-right":"14px"        
				 },167)
				 .animate({
				 	"padding-left": "120px",
				 	"padding-right":"24px"        
				 },167);
			}

			if ($("html").hasClass("no-csstransitions")) {
				$tabContent.animate({
					"left": "300px",
					"opacity": "1"
				}, 300);

				$allTabContent.animate({
					"left": "200px",
					"opacity": "0"
				}, 300);
			}
		});

	});
});