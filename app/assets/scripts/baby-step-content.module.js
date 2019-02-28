((global, $, lodash) => {
    $.noConflict();
    global.PageController = PageController;
    return PageController;

    function PageController() {
        const BUTTON_TRIGGER_ENCODING = [ 13, 32 ];
        let activeTab;
        let navActiveClasses = 'active bg-white';
        let users;

        init();

        return {
            toggleActiveTab
        };

        function toggleActiveTab(anchorLink, sectionId) {
            removeActiveTabClass(activeTab);
            activeTab = $(anchorLink);

            const babyStep = global.parseInt(activeTab.data('step'));
            addDynamicSection(babyStep, sectionId);
            addActiveTabClass(anchorLink);
        }

        function addActiveTabClass(anchorLink) {
            $(anchorLink).addClass(navActiveClasses);
        }

        function removeActiveTabClass() {
            if(activeTab) {
                activeTab.removeClass(navActiveClasses);
            }
        }

        function init() {
            return getBabyStepFriends().then(() => {
                addHandlers();
                toggleActiveTab($('#bstep-nav-link-1'), '#bstep-1');
            });
        }

        function addHandlers() {
            $(global.document).ready(function () {
                // bind keydown event to nav
                const navigationIds = [1,2,3,4,5,6,7];

                navigationIds.forEach((navigationId) => {
                    const navElem = $(`#bstep-nav-link-${navigationId}`);
                    navElem.on("keyup", function(){
                        if (BUTTON_TRIGGER_ENCODING.indexOf(event.which) !== -1 ) {
                            toggleActiveTab(navigationId, `#bstep-${navigationId}`);
                        }
                    });
                });
            });
        }

        function getBabyStepFriends() {
            return $.get('/baby-steps.json')
                .then(response => {
                    users = response.friends;
                    return users;
                })
        }

        function addDynamicSection(babyStep, sectionId) {
            const content = createFriendsWatchComponent(babyStep);

            $(`${sectionId} .friends-watcher-container`).html(content);
        }

        function createFriendsWatchComponent(step) {
            let targetUsers = lodash.filter(users, (friend) => {
                return friend.babyStep === step;
            });
            
            if(!targetUsers || targetUsers.length < 1 ) return;

            let innerHtml = `also on this baby step.`;

            if(targetUsers.length === 1) {
                innerHtml = 
                `<aside role="complementary" class="inline" aria-label="You have a friend in this baby step.">
                    <a href="javascript:void(0)" class="no-underline text-blue">${targetUsers[0].firstName} ${targetUsers[0].lastName}</a> is ${innerHtml}
                </aside>`;
            } else {
                let extraFriends = '';
                let namedFriendsHtml = `
                    <span>
                        <a href="javascript:void(0)" class="no-underline text-blue">${targetUsers[0].firstName} ${targetUsers[0].lastName}</a>, 
                        <a href="javascript:void(0)" class="no-underline text-blue">${targetUsers[1].firstName} ${targetUsers[1].lastName}</a>
                    </span>`;

                if(targetUsers.length > 4){
                    extraFriends = `and ${targetUsers.length} other friends`;
                } else if(targetUsers.length === 3){
                    extraFriends = `and 1 other friend`;
                }

                innerHtml = 
                `<aside role="complementary" class="inline" aria-label="You have friends in this baby step.">
                    ${namedFriendsHtml} ${extraFriends} are ${innerHtml}
                </aside>`;
            }
            return innerHtml;
        }
    }

})(window, window.jQuery, window._);