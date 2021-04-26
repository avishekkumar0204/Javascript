let time = document.getElementById("time");
let startBtn = document.querySelector(".start-btn");
let stopBtn = document.querySelector(".stop-btn");
let startCountDown = () => {
    time.innerHTML='0';
    let num = 1;
    let myVar = setInterval(startTime = () => {
        time.innerHTML = `${num}`;
        num++;
    }, 1000);
    startBtn.style.display = 'none';
    stopBtn.style.display = "block";
    return myVar;
}
let stopCountDown = (myVar) => {
    clearInterval(myVar);
    startBtn.style.display = 'block';
    stopBtn.style.display = "none";
}
