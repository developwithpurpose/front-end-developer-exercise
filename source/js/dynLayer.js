//requires utilLayer.js

(function(){
	var friendData,
		friendRequest = util.ajax('baby-steps.json', function($data){
			friendData = JSON.parse($data);

			friendData.friends.sort(util.sort);
			console.log(friendData);
			window.addEventListener("stepChange", modifyFriendList);
		});

		function modifyFriendList(){
			console.log("modded");
			var step = util.select('.active').id.split('-')[1],
				homies = activeList(step),
				footnote = util.select('.footnote');
				
				if(homies.total === -2){
					TweenMax.to(footnote, 0.3, {autoAlpha: 0});
				} else {
					TweenMax.to(footnote, 0.3, {autoAlpha: 1});
					footnote.innerHTML = friendMessage(homies, step);
				}	
				console.log(homies);
		}

		function friendMessage($homies, $step){
			var tense = $homies.total === -1 ? ' is also ' : ' are also ',
				xtratense = $homies.total >= 2 ? 'are' : 'is',
				names = '',
				msg = '';

				switch($homies.total){
					case -2:
					break;
					case -1:
					names = makeLink('Paul Taylor');
					break;
					case 0:
					names = makeLink('Thomas Harris') + ' and ' + makeLink('Sharon Thomas');

					break;
					case 1:
					names = makeLink('Deborah Lee');
					names += ', ' + makeLink('Shirley Perez');
					names += ', and ' + $homies.total.toString() + ' other friend';
					break;
					default:
					names = makeLink('Patricia Allen');
					names += ', ' + makeLink('Matthew Garcia');
					names += ', and ' + $homies.total.toString() + ' other friends';
					
				}
				msg = names + tense + 'in Baby Step ' + $step.toString();
				return '<p>' + msg + '</p>';
		}

		function makeLink($val){
			return '<a href="#">' + $val + '</a>';
		}

		function activeList($step){
			var friends = friendData.friends,
				totalFriends = 0,
				stepBuds = [],
				activeFriends = {};

			for(var i = 0; i < friends.length; i++){
				if(parseInt(friends[i].babyStep) === parseInt($step)){
					console.log(friends[i].firstName);
					totalFriends++;
					if(totalFriends <= 2){
						var name = friends[i].firstName + ' ' + friends[i].lastName;
						stepBuds.push(name);
					}
				}
			}
			activeFriends.names = stepBuds;
			activeFriends.total = totalFriends - 2;
			return activeFriends;
		}
})();