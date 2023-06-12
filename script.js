let stopwatchInterval;
let timerInterval;
let stopwatchRunning = false;
let timerRunning = false;
let stopwatchTime = 0;
let timerTime = 0;

function startStopwatch() {
  if (!stopwatchRunning) {
    stopwatchInterval = setInterval(updateStopwatch, 10);
    stopwatchRunning = true;
    
    document.getElementById("startStopwatch").innerHTML = "Resume";
    document.getElementById("stopStopwatch").disabled = false;
    document.getElementById("resetStopwatch").disabled = false;
  } else {
    clearInterval(stopwatchInterval);
    stopwatchRunning = false;
    
    document.getElementById("startStopwatch").innerHTML = "Start";
  }
}

function stopStopwatch() {
  clearInterval(stopwatchInterval);
  stopwatchRunning = false;
  
  document.getElementById("startStopwatch").innerHTML = "Resume";
}

function resetStopwatch() {
  clearInterval(stopwatchInterval);
  stopwatchRunning = false;
  stopwatchTime = 0;
  updateStopwatchDisplay();
  
  document.getElementById("startStopwatch").innerHTML = "Start";
  document.getElementById("stopStopwatch").disabled = true;
  document.getElementById("resetStopwatch").disabled = true;
}

function updateStopwatch() {
  stopwatchTime += 10;
  updateStopwatchDisplay();
}

function updateStopwatchDisplay() {
  const milliseconds = Math.floor((stopwatchTime % 1000) / 10);
  const seconds = Math.floor((stopwatchTime / 1000) % 60);
  const minutes = Math.floor((stopwatchTime / 1000 / 60) % 60);
  const hours = Math.floor(stopwatchTime / 1000 / 60 / 60);
  
  const display = `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)}.${padZero(milliseconds)}`;
  document.getElementById("stopwatchDisplay").innerHTML = display;
}

function padZero(num) {
  return num.toString().padStart(2, "0");
}

function startTimer() {
  if (!timerRunning) {
    const inputSeconds = parseInt(document.getElementById("timerInput").value);
    if (isNaN(inputSeconds) || inputSeconds <= 0) {
      alert("Please enter a valid positive number for the timer.");
      return;
    }
    
    timerTime = inputSeconds * 1000;
    
    timerInterval = setInterval(updateTimer, 10);
    timerRunning = true;
    
    document.getElementById("startTimer").innerHTML = "Resume";
    document.getElementById("stopTimer").disabled = false;
    document.getElementById("resetTimer").disabled = false;
    document.getElementById("timerInput").disabled = true;
  } else {
    clearInterval(timerInterval);
    timerRunning = false;
    
    document.getElementById("startTimer").innerHTML = "Start";
  }
}

function stopTimer() {
  clearInterval(timerInterval);
  timerRunning = false;
  
  document.getElementById("startTimer").innerHTML = "Resume";
}

function resetTimer() {
  clearInterval(timerInterval);
  timerRunning = false;
  timerTime = 0;
  
  document.getElementById("startTimer").innerHTML = "Start";
  document.getElementById("stopTimer").disabled = true;
  document.getElementById("resetTimer").disabled = true;
  document.getElementById("timerInput").disabled = false;
  document.getElementById("timerInput").value = "";
  updateTimerDisplay();
}

function updateTimer() {
  if (timerTime > 0) {
    timerTime -= 10;
    updateTimerDisplay();
  } else {
    clearInterval(timerInterval);
    timerRunning = false;
    
    document.getElementById("startTimer").innerHTML = "Start";
    document.getElementById("stopTimer").disabled = true;
  }
}

function updateTimerDisplay() {
  const milliseconds = Math.floor((timerTime % 1000) / 10);
  const seconds = Math.floor((timerTime / 1000) % 60);
  const minutes = Math.floor((timerTime / 1000 / 60) % 60);
  const hours = Math.floor(timerTime / 1000 / 60 / 60);
  
  const display = `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)}.${padZero(milliseconds)}`;
  document.getElementById("timerDisplay").innerHTML = display;
}
