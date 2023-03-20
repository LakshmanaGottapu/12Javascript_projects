const hourEl = document.getElementById("hours");
const minEl = document.getElementById("minutes");
const secEl = document.getElementById("seconds");
const ampm = document.getElementById("ampm");

function updateClock(){
    let h = new Date().getHours();
    let m = new Date().getMinutes;
    let s = new Date().getSeconds();
    let zone = "AM";
    if(h>12){
        h=h-12;
        zone="PM";
    }
    h = h<10? "0"+h: h;
    m = m<10? "0"+m: m;
    s = s<10? "0"+s: s;

    hourEl.innerText = h;
    minEl.innerText = m;
    secEl.innerText = s;
    ampm.innerText=zone;

    setTimeout(()=>{
        updateClock();
    },1000);
}
updateClock();



