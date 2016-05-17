$(function() {
	$(".component-baby-steps-tabs").each(function() {
		var $component = $(this),
		$tabs = $component.find("a[id^='step']"),
		$tab1 = $component.find("#step1Tab"),
		hash = window.location.hash.substring(1);
		
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

		function activateTab1() {
			$tab1.addClass("active");
		}

		$tabs.on('click', function() {
			$tabs.each(function() {
				$(this).removeClass("active");
			});
		});

	});
});