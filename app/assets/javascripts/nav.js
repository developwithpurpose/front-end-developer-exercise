$("#nav a").on("click", function(e) {
	$("#nav a li").removeClass("active");
	$("li", this).addClass("active");
});