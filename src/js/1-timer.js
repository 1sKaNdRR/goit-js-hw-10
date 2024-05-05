// const startBtn = document.getElementById('start-btn');
// const dateTimePicker = document.getElementById('datetime-picker');


// function addLeadingZero(value) {
//   return value < 10 ? '0' + value : value;
// }

// function convertMs(ms) {
//   const second = 1000;
//   const minute = second * 60;
//   const hour = minute * 60;
//   const day = hour * 24;

//   const days = Math.floor(ms / day);
//   const hours = Math.floor((ms % day) / hour);
//   const minutes = Math.floor(((ms % day) % hour) / minute);
//   const seconds = Math.floor((((ms % day) % hour) % minute) / second);

//   return { days, hours, minutes, seconds };
// }


// let userSelectedDate;


// const options = {
//   enableTime: true,
//   time_24hr: true,
//   defaultDate: new Date(),
//   minuteIncrement: 1,

//   onClose(selectedDates) {
//     userSelectedDate = selectedDates[0];
//     // Перевірка на валідність дати
//     if (userSelectedDate < new Date()) {
//       iziToast.error({
//         title: 'Error',
//         message: 'Please choose a date in the future',
//       });
//       startBtn.disabled = true;
//     } else {
//       startBtn.disabled = false;
//     }
//   },
// };


// flatpickr('#datetime-picker', options);


// startBtn.addEventListener('click', function() {

//   this.disabled = true;
//   dateTimePicker.disabled = true;


//   const countdownInterval = setInterval(function() {
//     const currentDate = new Date();
//     const timeDifference = userSelectedDate - currentDate;


//     if (timeDifference <= 0) {
//       clearInterval(countdownInterval);
//       iziToast.success({
//         title: 'Success',
//         message: 'Countdown finished!',
//       });
//       startBtn.disabled = false;
//       dateTimePicker.disabled = false;

//       return;
//     }

//     const { days, hours, minutes, seconds } = convertMs(timeDifference);


//     document.getElementById('days').innerText = addLeadingZero(days);
//     document.getElementById('hours').innerText = addLeadingZero(hours);
//     document.getElementById('minutes').innerText = addLeadingZero(minutes);
//     document.getElementById('seconds').innerText = addLeadingZero(seconds);
//   }, 1000);
// });
const startBtn = document.getElementById('start-btn');
const dateTimePicker = document.getElementById('datetime-picker');


function addLeadingZero(value) {
  return value < 10 ? '0' + value : value;
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}


let userSelectedDate;


const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,

  onClose(selectedDates) {
    userSelectedDate = selectedDates[0];
    // Перевірка на валідність дати
    if (userSelectedDate < new Date()) {
      iziToast.error({
        title: 'Error',
        message: 'Please choose a date in the future',
      });
      startBtn.disabled = true;
    } else {
      startBtn.disabled = false;
    }
  },
};


flatpickr('#datetime-picker', options);


startBtn.addEventListener('click', function() {

  this.disabled = true;
  dateTimePicker.disabled = true;


  const countdownInterval = setInterval(function() {
    const currentDate = new Date();
    const timeDifference = userSelectedDate - currentDate;


    if (timeDifference <= 0) {
      clearInterval(countdownInterval);
      iziToast.success({
        title: 'Success',
        message: 'Countdown finished!',
      });
      dateTimePicker.disabled = false;
      return;
    }

    const { days, hours, minutes, seconds } = convertMs(timeDifference);


    document.getElementById('days').innerText = addLeadingZero(days);
    document.getElementById('hours').innerText = addLeadingZero(hours);
    document.getElementById('minutes').innerText = addLeadingZero(minutes);
    document.getElementById('seconds').innerText = addLeadingZero(seconds);
  }, 1000);
});
