 var parsedJson;

        function PopulateDocument(fa) {
            var totalArr = new Array();
            let arr1 = new Array();
            let arr2 = new Array();
            let arr3 = new Array();
            let arr4 = new Array();
            let arr5 = new Array();
            let arr6 = new Array();
            let arr7 = new Array();

            for (i = 0; i < fa.length; i++) {
                switch (fa[i].currStep) {
                    case 1:
                        arr1.push(fa[i]);
                        break;
                    case 2:
                        arr2.push(fa[i]);
                        break;
                    case 3:
                        arr3.push(fa[i]);
                        break;
                    case 4:
                        arr4.push(fa[i]);
                        break;
                    case 5:
                        arr5.push(fa[i]);
                        break;
                    case 6:
                        arr6.push(fa[i]);
                        break;
                    case 7:
                        arr7.push(fa[i]);
                        break;
                };
                totalArr.push(arr1, arr2, arr3, arr4, arr5, arr6, arr7);
            };

            for (j = 0; j < totalArr.length; j++) {

                if (totalArr[j].length == 0) {
                    // Do Nothing
                } else if (totalArr[j].length == 1) {
                    let name = totalArr[j][0].firstName + " " + totalArr[j][0].lastName;
                    let nameLink = document.createElement('a');
                    nameLink.innerHTML = name;
                    $('#friends' + (j + 1)).append(nameLink, " is also in Baby Step 2");
                } else if (totalArr[j].length == 2) {
                    let name = totalArr[j][0].firstName + " " + totalArr[j][0].lastName;
                    let name2 = totalArr[j][0].firstName + " " + totalArr[j][1].lastName;
                    let nameLink = document.createElement('a');
                    nameLink.innerHTML = name;
                    let nameLink2 = document.createElement('a');
                    nameLink2.innerHTML = name2;
                    $('#friends' + (j + 1)).append(nameLink, " and ", nameLink2, " is also in Baby Step 3");
                } else if (totalArr[j].length == 3) {
                    let name = totalArr[j][0].firstName + " " + totalArr[j][0].lastName;
                    let name2 = totalArr[j][0].firstName + " " + totalArr[j][1].lastName;
                    let nameLink = document.createElement('a');
                    nameLink.innerHTML = name;
                    let nameLink2 = document.createElement('a');
                    nameLink2.innerHTML = name2;
                    $('#friends' + (j + 1)).append(nameLink, ", ", nameLink2, ", and 1 other friend is also in Baby Step 4");
                } else if (totalArr[j].length >= 4) {
                    let name = totalArr[j][0].firstName + " " + totalArr[j][0].lastName;
                    let name2 = totalArr[j][0].firstName + " " + totalArr[j][1].lastName;
                    let nameLink = document.createElement('a');
                    nameLink.innerHTML = name;
                    let nameLink2 = document.createElement('a');
                    nameLink2.innerHTML = name2;
                    $('#friends' + (j + 1)).append(nameLink, ", ", nameLink2, ", and ", totalArr[j].length - 2, " other friend is also in Baby Step ", j + 1);
                }

            };



        };


        var friendsArray = new Array();

        function LoadFriends(friendsObj) {
            for (i = 0; i < friendsObj.friends.length; i++) {
                let temp = {};
                temp.firstName = friendsObj.friends[i].firstName;
                temp.lastName = friendsObj.friends[i].lastName;
                temp.currStep = friendsObj.friends[i].babyStep;
                friendsArray.push(temp);
            };
            PopulateDocument(friendsArray);
        }

        $(document).ready(function() {
            $.ajax({
                type: 'GET',
                dataType: "json",
                url: "baby-steps.json",
                success: function(data) {
                    var friendsObj = JSON.parse(JSON.stringify(data));
                    LoadFriends(friendsObj);

                },
                error: function(er) {
                    console.log(er);
                }
            });

        });