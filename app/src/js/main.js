(() => {
  // cache some things
  const container = document.body.querySelector('.l-container');
  const navItems = document.body.querySelectorAll('.c-main-nav__list-item__link');
  const navList = document.body.querySelector('.c-main-nav__list');
  const navItemOn = document.body.querySelector('.c-main-nav__on');
  const onStateClass = 'c-main-nav__list-item__link--on';
  const content = document.body.querySelector('.c-content');
  const contentMask = document.body.querySelector('.c-content__mask');
  const contentScroll = document.body.querySelector('.c-content__scroll');
  const contentSections = document.body.querySelectorAll('.c-content__scroll__section');
  const defaultHash = 'baby-step-1';
  const contentSectionHeights = [];
  let tabbing = false;

  // default URL to baby step 1 on load/reload
  const resetURL = () => {
    location.hash = defaultHash;
  };

  // get the height for each baby step content section, push to an array and set baby step 1 box height. this will accommodate changes to content.
  const getSectionHeights = () => {
    setTimeout(() => {
      [].forEach.call(contentSections, function (item, i) {
        contentSectionHeights.push(contentSections.item(i).offsetHeight);
      });
      contentMask.style.height = `${contentSectionHeights[0]}px`;
    }, 200);
  };

  // clear nav on state upon each selection
  const clearOnState = () => {
    [].forEach.call(navItems, function (item) {
      if (item.classList.contains(onStateClass))
        item.classList.remove(onStateClass);
    });
  };

  // move the on state background elm
  const calcOnStatePosition = (val) => {
    let i = val - 1;
    let nacItemHeight = navItemOn.offsetHeight;
    let stepNum = val;
    let multiplier = stepNum - 1;
    let pixels = `${nacItemHeight * multiplier}px`;

    // move the nav on state background and dynamically set the height of the masking div to accommodate content within each baby step
    switch (stepNum) {
      case 2:
        navItemOn.style.top = pixels;
        contentMask.style.height = `${contentSectionHeights[i]}px`;
        break;
      case 3:
        navItemOn.style.top = pixels;
        contentMask.style.height = `${contentSectionHeights[i]}px`;
        break;
      case 4:
        navItemOn.style.top = pixels;
        contentMask.style.height = `${contentSectionHeights[i]}px`;
        break;
      case 5:
        navItemOn.style.top = pixels;
        contentMask.style.height = `${contentSectionHeights[i]}px`;
        break;
      case 6:
        navItemOn.style.top = pixels;
        contentMask.style.height = `${contentSectionHeights[i]}px`;
        break;
      case 7:
        navItemOn.style.top = pixels;
        contentMask.style.height = `${contentSectionHeights[i]}px`;
        break;
      default:
        navItemOn.removeAttribute('style');
    }
  };

  // set the nav on state 
  const addOnState = (event) => {
    let target = event.target;
    if (target.tagName != 'A') return;
    let url = target.href;
    let stepNum = parseInt(url.substring(url.length - 1, url.length));
    clearOnState();
    calcOnStatePosition(stepNum);
    target.classList.add(onStateClass);
  };

  // primary event listeners
  window.addEventListener('load', resetURL);
  window.addEventListener('DOMContentLoaded', getSectionHeights);
  navList.addEventListener('click', addOnState, false);

  // dynamic data
  const request = new XMLHttpRequest();
  request.open('GET', 'baby-steps.json', true);
  request.onload = function () {
    const data = JSON.parse(this.response);
    if (request.status >= 200 && request.status < 400) {
      const list = [];
      data.friends.map((e) => {
        list.push(e);
      });

      // sort friends list by baby step, then last name
      list.sort((a, b) => {
        if (a.babyStep < b.babyStep) return -1;
        if (a.babyStep > b.babyStep) return 1;
        if (a.lastName > b.lastName) return 1;
        if (a.lastName < b.lastName) return -1;
      });

      // compile friends message for each baby step section
      const composeMsg = (item, index) => {
        let step = index + 1;
        let section = item;
        let print;
        list.filter(obj => {
          return obj.babyStep === step;
        }).map((e, i, arr) => {
          if (i === 0) {
            print = `<a href="#">${e.firstName} ${e.lastName}</a>`;
            if (arr.length === 1)
              print += ' is also in Baby Step ';
            if (arr.length === 2)
              print += ' and ';
            if (arr.length >= 3)
              print += ', ';
          }
          if (i === 1) {
            print += `<a href="#">${e.firstName} ${e.lastName}</a>`;
            if (arr.length === 2)
              print += ' are also in Baby Step ';
          }
          if (i === 2)
            print += `, and ${arr.length - 2} other friend${(arr.length - 2 > 1) ? 's' : ''} are also in Baby Step `;
          if (i === arr.length - 1)
            print += step;
        });
        if (print)
          displayMsg(section, print);
      };

      // create the dom elements and insert the messages 
      const displayMsg = (section, msg) => {
        let msgElm = document.createElement('p');
        msgElm.classList.add('c-content__scroll__section__friends');
        msgElm.innerHTML = msg;
        section.appendChild(msgElm);
      };

      // loop through section html elms and compose the friends messages for each baby step
      [].forEach.call(contentSections, function (item, i) {
        composeMsg(item, i);
      });
    }
  };
  request.send();

  // accessibility features
  // ******************************************************************

  // expand layout when tabbing to prevent keyboard trap, return to default state when clicking resumes
  const toggleTabbingLayout = () => {
    if (tabbing) {
      container.classList.add('tabbing');
      content.classList.add('tabbing');
      contentMask.classList.add('tabbing');
      contentScroll.classList.add('tabbing');
    } else {
      container.classList.remove('tabbing');
      content.classList.remove('tabbing');
      contentMask.classList.remove('tabbing');
      contentScroll.classList.remove('tabbing');
    }
  };

  // detect navigation with keyboard
  document.addEventListener('keyup', function (event) {
    var key = event.key || event.keyCode;
    if (key === 9 || key === 'Tab') {
      tabbing = true;
      toggleTabbingLayout();
    }
  });

  // detect navigation with mouse
  navList.addEventListener('mouseup', function () {
    tabbing = false;
    toggleTabbingLayout();
  }, false);
})();