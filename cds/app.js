(function() {
    function checkTime(i) {
        return (i < 10) ? "0" + i : i;
    }

    function startTime() {
        var todayTime = new Date().toLocaleTimeString('en-US', { hour12: true, hour: "numeric", minute: "numeric" });
        var todayNumericalTime = todayTime.split(/(\s+)/)[0];
        document.getElementById('currentTime').innerHTML = todayNumericalTime;
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

function getTime() {
    var todayTime = new Date().toLocaleTimeString('en-US', { hour12: true, hour: "numeric", minute: "numeric" });
    var todayNumericalTime = todayTime.split(/(\s+)/)[0];
    return todayNumericalTime;
}

function weather() {
    $.getJSON("https://api.openweathermap.org/data/2.5/weather?id=5391811&APPID=f9668861219ddb735be050fa92d5616d").then(json => {
        document.getElementById('currentWeather').innerHTML = "SD: " + json.weather[0].main;
    })
};
weather()
setInterval(weather, 600000000)

var typed = new Typed('#secondaryInfo', {
    strings: ["Welcome to Cymer Digital Studio", "Remember to Sign in at the front", "Have you seen our upcoming classes?", "Youth Institute applications are soon to be available!", "Does anyone read these?", "Made with Coffee by @realJamesClick"],
    typeSpeed: 30,
    showCursor: false,
    loop: true,
    backDelay: 15000,
  });