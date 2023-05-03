let timer = document.getElementById("stopwatch");
let hr = 0;
let min = 0;
let sec = 0;
let start_timer = true;// its a flag

function start() {//start button
  if (start_timer == true) {
    start_timer = false;
    timercycle();
  }
}

function stop() {
  //stop button
  if (start_timer == false) {
    start_timer = true;
  }
}

function reset() {
  //set button
  timer.innerText = "00:00:00";
  start_timer = true;
  hr = 0;
  min = 0;
  sec = 0;
}

function timercycle() {
  if (start_timer == false) {
    sec = parseInt(sec);
    min = parseInt(min);
    hr = parseInt(hr);
    sec = sec + 1;
    if (sec == 60) {
      min = min + 1;
      sec = 0;
    }
    if (min == 60) {
      hr = hr + 1;
      min = 0;
      sec = 0;
    }
    if (sec < 10) {
      sec = "0" + sec;
    }
    if (min < 10) {
      min = "0" + min;
    }
    if (hr < 10) {
      hr = "0" + hr;
    }
    timer.innerHTML = hr + ":" + min + ":" + sec;
    setTimeout("timercycle()", 500);
  }
}
