(function ($) {
    $(document).ready(function() {
        var tabControls = $(document.getElementById("stepsTabs")),
            tabControlList = tabControls.find(".Tabs-control"),
            indicator = $("<div class='Tabs-indicator' />").prependTo(tabControls),
            tabsContainer = $(document.getElementById("stepsPanels")),
            tabsPanelList = tabsContainer.find(".Tabs-panelList"),
            tabPanels = tabsContainer.find(".Tabs-panel");

        var switchPanels = function (e) {
            e.preventDefault();

            var elem = $(e.target);

            if (elem.hasClass("is-selected")) {
                return;
            }

            var destination, duration,
                position = elem.position().top,
                prevPanel = tabsContainer.find(".is-visible"),
                prevHeight = prevPanel.height(),
                nextPanel = $(elem.attr("href")),
                nextHeight = nextPanel.height(),
                containerHeight = (nextHeight > prevHeight) ? nextHeight : prevHeight;

            tabsContainer.height(containerHeight);
            tabsContainer.addClass("is-animating");
            tabPanels.addClass("is-visible");

            destination = nextPanel.position().top;
            duration = (Math.abs(prevPanel.position().top - destination) / 10) + 300;

            tabsPanelList.velocity("stop")
                .velocity({"top": -destination}, duration, function () {
                    tabsContainer.removeClass("is-animating");
                    tabPanels.removeClass("is-visible");
                    prevPanel.attr("aria-hidden", true);
                    nextPanel.addClass("is-visible")
                        .attr("aria-hidden", false);
                });

            tabControls.find(".is-selected")
                .removeClass("is-selected")
                .attr("aria-selected", false);

            indicator.addClass("is-visible")
                .velocity("stop")
                .velocity({"top": position}, duration, function () {
                    elem.addClass("is-selected")
                        .attr("aria-selected", true);
                });
        };

        tabControlList.on("keypress", function (e) {
            if (e.keyCode === 32) {
                switchPanels(e);
            }
        }).on("click", switchPanels);
    });

    var displayFriends = function (data) {
        var friendsByStep = _.chain(data.friends)
            .groupBy("babyStep")
            .value();

        _.forEach(friendsByStep, function (step, key) {
            var friendsList = "<p class='u-footer'>",
                friendName = function (friend) {
                    return "<a href='#'>" +
                        friend.firstName + " " + friend.lastName +
                        "</a>";
                };

            if (step.length > 0) {
                switch (step.length) {
                    case 1:
                        friendsList = friendsList + friendName(step[0]) + " is";
                        break;
                    case 2:
                        friendsList = friendsList + friendName(step[0]) +
                            " and " + friendName(step[1]) + " are";
                        break;
                    case 3:
                        friendsList = friendsList + friendName(step[0]) + ", " + friendName(step[1]) +
                            " and 1 other friend are";
                        break;
                    default:
                        friendsList = friendsList + friendName(step[0]) + ", " + friendName(step[1]) +
                            " and " + (step.length - 2) + " other friends are";
                }

                friendsList = friendsList + " also in Baby Step " + key + "</p>";
                $(document.getElementById("stepsPanel" + key)).append(friendsList);
            }
        });
    };

    $.ajax({
      dataType: "json",
      url: "assets/javascripts/baby-steps.json",
    }).then(displayFriends);
}(jQuery));
