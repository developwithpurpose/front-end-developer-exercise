function initEventWatchers(){
	$(".left-tab-li").on({
		mouseenter: function(){
			$(this).find(".left-tab-icon-inactive").addClass("hidden").parent().find(".left-tab-icon-active").removeClass("hidden");
		},
		mouseleave: function(){
			if(!$(this).hasClass("list-active")){
				$(this).find(".left-tab-icon-inactive").removeClass("hidden").parent().find(".left-tab-icon-active").addClass("hidden");
			}
		},
		click: function(){
			var sender = $(this);
			var reciever = $(".list-active");
			var clickId = +sender.attr('id').replace('li-', '');
			var startId = reciever.attr('id').replace('li-', '');

			reciever.find(".left-tab-icon-inactive").removeClass("hidden").parent().find(".left-tab-icon-active").addClass("hidden");
			sender.find(".left-tab-icon-inactive").addClass("hidden").parent().find(".left-tab-icon-active").removeClass("hidden");


			reciever.removeClass("list-active");
			sender.addClass("list-active");
			animateLeftBar(clickId);
			changeBodyText(clickId)
		}
	});

	//private
	function animateLeftBar(clickId){
		var coord = $("#li-" + clickId).position();
		$(".mover").animate( {left: coord.left, top: coord.top} )
	};

	//private
	function changeBodyText(clickId){
		var height = $(".right-content-wrapper").height();
		$(".right-content").animate( {left: 0, top: -( height * (+clickId - 1)) }, 'slow')
	}
};



var friends = (function() {

	//private
	function grabJSON(callback){
		$.ajax({
			dataType: "json",
			url: './assets/javascripts/baby-steps.json',
			async: false
		}).success(function(data){
			callback(null, data);
		}).fail(function(error){
			callback(error)
		})
	}

	//private
	function parseFriends(data){
		var sortedFriends = sortFriends(data);

		var step = 1;
		var tempArr = [];
		for( var i = 0 ; i < sortedFriends.length ; i++ ){
			if( sortedFriends[i].babyStep == step ){
				tempArr.push(sortedFriends[i]);
			}else if( sortedFriends[i].babyStep == (step + 1)){
				createFriendsHtml(tempArr, step);
				tempArr = [];
				step++;
				tempArr.push(sortedFriends[i]);
			}
		}
	}

	//private
	function sortFriends(data){

		data.friends.sort( function( low, high ){
			return low.babyStep - high.babyStep;
		});

		return data.friends;
	}

	//private
	function createFriendsHtml(nameArr, step){

		var stepFriendsHtml = $("#step-" + step + " .right-body-friends");
		var stepPhraseHtml = $("#step-" + step + " .right-body-friends-people")

		if (nameArr.length == 0){
			console.log("Do nothing");
		}else if(nameArr.length == 1){
			stepFriendsHtml.html( returnNames(nameArr[0]));
			stepPhraseHtml.html(" is also in Baby Step " + step);
		} else if(nameArr.length == 2){ 
				stepFriendsHtml.html( returnNames(nameArr[0]) + " and " + returnNames(nameArr[1]) );
				stepPhraseHtml.html(" are also in Baby Step " + step);
		} else if(nameArr.length == 3){
				stepFriendsHtml.html( returnNames(nameArr[0]) + " , " + returnNames(nameArr[1]) );
				stepPhraseHtml.html( ", and 1 other friend are also in Baby Step "+ step);
		}else if (nameArr.length >= 4){
				stepFriendsHtml.html( returnNames(nameArr[0]) + " , " + returnNames(nameArr[1]) );
				stepPhraseHtml.html( ", and " + (nameArr.length - 2) + " other friends are also in Baby Step " + step);
		}else{
			console.log("Error");
		}
	}

	//private
	function returnNames(obj){
		var returnHtml = document.createElement("span");
		returnHtml.className = "right-body-name";
		returnHtml.innerHTML = obj.firstName + ' ' + obj.lastName
		return returnHtml.outerHTML;
	}

	return {
		//public
		initFriends: function() {
			grabJSON(function(err, data){
				if (err) {
					throw err;
				}else{
					parseFriends(data);
				}
			});
		}
	}
}());

$(document).ready(function(){
	initEventWatchers();
	friends.initFriends();
});
















