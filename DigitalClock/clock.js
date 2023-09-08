
const showTime = () =>{
    let date = new Date();
    console.log(date)
    hours = date.getHours();
    minutes = date.getMinutes();
    seconds = date.getSeconds();
    milliseconds = date.getMilliseconds();
    let session = 'AM';
    if(hours == 0){
        hours = 12
    }
    if(hours > 12){
        hours = hours-12;
        session = 'PM'
    }
    hours = (hours<10)? "0" + hours : hours;
    minutes = (minutes<10)? "0" + minutes : minutes;
    seconds = (seconds<10)? "0" + seconds : seconds;
    
    let time = hours + ":" + minutes + ":" + seconds + ":" + session;
    document.getElementById('clock').innerText = time;
    
    setTimeout(showTime, 1000)
}
showTime();
