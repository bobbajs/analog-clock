const hour = document.getElementById('hour');
const minute = document.getElementById('minute');
const second = document.getElementById('second');

const initializeClock = () => {
    const date = new Date();
    const curHour = date.getHours();
    const curMin = date.getMinutes();
    const curSeconds = date.getSeconds();
    
    const hourDeg = (curHour * 30) + (curMin / 2);
    const minDeg = (curMin * 6);
    const secondDeg = (curSeconds * 6);

    hour.style.transform = `rotate(${hourDeg}deg)`;
    minute.style.transform = `rotate(${minDeg}deg)`;
    second.style.transform = `rotate(${secondDeg}deg)`;
}

setInterval(initializeClock, 1000);