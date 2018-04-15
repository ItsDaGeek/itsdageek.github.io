(function() {
    function checkTime(i) {
        return (i < 10) ? "0" + i : i;
    }

    function startTime() {
        var todayTime = new Date().toLocaleTimeString('en-US', { hour12: true, hour: "numeric", minute: "numeric" });
        document.getElementById('currentTime').innerHTML = todayTime;
        t = setTimeout(function() {
            startTime()
        }, 1000);
        var todayDate = new Date().toLocaleDateString();
        document.getElementById('currentDate').innerHTML = todayDate;
        t = setTimeout(function() {
            startTime()
        }, 15000);
    }
    startTime();
})();