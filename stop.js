const para = document.querySelector("#para");
const reset = document.querySelector("#reset-btn");
const stop = document.querySelector("#stop-btn");
const start = document.querySelector("#start-btn");
let [millisec, min, hr, sec]=[0,0,0,0];
let count=false;

// logic for start button
start.addEventListener('click', ()=>{
    // if watch is in active state no more calls will be considered for start function
    if(count!=false){
        clearInterval(count);
    }
    count=setInterval(display,10);
})
// logic for stop button
stop.addEventListener('click', ()=>{
    clearInterval(count);
})
// logic for reset button
reset.addEventListener('click', ()=>{
    clearInterval(count);
    [millisec, min, hr, sec]=[0,0,0,0];
    para.innerHTML =  "00 : 00 : 00 : 000";

})
// initializing clock to 10 miiliseconds
function display(){
    millisec+=10;
    if(millisec==1000){
        millisec=0;
        sec+=1;
        if(sec==60){
            sec=0;
            sec+=1;
            if(min=60){
                min=0;
                hr++;
            }
            
        }
    }

    let h = hr < 10 ? "0" + hr : hr;
    let m = min < 10 ? "0" + min : min;
    let s = sec < 10 ? "0" + sec : sec;
    let ms = millisec < 10 ? "00" + millisec : millisec <100 ? "0" + millisec : millisec;

    para.innerHTML=`${h} : ${m} : ${s}: ${ms}`;
    
}