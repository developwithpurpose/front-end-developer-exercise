function page(target, mItem) {
	$("content").stop();
	$("#menuActive").stop();
	$("content").animate({
		scrollTop: $(target)[0].offsetTop-340
	}, 1000)
	$(".menuItem").removeClass("on");
	$(mItem).addClass("on");
	$("#menuActive").css({
		top: $(mItem)[0].offsetTop
	})
}

function initAnim() {
	var step=window.location.href;
	step=step.split("babyStep")[1];
	if (typeof(step)=="undefined") {
		step=1;
	}
	$("content").scrollTop($("#babyStep"+step)[0].offsetTop-340)
	$("#menuActive").css({
		display: "block",
		top: $("#item"+step)[0].offsetTop
	});
	$("#item"+step).addClass("on");
}