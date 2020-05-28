document.addEventListener('DOMContentLoaded', () => {
    function updateTime() {
        let localTime = new Date();
        document.getElementById('local-hour-hand').style.transform = setHours(localTime);
        document.getElementById('local-minute-hand').style.transform = setMinutes(localTime);
        document.getElementById('local-second-hand').style.transform = setSeconds(localTime);
        // console.log(localTime.getHours() + ":" + localTime.getMinutes() + ":" + localTime.getSeconds());
    }
    function setHours(a) {
        let hours = a.getHours();
        let minutes = a.getMinutes();
        if (hours > 12) {hours -= 12;}
        let angleAnswer = (hours*30) + (minutes/2) - 90;
        return 'rotate(' + angleAnswer + 'deg)';
    }

    function setMinutes(a) {
        let minutes = a.getMinutes();
        let seconds = a.getSeconds();
        let angleAnswer = (minutes * 6) + (seconds/10) - 90;
        return 'rotate(' + angleAnswer + 'deg)';
    }

    function setSeconds(a) {
        let seconds = a.getSeconds();
        let angleAnswer = (seconds * 6);
        return 'rotate(' + angleAnswer + 'deg)';
    }
    let timerId = setInterval(updateTime, 1000);
})