$(document).ready(() => {
  getBabyStepData();
});

const getBabyStepData = () => {
  $.ajax({
    dataType: 'json',
    url: '../baby-steps.json',
    success: handleAjaxData
  });
}

const handleAjaxData = (data) => {
  console.log(data);
  const d = data.friends;
  for(let i = 0; i < d.length; i++){
    const n = d[i].firstName + " " + d[i].lastName;
    const bs = d[i].babyStep;
    if(bs === 2)
      $('#baby-step-2').find('.target-user').append("<a href='#'>" + n + "</a>");
    else if (bs === 3)
      $('#baby-step-3').find('.target-user').append("<a href='#'>" + n + "</a>");
    else if (bs === 4)
      $('#baby-step-4').find('.target-user').append("<a href='#'>" + n + "</a>");
    else if (bs === 5)
      $('#baby-step-5').find('.target-user').append("<a href='#'>" + n + "</a>");
    else if (bs === 6)
      $('#baby-step-6').find('.target-user').append("<a href='#'>" + n + "</a>");
    else
      $('#baby-step-7').find('.target-user').append("<a href='#'>" + n + "</a>");
  }
}
