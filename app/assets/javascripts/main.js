(function($){
  console.log('main.js loaded');
  var babyStepsList    = document.querySelector('.baby-steps__list').children;
  var babyStepsContent = document.querySelector('.baby-steps__content').children;
  function loopThroughBabyStepsAndMakeAssignments() {
    for (i=0;i<babyStepsList.length;i++) {
      var childListItem  = babyStepsList[i];
      var childParagraph = babyStepsContent[i];
      assignIdToBabyStepsParagraph(childParagraph, i);
      assignIdToBabyStepsListItemAndHideRelatedContent(childListItem, i);
      assignClickHandlerToListItem(childListItem);
    }
  }
  function assignIdToBabyStepsListItemAndHideRelatedContent(li, idx) {
    li.id = 'baby-step-list-' + idx;
    if (!li.classList.contains('selected')) {
      jQuery('#baby-step-p-' + idx).hide()
    }
  }
  function assignIdToBabyStepsParagraph(p, idx) {
    p.id = 'baby-step-p-' + idx;
  }
  function assignClickHandlerToListItem(li) {
    li.onclick = makeClickedItemSelectedAndShowRelatedContent;
  }
  function makeClickedItemSelectedAndShowRelatedContent(e) {
    if (e.target.classList.contains('selected')) {
      return;
    } else {
      hidePreviouslySelectedContent();
      removeAllSelectedClasses();
      e.target.classList.add('selected');
      showRelatedContent(e.target);
    }
  }
  function removeAllSelectedClasses(element) {
    for (i=0;i<babyStepsList.length;i++) {
      babyStepsList[i].classList.remove('selected');
    }
  }
  function showRelatedContent(element) {
    var id = element.id;
    var relatedElement = jQuery('#baby-step-p-' + id.slice(-1));
    relatedElement.slideDown();
  }
  function hidePreviouslySelectedContent() {
    var selected = document.querySelector('.selected');
    var id = selected.id;
    jQuery('#baby-step-p-' + id.slice(-1)).slideUp();
  }
  return loopThroughBabyStepsAndMakeAssignments();
})(jQuery);
