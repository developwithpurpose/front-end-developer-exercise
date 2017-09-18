// (function($){
  console.log('main.js loaded');
  var babyStepsList    = document.querySelector('.baby-steps__list').children;
  var babyStepsContent = document.querySelector('.baby-steps__content').children;
  function loopThroughBabyStepsAndMakeAssignments() {
    for (i=0;i<babyStepsList.length;i++) {
      var childListItem  = babyStepsList;
      var childParagraph = babyStepsContent;
      assignIdToBabyStepsListItem(childListItem[i], i);
      assignClickHandlerToListItem(childListItem[i]);
      assignIdToBabyStepsParagraph(childParagraph[i], i);
    }
  }
  function assignIdToBabyStepsListItem(li, idx) {
    console.log(li);
    li.id = 'baby-step-list-' + idx;
  }
  function assignIdToBabyStepsParagraph(p, idx) {
    p.id = 'baby-step-p-' + idx;
  }
  function assignClickHandlerToListItem(li) {
    li.onclick = makeClickedItemSelected;
  }
  function makeClickedItemSelected(e) {
    if (e.target.classList.contains('selected')) {
      return;
    } else {
      for (i=0;i<babyStepsList.length;i++) {
        babyStepsList[i].classList.remove('selected');
      }
      e.target.classList.add('selected');
    }
  }
// })(jQuery)
