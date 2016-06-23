//require utilLayer.js

(function(){
	var navlinks = util.selectAll('.step'),
		pane = util.select('.content-inner', util.select('#baby-steps')),
		slider = util.select('.slider'),
		prevlink = null;

	function activateListeners(){
		for(var i = 0; i < navlinks.length; i++){
			navlinks[i].addEventListener('click', animateNav);
		}
	}

	function animateNav(e){
		e.preventDefault();
		
		if(prevlink !== null)	util.removeClass(util.parent(prevlink), 'active');
		util.addClass(util.parent(this), 'active');
		prevlink = this;
		scrollContent(util.attr(this, 'href'));
	}

	function scrollContent($step){
		var pane_y = util.select($step).offsetTop - 60,
			slider_y = util.select('.active').offsetTop;
		
		TweenMax.to(pane, 1.8, {scrollTo:{y: pane_y}});
		TweenMax.to(slider, 2.1, {y: slider_y});
	}

	activateListeners();
})();