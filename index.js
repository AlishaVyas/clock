let currentPage =0;
let stopwatchInterval;

let countdownInterval;

document.addEventListener('DOMContentLoaded',()=>{
    showPage(currentPage);
        startDigitalClock();
    
    document.getElementById('startStopBtn').addEventListener('click',toggleStopwatch);
    document.getElementById('resetBtn').addEventListener('click',resetStopwatch);
    document.getElementById('startCountdownBtn').addEventListener('click', startCountdown);



});

function navigate(direction) {
    currentPage +=direction;
    if (currentPage <0) currentPage= 2;

    if (currentPage> 2) currentPage= 0;
    showPage(currentPage);


}

function showPage(pageIndex) {
    const pages = document.querySelectorAll('.page');
         pages.forEach((page, index)=>{
        page.classList.toggle('active',index=== pageIndex);

    });
}

function startDigitalClock(){
    setInterval(()=>{
        const now = new Date();
        const hours = now.getHours().toString().padStart(2, '0');
        const minutes = now.getMinutes().toString().padStart(2, '0');
        const seconds = now.getSeconds().toString().padStart(2, '0');


        document.getElementById('digitalClock').textContent = `${hours}:${minutes}:${seconds}`;
    }, 1000);
}

let stopwatchTime = 0;

function toggleStopwatch(){
    const startStopBtn = document.getElementById('startStopBtn');
    if (startStopBtn.textContent === 'Start'){
        stopwatchInterval = setInterval(() =>{
            stopwatchTime++;
            const minutes=Math.floor(stopwatchTime/60).toString().padStart(2,'0');
            const seconds=(stopwatchTime %60).toString().padStart(2,'0');
            document.getElementById('stopwatch').textContent = `${minutes}:${seconds}`;
        }, 1000);

        startStopBtn.textContent = 'Stop';

    } else {


        clearInterval(stopwatchInterval);
        startStopBtn.textContent='Start';
    }
}

function resetStopwatch(){
    clearInterval(stopwatchInterval);

    stopwatchTime = 0;
    document.getElementById('stopwatch').textContent='00:00';
    document.getElementById('startStopBtn').textContent='Start';
}

let countdownTime;
function startCountdown()
{

    const input = document.getElementById('countdownInput').value;
    countdownTime = parseInt(input,10);
    
    if (isNaN(countdownTime) || countdownTime <= 0) {
        alert('Please enter a valid time');
        return;
    }
    clearInterval(countdownInterval);
    countdownInterval=setInterval(()=>
        {
        countdownTime--;
        if (countdownTime <=0) {
            clearInterval(countdownInterval);
            document.getElementById('countdownDisplay').textContent = '00:00';
            alert('Time up ');
        } 
        else {
            const minutes = Math.floor(countdownTime/ 60).toString().padStart(2, '0');
            const seconds = (countdownTime% 60).toString().padStart(2,  '0');
            document.getElementById('countdownDisplay').textContent = `${minutes}:${seconds}`;
        }
        
    }, 1000);
}
