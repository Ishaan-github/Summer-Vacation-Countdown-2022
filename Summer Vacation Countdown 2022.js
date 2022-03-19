function countdownTime(){
  // var date = new Date();
  // var curDate = date.getDate();
  // var curHour = date.getHours();
  // var curMinute = date.getMinutes();
  // var curSecond = date.getSeconds();
  // if(curSecond == 0){
  //   document.getElementById("countdownTimerSeconds").innerHTML = "00";
  // } else {
  //   if((curSecond / 50) > 1) {
  //     document.getElementById("countdownTimerSeconds").innerHTML = "0" + (60 - curSecond);
  //   } else {
  //     document.getElementById("countdownTimerSeconds").innerHTML = (60 - curSecond);
  //   }
  // }

  // if(curMinute == 5) {
  //   document.getElementById("countdownTimerMinutes").innerHTML = "00" + " : ";
  // } else {
  //   if(curMinute < 55 && (curMinute / 5) > 1) {
  //     if(curSecond == 0) {
  //       document.getElementById("countdownTimerMinutes").innerHTML = (65 - curMinute) + " : ";
  //     } else {
  //       document.getElementById("countdownTimerMinutes").innerHTML = (64 - curMinute) + " : ";
  //     }
  //   } else if(curMinute > 55 && curMinute <= 59) {
  //     if(curSecond == 0) {
  //       document.getElementById("countdownTimerMinutes").innerHTML = "0" + (65 - curMinute) + " : ";
  //     } else {
  //       document.getElementById("countdownTimerMinutes").innerHTML = "0" + (64 - curMinute) + " : ";
  //     }
  //   } else {
  //     document.getElementById("countdownTimerMinutes").innerHTML = "0" + (9 - curMinute) + " : ";
  //   }
  // }

  // if(curHour == 9 && curMinute == 5 && curSecond == 0) {
  //   document.getElementById("countdownTimerHours").innerHTML = "00" + " : ";
  // } else if(curHour < 9) {
  //   document.getElementById("countdownTimerHours").innerHTML = "0" + (8 - curHour) + " : ";
  // } else if(curHour > 9 && curMinute >= 5 && curSecond > 0) {
  //   document.getElementById("countdownTimerHours").innerHTML = (32 - curHour) + " : ";
  // }
  
  // if(curHour < 9) {
  //   document.getElementById("countdownTimerDays").innerHTML = (25 - curDate) + " : ";
  // } else {
  //   document.getElementById("countdownTimerDays").innerHTML = (24 - curDate) + " : ";
  // }
  // if(curDate == 25 && curHour == 9 && curMinute == 5 && curSecond == 0) {
  //   document.getElementById("countdownTimerDays").innerHTML = "00" + " : ";
  //   alert("2022's Summer Vacations have started!! Enjoy!!");
  // }
  var countDownDate = new Date("Mar 25, 2022 09:05:00").getTime();

  var x = setInterval(function() {
    var now = new Date().getTime();
    var distance = countDownDate - now;
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    document.getElementById("timer").innerHTML = days + " : " + hours + " : " + minutes + " : " + seconds;
    if (distance < 0) {
      clearInterval(x);
      document.getElementById("timer").innerHTML = "2022's Summer Vacations have started!! Enjoy!!";
    }
  }, 1000);
}

setInterval(function(){
  countdownTime();
}, 1000);
