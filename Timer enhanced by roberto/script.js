/* basic JavaScript to update a timer */
function startTimer(timerName) {
  // get the number of seconds
   let timer = document.getElementById(timerName),
       seconds = parseInt(timer.innerText);
  // remove a second
  // updated the content of timer
   timer.innerText = --seconds
   timer.setAttribute ("aria-label",timer.innerText,0)
  // if timer != 0, setTimeout
  if (seconds) {
    setTimeout( function() {
      startTimer(timerName);
    }, 1000);
  }
}