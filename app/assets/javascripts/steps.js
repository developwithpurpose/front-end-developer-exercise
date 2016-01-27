(function()
{
        init = function() {
            $('#stepList li').first().addClass('active');
            setupNavListeners();
            loadStepContent(true);
        };

        setupNavListeners = function() {
            $('#stepList li').click(function(e) {
                e.preventDefault();
                $('#stepList li').removeClass('active');
                $(this).addClass('active');

                loadStepContent();
            });
        };
        /* @param shouldQueryFriends - boolean indicating whether to query friends data or not. Defaults to false. This is mainly for if
                    the friend data may have changed since the last query
         */
        loadStepContent = function(shouldQueryFriends) {
            shouldQueryFriends = shouldQueryFriends || false;

            var activeStep = $('#stepList').find('li.active').first(),
                stepNum = activeStep.attr('data-babystep'),
                stepText = $('div[data-babystep=' + stepNum + ']').first();

                $('#stepContent div').toggle(false);
                stepText.toggle(1500, function() {
                    if (shouldQueryFriends === true) {
                        queryFriendData();
                    }
                });
        };

        queryFriendData = function() {
            $.ajax({
                url: "../baby-steps.json",
                dataType: 'json',
                success: function(data) {
                    return loadFriendData(data);
                },
                error: function(errorMsg) {
                    return loadFriendErrorHandler(errorMsg)
                }
            });
        };

        loadFriendData = function(friends) {
            var babySteps = {};
            //first group friends by babyStep
            $.each(friends.friends, function(idx, friend) {
                var stepArr = babySteps[friend.babyStep] = babySteps[friend.babyStep] || [];
                stepArr.push(friend);
            });
            //then sort the friends in each step by lastName ASC
            for (var key in babySteps) {
                if (babySteps.hasOwnProperty(key)) {
                    babySteps[key].sort(function(a,b) {
                        var lname1 = a.lastName.toLowerCase() || '',
                            lname2 = b.lastName.toLowerCase() || '';
                        if (lname1 < lname2) return -1;
                        if (lname1 > lname2) return 1;
                        //instead of returning zero, fall back to first name
                        var fname1 = a.firstName.toLowerCase() || '',
                            fname2 = b.firstName.toLowerCase() || '';
                        if (fname1 < fname2) return -1;
                        if (fname1 > fname2) return 1;
                        return 0;
                    });
                    //for each step, add the list of friends to the corresponding stepContent
                    appendFriendData(key, babySteps[key]);
                }
            }
        };

        loadFriendErrorHandler = function(msg) {
            console.log(msg);
        };

        appendFriendData = function(stepNum, friends) {
            var stepContent = $('div[data-babystep=' + stepNum + ']').first(),
                friendNames = [],
                str = '',
                name = '';

            $.each(friends, function(index, friend) {
                name = friend.firstName + ' ' + friend.lastName;
                friendNames.push('<a href="#">' + name + '</a>');
            });
            switch(friends.length) {
                case 0:
                    return;
                case 1:
                    str = formatString('{0} is also in Baby Step {1}', [friendNames[0], stepNum + '']);
                    break;
                case 2:
                    str = formatString('{0} and {1} are also in Baby Step {2}', [friendNames[0], friendNames[1], stepNum]);
                    break;
                case 3:
                    str = formatString('{0} and 1 other friend are also in Baby Step {1}', [[friendNames[0], friendNames[1]].join(', '), stepNum]);
                    break;
                default:
                    str = formatString('{0} and 2 other friends are also in Baby Step {1}', [[friendNames[0], friendNames[1]].join(', '), stepNum]);
                    break;
            }
            stepContent.html(stepContent.html() + '<h4 class="friendList">' + str + '</h4>');
        };

        formatString = function(str, args) {
            return str.replace(/\{\{|\}\}|\{(\d+)\}/g, function (m, n) {
                if (m == "{{") { return "{"; }
                if (m == "}}") { return "}"; }
                return args[n];
            });
        };
    if (window.addEventListener) {
        window.addEventListener('DOMContentLoaded', init, false);
    }
})();