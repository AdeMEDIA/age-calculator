function validateInput() {
  let dayInput = document.getElementById('day');
  let monthInput = document.getElementById('month');

  let day = parseInt(dayInput.value);
  if (day < 1 || day > 31 || isNaN(day)) {
    dayInput.style.outline = '2px red solid';
    document.getElementById('v-error').innerText = 'Must be a valid date';
    return false;
  } else {
    dayInput.style.outline = '';
  }

  let month = parseInt(monthInput.value);
  if (month < 1 || month > 12 || isNaN(month)) {
    monthInput.style.outline = '2px red solid';
    document.getElementById('v-error').innerText = 'Must be a valid date';
    return false;
  } else {
    monthInput.style.outline = '';
  }

  return true;
}

function calculateAge() {
  if (!validateInput()) {
    return;
  }

  let dayInput = document.getElementById('day');
  let monthInput = document.getElementById('month');
  let yearInput = document.getElementById('year');

  let day = parseInt(dayInput.value);
  let month = parseInt(monthInput.value);
  let year = parseInt(yearInput.value);

  let userDate = new Date(year, month - 1, day);
  let currentDate = new Date();

  if (userDate < currentDate) {
    let timeDifference = currentDate - userDate;
    let millisecondsInYear = 31536000000;
    let millisecondsInMonth = 2628000000;
    let millisecondsInDay = 86400000;

    let years = Math.floor(timeDifference / millisecondsInYear);
    let remainingMilliseconds = timeDifference % millisecondsInYear;
    let months = Math.floor(remainingMilliseconds / millisecondsInMonth);
    let remainingMillisecondsAfterMonths = remainingMilliseconds % millisecondsInMonth;
    let days = Math.floor(remainingMillisecondsAfterMonths / millisecondsInDay);

    let yearsElement = document.getElementById('YY');
    let monthsElement = document.getElementById('MM');
    let daysElement = document.getElementById('DD');

    yearsElement.innerText = years;
    monthsElement.innerText = months;
    daysElement.innerText = days;
  }
}

// Adding an Event Listener
let submitButton = document.getElementById('submit-btn');
// event listener
submitButton.addEventListener('click', calculateAge);
