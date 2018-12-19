jQuery(document).ready(function($) {
	
	// variables
	var moveWhiteBox, artH, firstName, lastName, babyStep,fn1, ln1, fn2, ln2, sent_a
		artCon = $('.article-container'),
		babyStepsArray=[],
		babyStepsArrayExt = [];

	// JSON
	$.getJSON('baby-steps.json', function(json, textStatus) {
		babyStepsArray = json.friends;
	});
	// get article heights
	function checkHeights(){
		artIn = $('.article-1').outerHeight(),
		artOut = $('.article-1').outerHeight(true),
		a2 = $('.article-2').outerHeight(true),
		a3 = $('.article-3').outerHeight(true),
		a4 = $('.article-4').outerHeight(true),
		a5 = $('.article-5').outerHeight(true),
		a6 = $('.article-6').outerHeight(true),
		a7 = $('.article-7').outerHeight(true);
	}
	checkHeights();

	// check friends on same baby steps as argument, 
	// push to new array, 
	// then sort that array, 
	// get the first two names
	// then check how many friends per step,
	// output correct sentence on each step
	function checkBabySteps(babySteps){
		babyStepsArrayExt = [];
		for (var i = 0; i < babyStepsArray.length; i++) {
			if( babyStepsArray[i].babyStep === babySteps){
				firstName = babyStepsArray[i].firstName,
				lastName = babyStepsArray[i].lastName,	
				babyStep = babyStepsArray[i].babyStep;
				babyStepsArrayExt.push({ firstName, lastName, babyStep });
			}
		}

		function sortArray(a, b) {
			var lastNameA = a.lastName.toUpperCase(),
				  lastNameB = b.lastName.toUpperCase(),
				  firstNameA = a.firstName.toUpperCase(),
				  firstNameB = b.firstName.toUpperCase();

			let comparison = 0;
			if (lastNameA > lastNameB) {
				comparison = 1;
			} else if (lastNameA < lastNameB) {
				comparison = -1;
			} else if (lastNameA === lastNameB){
				if(firstNameA > firstNameB){
					comparison = 1;
				} else if(firstNameA < firstNameB){
					comparison = -1;
				}
			}
			return comparison;
		}

		babyStepsArrayExt = babyStepsArrayExt.sort(sortArray);
		if(babyStepsArrayExt[0]){
			fn1 = babyStepsArrayExt[0].firstName,
			ln1 = babyStepsArrayExt[0].lastName;
		}
		if(babyStepsArrayExt[1]){
			fn2 = babyStepsArrayExt[1].firstName,
			ln2 = babyStepsArrayExt[1].lastName;
		}
		if( babyStepsArrayExt.length === 1 ){
			sent_a = '<span>'+fn1+' '+ln1+'</span> is also in Baby Step '+babySteps+'.';
			$('.article-'+babySteps+' p.friends').html(sent_a);
		} else if( babyStepsArrayExt.length === 2 ){
			sent_a = '<span>'+fn1+' '+ln1+'</span> and <span>'+fn2+' '+ln2+'</span> are also in Baby Step '+babySteps+'.';
			$('.article-'+babySteps+' p.friends').html(sent_a);
		} else if( babyStepsArrayExt.length === 3 ){
			sent_a = '<span>'+fn1+' '+ln1+'</span>, <span>'+fn2+' '+ln2+'</span>, and 1 other friend are also in Baby Step '+babySteps+'.';
			$('.article-'+babySteps+' p.friends').html(sent_a);
		} else if( babyStepsArrayExt.length >= 4 ){
			sent_a = '<span>'+fn1+' '+ln1+'</span>, <span>'+fn2+' '+ln2+'</span>, and 2 other friends are also in Baby Step '+babySteps+'.';
			$('.article-'+babySteps+' p.friends').html(sent_a);
		}
	}

	// set window height
	function moveArticle( sizeWindow, moveUp){
		$('.window').css('height', sizeWindow)
		$('.article-container').css('top', -moveUp)
	}


	// click left menu items, change icon style, 
	// move white box
	// output correct sentences
	// check heights of articles after addition to sentences
	// move article container that matches left side menu
	$('aside li').click(function() {

		$('aside li').removeClass('active');
		$('aside li span').removeClass('icon-active');
		$(this).addClass('active');
		$(this).find('span').addClass('icon-active');

		moveWhiteBox = $(this).position().top;
		$('.whitebox').css('top', moveWhiteBox);

		if( $(this).find('span').hasClass('bs-1') ){
			checkBabySteps(1);
			checkHeights();
			moveArticle( artOut, 0)
		} else if( $(this).find('span').hasClass('bs-2') ){
			checkBabySteps(2);
			checkHeights();
			moveArticle( a2, artOut)
		} else if( $(this).find('span').hasClass('bs-3') ){
			checkBabySteps(3);
			checkHeights();
			moveArticle( a3, artOut+a2)
		} else if( $(this).find('span').hasClass('bs-4') ){
			checkBabySteps(4);
			checkHeights();
			moveArticle( a4, artOut+a2+a3)
		} else if( $(this).find('span').hasClass('bs-5') ){
			checkBabySteps(5);
			checkHeights();
			moveArticle( a5, artOut+a2+a3+a4)
		} else if( $(this).find('span').hasClass('bs-6') ){
			checkBabySteps(6);
			checkHeights();
			moveArticle( a6, artOut+a2+a3+a4+a5)
		} else if( $(this).find('span').hasClass('bs-7') ){
			checkBabySteps(7);
			checkHeights();
			moveArticle( a7, artOut+a2+a3+a4+a5+a6)
		}
	});
	// size the window to the default, first baby step.
	moveArticle(artOut);

});