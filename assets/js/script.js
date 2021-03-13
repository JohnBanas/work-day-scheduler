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

  //create work-day hours am/pm in full array
  let fullDay = [
    {
      id: "0",
      hour: "12",
      minutes: ["00", "15", "30", "45"],
      ampm: "am",
      text: ""
    },
    {
      id: "1",
      hour: "01",
      minutes: ["00", "15", "30", "45"],
      ampm: "am",
      text: ""
    },
    {
      id: "2",
      hour: "02",
      minutes: ["00", "15", "30", "45"],
      ampm: "am",
      text: ""
    },
    {
      id: "3",
      hour: "03",
      minutes: ["00", "15", "30", "45"],
      ampm: "am",
      text: ""
    },
    {
      id: "4",
      hour: "04",
      minutes: ["00", "15", "30", "45"],
      ampm: "am",
      text: ""
    },
    {
      id: "4",
      hour: "04",
      minutes: ["00", "15", "30", "45"],
      ampm: "am",
      text: ""
    },
    {
      id: "5",
      hour: "05",
      minutes: ["00", "15", "30", "45"],
      ampm: "am",
      text: ""
    },
    {
      id: "6",
      hour: "06",
      minutes: ["00", "15", "30", "45"],
      ampm: "am",
      text: ""
    },
    {
      id: "7",
      hour: "07",
      minutes: ["00", "15", "30", "45"],
      ampm: "am",
      text: ""
    },
    {
      id: "8",
      hour: "08",
      minutes: ["00", "15", "30", "45"],
      ampm: "am",
      text: ""
    },
    {
      id: "9",
      hour: "09",
      minutes: ["00", "15", "30", "45"],
      ampm: "am",
      text: ""
    },
    {
      id: "10",
      hour: "10",
      minutes: ["00", "15", "30", "45"],
      ampm: "am",
      text: ""
    },
    {
      id: "11",
      hour: "11",
      minutes: ["00", "15", "30", "45"],
      ampm: "am",
      text: ""
    },
    {
      id: "12",
      hour: "12",
      minutes: ["00", "15", "30", "45"],
      ampm: "pm",
      text: ""
    },
    {
      id: "13",
      hour: "01",
      minutes: ["00", "15", "30", "45"],
      ampm: "pm",
      text: ""
    },
    {
      id: "14",
      hour: "02",
      minutes: ["00", "15", "30", "45"],
      ampm: "pm",
      text: ""
    },
    {
      id: "15",
      hour: "03",
      minutes: ["00", "15", "30", "45"],
      ampm: "pm",
      text: ""
    },
    {
      id: "16",
      hour: "04",
      minutes: ["00", "15", "30", "45"],
      ampm: "pm",
      text: ""
    },
    {
      id: "17",
      hour: "05",
      minutes: ["00", "15", "30", "45"],
      ampm: "pm",
      text: ""
    },
    {
      id: "18",
      hour: "06",
      minutes: ["00", "15", "30", "45"],
      ampm: "pm",
      text: ""
    },
    {
      id: "19",
      hour: "07",
      minutes: ["00", "15", "30", "45"],
      ampm: "pm",
      text: ""
    },
    {
      id: "20",
      hour: "08",
      minutes: ["00", "15", "30", "45"],
      ampm: "pm",
      text: ""
    },
    {
      id: "21",
      hour: "09",
      minutes: ["00", "15", "30", "45"],
      ampm: "pm",
      text: ""
    },
    {
      id: "22",
      hour: "10",
      minutes: ["00", "15", "30", "45"],
      ampm: "pm",
      text: ""
    },
    {
      id: "23",
      hour: "11",
      minutes: ["00", "15", "30", "45"],
      ampm: "pm",
      text: ""
    }
  ];

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

//need to check time zone of individual using website

/* extras if possible?
1- can the user adjust the time of the work day?
2- can the user choose 1/2 hour or 1/4 hour time increments?
3- can they adjust the colors of past present future time blocks?
4- if a event takes up more than one time block can they be put togther into one large text area,
and the time be changed? example = 7:30 - 8:30? */

