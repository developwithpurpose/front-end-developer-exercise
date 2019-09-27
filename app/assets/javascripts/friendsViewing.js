$.getJSON("baby-steps.json", function(data) {
	
	var friends = data["friends"];
	var numOfFriendsInBabyStep1 = 0;
	var numOfFriendsInBabyStep2 = 0;
	var numOfFriendsInBabyStep3 = 0;
	var numOfFriendsInBabyStep4 = 0;
	var numOfFriendsInBabyStep5 = 0;
	var numOfFriendsInBabyStep6 = 0;
	var numOfFriendsInBabyStep7 = 0;

	for ( var i in friends ) {
	
		console.log(friends[i]['babyStep']);
	
		if ( friends[i]['babyStep'] == 1 ) {
			numOfFriendsInBabyStep1++;
		} else if ( friends[i]['babyStep'] == 2 ) {	
			numOfFriendsInBabyStep2++;
		} else if ( friends[i]['babyStep'] == 3 ) {	
			numOfFriendsInBabyStep3++;
		} else if ( friends[i]['babyStep'] == 4 ) {	
			numOfFriendsInBabyStep4++;
		} else if ( friends[i]['babyStep'] == 5 ) {	
			numOfFriendsInBabyStep5++;
		} else if ( friends[i]['babyStep'] == 6 ) {	
			numOfFriendsInBabyStep6++;
		} else if ( friends[i]['babyStep'] == 7 ) {	
			numOfFriendsInBabyStep7++;
		}
	
	}
	
	if ( !numOfFriendsInBabyStep1 ) {
		$("#friendsViewingBabyStep1").html("");
	} else if ( numOfFriendsInBabyStep1 == 1 ) {
		$("#friendsViewingBabyStep1").html("<a href=\"#\">Paul Taylor</a> is also in Baby Step 2");
	} else if ( numOfFriendsInBabyStep1 == 2 ) {
		$("#friendsViewingBabyStep1").html("<a href=\"#\">Thomas Harris</a> and <a href=\"#\">Sharon Thomas</a> are also in Baby Step 3");
	} else if ( numOfFriendsInBabyStep1 == 3 ) {
		$("#friendsViewingBabyStep1").html("<a href=\"#\">Deborah Lee</a>, <a href=\"#\">Shirley Perez</a>, and 1 other friend are also in Baby Step 4");
	} else if ( numOfFriendsInBabyStep1 == 4 ) {
 		$("#friendsViewingBabyStep1").html("<a href=\"#\">Patricia Allen</a>, <a href=\"#\">Matthew Garcia</a>, and 2 other friends are also in Baby Step 5");
 	}
 	
 	if ( !numOfFriendsInBabyStep2 ) {
		$("#friendsViewingBabyStep2").html("");
	} else if ( numOfFriendsInBabyStep2 == 1 ) {
		$("#friendsViewingBabyStep2").html("<a href=\"#\">Paul Taylor</a> is also in Baby Step 2");
	} else if ( numOfFriendsInBabyStep2 == 2 ) {
		$("#friendsViewingBabyStep2").html("<a href=\"#\">Thomas Harris</a> and <a href=\"#\">Sharon Thomas</a> are also in Baby Step 3");
	} else if ( numOfFriendsInBabyStep2 == 3 ) {
		$("#friendsViewingBabyStep2").html("Deborah Lee, Shirley Perez, and 1 other friend are also in Baby Step 4");
	} else if ( numOfFriendsInBabyStep2 == 4 ) {
 		$("#friendsViewingBabyStep2").html("<a href=\"#\">Patricia Allen</a>, <a href=\"#\">Matthew Garcia</a>, and 2 other friends are also in Baby Step 5");
 	}
 	
 	if ( !numOfFriendsInBabyStep3 ) {
		$("#friendsViewingBabyStep3").html("");
	} else if ( numOfFriendsInBabyStep3 == 1 ) {
		$("#friendsViewingBabyStep3").html("<a href=\"#\">Paul Taylor</a> is also in Baby Step 2");
	} else if ( numOfFriendsInBabyStep3 == 2 ) {
		$("#friendsViewingBabyStep3").html("<a href=\"#\">Thomas Harris</a> and <a href=\"#\">Sharon Thomas</a> are also in Baby Step 3");
	} else if ( numOfFriendsInBabyStep3 == 3 ) {
		$("#friendsViewingBabyStep3").html("<a href=\"#\">Deborah Lee</a>, <a href=\"#\">Shirley Perez</a>, and 1 other friend are also in Baby Step 4");
	} else if ( numOfFriendsInBabyStep3 == 4 ) {
 		$("#friendsViewingBabyStep3").html("<a href=\"#\">Patricia Allen</a>, <a href=\"#\">Matthew Garcia</a>, and 2 other friends are also in Baby Step 5");
 	}
 	
 	if ( !numOfFriendsInBabyStep4 ) {
		$("#friendsViewingBabyStep4").html("");
	} else if ( numOfFriendsInBabyStep4 == 1 ) {
		$("#friendsViewingBabyStep4").html("<a href=\"#\">Paul Taylor</a> is also in Baby Step 2");
	} else if ( numOfFriendsInBabyStep4 == 2 ) {
		$("#friendsViewingBabyStep4").html("<a href=\"#\">Thomas Harris</a> and <a href=\"#\">Sharon Thomas</a> are also in Baby Step 3");
	} else if ( numOfFriendsInBabyStep4 == 3 ) {
		$("#friendsViewingBabyStep4").html("<a href=\"#\">Deborah Lee</a>, <a href=\"#\">Shirley Perez</a>, and 1 other friend are also in Baby Step 4");
	} else if ( numOfFriendsInBabyStep4 == 4 ) {
 		$("#friendsViewingBabyStep4").html("<a href=\"#\">Patricia Allen</a>, <a href=\"#\">Matthew Garcia</a>, and 2 other friends are also in Baby Step 5");
 	}
 	
 	if ( !numOfFriendsInBabyStep5 ) {
		$("#friendsViewingBabyStep5").html("");
	} else if ( numOfFriendsInBabyStep5 == 1 ) {
		$("#friendsViewingBabyStep5").html("<a href=\"#\">Paul Taylor</a> is also in Baby Step 2");
	} else if ( numOfFriendsInBabyStep5 == 2 ) {
		$("#friendsViewingBabyStep5").html("<a href=\"#\">Thomas Harris</a> and <a href=\"#\">Sharon Thomas</a> are also in Baby Step 3");
	} else if ( numOfFriendsInBabyStep5 == 3 ) {
		$("#friendsViewingBabyStep5").html("<a href=\"#\">Deborah Lee</a>, <a href=\"#\">Shirley Perez</a>, and 1 other friend are also in Baby Step 4");
	} else if ( numOfFriendsInBabyStep5 == 4 ) {
 		$("#friendsViewingBabyStep5").html("<a href=\"#\">Patricia Allen</a>, <a href=\"#\">Matthew Garcia</a>, and 2 other friends are also in Baby Step 5");
 	}
 	
 	if ( !numOfFriendsInBabyStep6 ) {
		$("#friendsViewingBabyStep6").html("");
	} else if ( numOfFriendsInBabyStep6 == 1 ) {
		$("#friendsViewingBabyStep6").html("<a href=\"#\">Paul Taylor</a> is also in Baby Step 2");
	} else if ( numOfFriendsInBabyStep6 == 2 ) {
		$("#friendsViewingBabyStep6").html("<a href=\"#\">Thomas Harris</a> and <a href=\"#\">Sharon Thomas</a> are also in Baby Step 3");
	} else if ( numOfFriendsInBabyStep6 == 3 ) {
		$("#friendsViewingBabyStep6").html("<a href=\"#\">Deborah Lee</a>, <a href=\"#\">Shirley Perez</a>, and 1 other friend are also in Baby Step 4");
	} else if ( numOfFriendsInBabyStep6 == 4 ) {
 		$("#friendsViewingBabyStep6").html("<a href=\"#\">Patricia Allen</a>, <a href=\"#\">Matthew Garcia</a>, and 2 other friends are also in Baby Step 5");
 	}
 	
 	if ( !numOfFriendsInBabyStep7 ) {
		$("#friendsViewingBabyStep7").html("");
	} else if ( numOfFriendsInBabyStep7 == 1 ) {
		$("#friendsViewingBabyStep7").html("<a href=\"#\">Paul Taylor</a> is also in Baby Step 2");
	} else if ( numOfFriendsInBabyStep7 == 2 ) {
		$("#friendsViewingBabyStep7").html("<a href=\"#\">Thomas Harris</a> and <a href=\"#\">Sharon Thomas</a> are also in Baby Step 3");
	} else if ( numOfFriendsInBabyStep7 == 3 ) {
		$("#friendsViewingBabyStep7").html("<a href=\"#\">Deborah Lee</a>, <a href=\"#\">Shirley Perez</a>, and 1 other friend are also in Baby Step 4");
	} else if ( numOfFriendsInBabyStep7 == 4 ) {
 		$("#friendsViewingBabyStep7").html("<a href=\"#\">Patricia Allen</a>, <a href=\"#\">Matthew Garcia</a>, and 2 other friends are also in Baby Step 5");
 	}
  	
});