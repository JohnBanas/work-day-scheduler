//document ready
$(function () {
  //moment time
  let currentDay = moment().format('MMMM Do YYYY, hh:mm a');

  //navbar subtitle sets current day/time and updates dynamically
  changeTime = () => {
    currentDay = moment().format('MMMM Do YYYY, hh:mm a');
    let $subtitle = $('#currentDay');
    $subtitle.text(currentDay);
  }
  setInterval(changeTime, 1000);

  //create all hours am/pm in full array
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
  let hoursAM = [
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
    }
  ];
  let hoursPM = [
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

  //10 hour work day container array
  let workDayHours = [];

  //allow user to change the integers in this workday function
  workDay = () => {
    fullDay.forEach(function (e) {
      if (e.id >= 9 && e.ampm === 'am' || e.id <= 18 && e.ampm === 'pm') {
        workDayHours.push(e);
      }
    })
  }
  workDay();

  //after any changes, save to local storage
  saveEvents = () => {
    localStorage.setItem("workDayHours", JSON.stringify(workDayHours));
  }

  //check localStorage for timeBlock data and if there is create, if not make empty [];
  pullEvents = () => {
    JSON.parse(localStorage.getItem("workDayHours"));
  }

  //iterate through work day hours create <form> for row & input

  workDayHours.forEach(function (currentHour) {
    let eventRow = $('<form>').attr({ 'class': 'eventRow row', 'id':`${currentHour.id}` });
    //put workday hours in left side (on md lg size, on sm left underneath)
    let eventTime = $('<div>').text(`${currentHour.hour}:${currentHour.minutes[0]}${currentHour.ampm}`).attr({ 'class': ' col-2 hour eventTime' });
    //event text input container
    let eventDataContainer = $('<span>').attr({ 'class': 'col-8 time-block eventDataContainer' });
    //event text
    let eventText = $('<textarea>').attr({ 'class': 'eventText' });
    eventText.text = currentHour.text;

    //<div> needs to be able to change color based on if the hour is past, present, or future
    // compare real time to time on schedule
    eventDataContainer.append(eventText);
    if (moment().format('a') === 'am' && currentHour.ampm !== 'am' && currentHour.id === '0') {
      eventText.attr({ 'class': 'future' });
    } else
      if (moment().format('a') === 'am' && currentHour.ampm === 'am') {
        if (currentHour.hour < moment().format('hh') && moment().format('hh') !== 12 && currentHour.hour !== 12) {
          eventText.attr({ 'class': 'past' })
        } else
          if (moment().format('hh') === currentHour.hour) {
            eventText.attr({ 'class': 'present' });
          } else
            if (moment().format('hh') === 12 && currentHour.hour < moment().format('hh')) {
              eventText.attr({ 'class': 'future' });
            } else
              if (currentHour.hour > moment().format('hh') && moment().format('hh') !== 12 && currentHour.hour !== 12) {
                eventText.attr({ 'class': 'future' });
              }
      }

    if (moment().format('a') === 'pm' && currentHour.ampm !== 'pm'|| currentHour.id === '12') {
      eventText.attr({ 'class': 'past' });
    } else
      if (moment().format('a') === 'pm' && currentHour.ampm === 'pm') {
        if (currentHour.hour < moment().format('hh')) {
          eventText.attr({ 'class': 'past' })
        } else {
          eventText.attr({ 'class': 'future' })
        }
        if (moment().format('hh') === currentHour.hour) {
          eventText.attr({ 'class': 'present' });
        }
        if (moment().format('hh') === 12 && currentHour.hour < moment().format('hh')) {
          eventText.attr({ 'class': 'future' });
        } 
        if (currentHour.hour > moment().format('hh') && currentHour.id !== '0') {
          eventText.attr({ 'class': 'future' });
        }
      }
    //create save button
    let saveEventBtnContainer = $('<span>').attr({ 'class': 'col-1 btnID' });
    let saveEventBtn = $('<button>').attr({ 'class': 'saveBtn', 'type':'submit' });
    let saveBtnImage = $('<img>').attr({ 'src': '../assets/images/cogs.svg', 'alt': 'Tow gears', 'class': 'iconInject' })
    let saveBtnText = $('<span>').text('Save').attr({ 'class': 'btnText' });
    saveEventBtnContainer.append(saveEventBtn.append(saveBtnImage, saveBtnText));
    //form container for time block
    eventRow.append(eventTime, eventDataContainer, saveEventBtnContainer);
    $('#timeBlockContainer').append(eventRow);
  })

  //edit the text area
  $('.time-block').on('click', 'textarea', function (workDayHours) {
    let text = $(this).val();
    let id = $(this).closest('.eventRow').index();
    //this works so far, now we need to get the value of the text
    //into the array and pull out that value on page reload
  })

  $('#timeBlockContainer').on('click', 'button', function () {
    
  });

  let imageInject = $('.iconInject');

  SVGInjector(imageInject);

  let windowSize = window.matchMedia('(max-width: 980px)')
  
  

  

  







  //create container for elements of <div>

  //put workday hours in left side (on md lg size, on sm left underneath)

  //input text box in center (in between on lg md, on top of buttons on sm)

  //save button on right side (on sm underneath right)

  //<div> is pushed to timeBlock array with its data

  //when input text in <div> is clicked the text data can be changed, if they click off the input, reverts back 


});

//need to check time zone of individual using website

/* extras if possible?
1- can the user adjust the time of the work day?
2- can the user choose 1/2 hour or 1/4 hour time increments?
3- can they adjust the colors of past present future time blocks?
4- if a event takes up more than one time block can they be put togther into one large text area,
and the time be changed? example = 7:30 - 8:30? */

