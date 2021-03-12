//document ready
$(function () {
  //moment time
  let currentDay = ""; 

  //navbar subtitle
  changeTime = () => {
    currentDay = moment().format('MMMM Do YYYY, hh:mm:ss a');
    let $subtitle = $('#currentDay');
    $subtitle.text(currentDay);
  }
  setInterval(changeTime, 1000);
  
  //create work-day hours am/pm

  //create non-work-day hours am/pm

  //check localStorage for timeBlock data and if there create <div> if not make empty []

  //iterate through hours, if work day hours create <div>

  //<div> needs to be able to change color based on if the hour is past, present, or future

  //create container for elements of <div>

  //put workday hours in left side (on md lg size, on sm left underneath)

  //input text box in center (in between on lg md, on top of buttons on sm)

  //save button on right side (on sm underneath right)

  //<div> is pushed to timeBlock array with its data

  //when input text in <div> is clicked the text data can be changed, if they click off the input, reverts back 

  //after any changes, save to local storage
});

/* extras if possible?
1- can the user adjust the time of the work day?
2- can the user choose 1/2 hour or 1/4 hour time increments?
3- can they adjust the colors of past present future time blocks?
4- if a event takes up more than one time block can they be put togther into one large text area,
and the time be changed? example = 7:30 - 8:30? */

