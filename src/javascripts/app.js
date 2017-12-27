(function (window, document, undefined) {
  var $ = document.querySelector.bind(document);
  var $$ = document.querySelectorAll.bind(document);

  var articleFooter = $$('.footer__article');

  Node.prototype.on = window.on = function (name, fn) {
    this.addEventListener(name, fn);
  };

  NodeList.prototype.__proto__ = Array.prototype; // __proto__ is deprecated but it's here for older models in case

  NodeList.prototype.on = NodeList.prototype.addEventListener = function (name, fn) {
    this.forEach( function (elem) {
      elem.on(name, fn);
    });
  };

  var forEach = function (array, callback, scope) {
      for (i = 0; i < array.length; i++) {
          callback.call(scope, i, array[i]);
      }
  };

  function animateScroll() {
    var navLinks = $$('.nav__item a');
    var anchorTag = $$('a');

    function preventDefaultAnchor(e) {
      e.preventDefault();
    }

    forEach(anchorTag, function (index) {
      anchorTag[index].addEventListener('click', preventDefaultAnchor);
    });

    var scrollArea = $('.container__article');

    navLinks[0].addEventListener('click', function (e) {
      TweenLite.to(scrollArea, 1.5, {scrollTo: '#babyStep1', ease: Expo.easeOut});
    });
    navLinks[1].addEventListener('click', function (e) {
      TweenLite.to(scrollArea, 1.5, {scrollTo: '#babyStep2', ease: Expo.easeOut});
    });
    navLinks[2].addEventListener('click', function (e) {
      TweenLite.to(scrollArea, 1, {scrollTo: {y: '#babyStep3', ease: Expo.easeOut}});
    });
    navLinks[3].addEventListener('click', function (e) {
      TweenLite.to(scrollArea, 1, {scrollTo: {y: '#babyStep4', ease: Expo.easeOut}});
    });
    navLinks[4].addEventListener('click', function (e) {
      TweenLite.to(scrollArea, 1, {scrollTo: {y: '#babyStep5', ease: Expo.easeOut}});
    });
    navLinks[5].addEventListener('click', function (e) {
      TweenLite.to(scrollArea, 1, {scrollTo: {y: '#babyStep6', ease: Expo.easeOut}});
    });
    navLinks[6].addEventListener('click', function (e) {
      TweenLite.to(scrollArea, 1, {scrollTo: {y: '#babyStep7', ease: Expo.easeOut}});
    });
  }

  function ajaxRequest(url, callback) {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
      if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        console.log('Response Text: ' + xmlhttp.responseText);

        try {
          var data = JSON.parse(xmlhttp.responseText);
        } catch (err) {
          console.log(err.message + " in " + xmlhttp.responseText);
          return;
        }
        callback(data);
      }
    };

    xmlhttp.open('GET', url, true);
    xmlhttp.send();
  }

  window.onload = function () {
    animateScroll();
    ajaxRequest('../app/baby-steps.json', function (data) {
      var friends = data.friends;

      var babyStepMap = _.map(friends, 'babyStep');
      var babyStepCount = _.countBy(babyStepMap, function (c) {
        return Math.ceil(c);
      });
      var babyStepGroup = _.groupBy(friends, 'babyStep');

      var bbsCountArray = [];
      var bbsGroupArray = [];

      bbsCountArray.push(Object.keys(babyStepCount));
      bbsGroupArray.push(babyStepGroup);

      var babyStep2Group = bbsGroupArray[0][2].slice(0);
      var babyStep3Group = bbsGroupArray[0][3].slice(0);
      var babyStep4Group = bbsGroupArray[0][4].slice(0);
      var babyStep5Group = bbsGroupArray[0][5].slice(0);
      var babyStep6Group = bbsGroupArray[0][6].slice(0);
      var babyStep7Group = bbsGroupArray[0][7].slice(0);

      articleFooter[1].innerHTML = '<p>' + '<a href="#">' + babyStep2Group[0].firstName + ' ' + babyStep2Group[0].lastName + '</a>' + ' and ' + (bbsCountArray[0][0] - 2) + ' Other friends are on this step' + '</p>';

      articleFooter[2].innerHTML = '<p>' + '<a href="#">' + babyStep3Group[0].firstName + ' ' + babyStep3Group[0].lastName + '</a>' + ', ' + '<a href="#">' + babyStep3Group[1].firstName + ' ' + babyStep3Group[1].lastName + '</a>' + ' and ' + (bbsCountArray[0][1] - 3) + ' Other friends are on this step' + '</p>';

      articleFooter[3].innerHTML = '<p>' + '<a href="#">' + babyStep4Group[0].firstName + ' ' + babyStep4Group[0].lastName + '</a>' + ', ' + '<a href="#">' + babyStep4Group[1].firstName + ' ' + babyStep4Group[1].lastName + '</a>' + ' and ' + (bbsCountArray[0][2] - 3) + ' Other friends are on this step' + '</p>';

      articleFooter[4].innerHTML = '<p>' + '<a href="#">' + babyStep5Group[0].firstName + ' ' + babyStep5Group[0].lastName + '</a>' + ', ' + '<a href="#">' + babyStep5Group[1].firstName + ' ' + babyStep5Group[1].lastName + '</a>' + ' and ' + (bbsCountArray[0][3] - 3) + ' Other friends are on this step' + '</p>';

      articleFooter[5].innerHTML = '<p>' + '<a href="#">' + babyStep6Group[0].firstName + ' ' + babyStep6Group[0].lastName + '</a>' + ', ' + '<a href="#">' + babyStep6Group[1].firstName + ' ' + babyStep6Group[1].lastName + '</a>' + ' and ' + (bbsCountArray[0][4] - 3) + ' Other friends are on this step' + '</p>';

      articleFooter[6].innerHTML = '<p>' + '<a href="#">' + babyStep7Group[0].firstName + ' ' + babyStep7Group[0].lastName + '</a>' + ', ' + '<a href="#">' + babyStep7Group[1].firstName + ' ' + babyStep7Group[1].lastName + '</a>' + ' and ' + (bbsCountArray[0][5] - 3) + ' Other friends are on this step' + '</p>';
    });
  };
}(window, document));
