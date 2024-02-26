var future_date = new Date("Mar 11, 2024 11:30").getTime();
function timer() {
   var current_date = new Date().getTime();
   var remaining_seconds = Math.floor( (future_date - current_date ) / 1000);

   var days = Math.floor(remaining_seconds / (3600 * 24));
   var hours = Math.floor((remaining_seconds % (3600 * 24)) / 3600);
   var mins = Math.floor((remaining_seconds % 3600) / 60);
   var secs = Math.floor(remaining_seconds % 60);

   document.getElementById("days").innerHTML = days;
   document.getElementById("hours").innerHTML = hours;
   document.getElementById("mins").innerHTML = mins;
   document.getElementById("secs").innerHTML = secs;
}

setInterval(timer, 1000);