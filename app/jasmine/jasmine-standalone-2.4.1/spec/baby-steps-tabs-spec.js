describe("baby steps tabs suite", function() {

    var fixture = $(readFixtures('baby-steps-tabs.html'));
    var jsonFixture = getJSONFixture('baby-steps.json');
    var testTabsComponent = window.DaveRamsey.babyStepsTabs(fixture);
    var t1 = fixture.find("#step1Tab");
    var t3 = fixture.find("#step3Tab");
    var t4 = fixture.find("#step4Tab");

    it("activateTab1 fn", function() {

        testTabsComponent.activateTab1();
        expect(t1).toHaveClass("active");
    });

    it("setAccessibilityAttributes fn", function() {

        testTabsComponent.setAccessibilityAttributes(t3);
        expect(t3).toHaveAttr("aria-selected", "true");
        expect(t1).toHaveAttr("aria-selected", "false");
    	expect(t1.next(".content")).toHaveAttr("aria-hidden", "true");
    });

    it("getFriendStepSummary & appendSummariesToDom fn's", function() {

        var summary = testTabsComponent.appendSummariesToDom(jsonFixture["friends"]);
        var footerCnt = fixture.find("footer").length;

    	expect(footerCnt).toEqual(6);
    	expect(t4.next(".content").find("footer p")).toHaveText("Deborah Lee, Shirley Perez, and 1 other friend are also in Baby Step 4");
    });

    it("initStartingTab fn", function() {

    	t1.removeClass('active');
        testTabsComponent.initStartingTab();
        expect(t1).toHaveClass("active");
    });

    it("handleTabClicks fn", function() {

        testTabsComponent.handleTabClicks();
        t4.click();
        expect(t4).toHaveAttr("aria-selected", "true");
        expect(t3).toHaveAttr("aria-selected", "false");
        expect(t3.next(".content")).toHaveAttr("aria-hidden", "true");
    });
});