// (function($){
  console.log('main.js loaded');
  var babyStepsList    = document.querySelector('.baby-steps__list').children;
  var babyStepsContent = document.querySelector('.baby-steps__content').children;
  function loopThroughBabyStepsAndAssignIds() {
    for (i=0;i<babyStepsList.length;i++) {
      console.log(i);
      var childListItem  = babyStepsList;
      var childParagraph = babyStepsContent;
      assignIdToBabyStepsListItem(childListItem[i], i);
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
// })(jQuery)
