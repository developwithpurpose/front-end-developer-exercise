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
            tabPanels.addClass("is-visible");

            destination = nextPanel.position().top;
            duration = (Math.abs(prevPanel.position().top - destination) / 10) + 300;

            tabsPanelList.addClass("is-animating")
                .velocity({"top": -destination}, duration, function () {
                    tabsPanelList.removeClass("is-animating");
                    tabPanels.removeClass("is-visible");
                    prevPanel.attr("aria-hidden", true);
                    nextPanel.addClass("is-visible")
                        .attr("aria-hidden", false);
                });

            tabControls.find(".is-selected")
                .removeClass("is-selected")
                .attr("aria-selected", false);
            indicator.addClass("is-visible")
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
}(jQuery));
