//document ready
$(function () {
  //moment time
  const currentDay = moment().format('MMMM Do YYYY');

  //navbar subtitle
  let $subtitle = $('#currentDay');
  $subtitle.text(currentDay);


});


/* add <ul> in HTML to hold <li> input for time blocks
for standard business day (in javascript)
three parts to each <li> :
-1 time on the left (make that the data index?)
-2 text input in the center
-3 save button on the right end */

//create array for <li>

/* The time is checked on each time block and color
coded to label it past, present, and future */

/* you can edit time-block event text */

/* when save button is clicked the event is saved in local storage */

