// const stopWatch = document.querySelector("#stopwatch");
// let timeInterval = null

// let hours = 0;
// mins = 0;
// secs = 0; 
// ms = 0;

// document.getElementById("start_btn").addEventListener("click", () =>{
//   if(timeInterval!== null){
//     clearInterval(timeInterval); //it will clear the time to run the updateTimer for every 10 milliseconds
//   }
//   timeInterval = setInterval(updateTimer(), 10) //timeinterval stores the present instance of time
  
// })
// document.querySelector("pause_btn").addEventListener("click", ()=>{
//   clearInterval(timeInterval);
// })
// document.getElementById("reset_btn").addEventListener("click", ()=>{
//   clearInterval(timeInterval);
//   stopWatch.innerHTML = "00:00:00:00"
// })

// function updateTimer(){
//   ms += 10;
//   if(ms == 1000){
//     ms = 0;
//     secs++;
//     if(secs == 60){
//       secs = 0;
//       mins++
//       if(mins == 60){
//         mins = 0;
//         hours++;
//       }
//     }
//   }
//   hours = (hours < 10)? "0" + hours : hours;
//   mins = (mins < 10)? "0" + mins : mins;
//   secs = (secs < 10)? "0" + secs : secs;
//   ms = (ms < 10)? "00" + ms : (ms < 100)? "0" + ms : ms;
//   stopWatch.innerHTML = hours + ":" + mins + ";" + secs + ";" + ms;
//` ${h} : ${m} : ${s} : ${ms}`
// }

let [milliseconds,seconds,minutes,hours] = [0,0,0,0];
let timerRef = document.querySelector('stopwatch');
let int = null;
document.getElementById('start_btn').addEventListener('click', ()=>{
    if(int!==null){
        clearInterval(int);
    }
    int = setInterval(displayTimer,10);
});
document.getElementById('pause_btn').addEventListener('click', ()=>{
    clearInterval(int);
});
document.getElementById('reset_btn').addEventListener('click', ()=>{
    clearInterval(int);
    [milliseconds,seconds,minutes,hours] = [0,0,0,0];
    document.getElementById("stopwatch").innerHTML = "00:00:00:000 ";
});
function displayTimer(){
    milliseconds+=10;
    console.log("milliseconds")
    if(milliseconds == 1000){
        milliseconds = 0;
        console.log(milliseconds)
        seconds++;
        if(seconds == 60){
          console.log(seconds)
            seconds = 0;
            minutes++;
            if(minutes == 60){
                minutes = 0;
                hours++;
                console.log(hours)
            }
        }
    }
 let h = hours < 10 ? "0" + hours : hours;
 let m = minutes < 10 ? "0" + minutes : minutes;
 let s = seconds < 10 ? "0" + seconds : seconds;
 let ms = milliseconds < 10 ? "00" + milliseconds : milliseconds < 100 ? "0" + milliseconds : milliseconds;
 document.getElementById("stopwatch").innerHTML = h + ":" + m + ":" + s + ":" + ms;
}


