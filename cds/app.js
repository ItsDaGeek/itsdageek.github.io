function startTime() {
    var todayTime = new Date().toLocaleTimeString('en-US', { hour12: true, hour: "numeric", minute: "numeric" });
    var todayNumericalTime = todayTime.split(/(\s+)/)[0];
    document.getElementById('currentTime').innerHTML = todayNumericalTime;
    var todayDate = new Date().toLocaleDateString();
    document.getElementById('currentDate').innerHTML = todayDate;
};

function weather() {
    $.getJSON("https://api.openweathermap.org/data/2.5/weather?id=5391811&APPID=f9668861219ddb735be050fa92d5616d").then(json => {
        document.getElementById('currentWeather').innerHTML = "SD: " + json.weather[0].main;
    })
};


var typed = new Typed('#secondaryInfo', {
    strings: ["Welcome to Cymer Digital Studio", "Remember to sign in at the front", "Have you seen our upcoming classes?", "Youth Institute applications are soon to be available!", "Does anyone read these?", "Made with Coffee by @realJamesClick"],
    typeSpeed: 30,
    showCursor: false,
    loop: true,
    backDelay: 7000,
  });

startTime()
setInterval(startTime, 1000)

weather()
setInterval(weather, 600000)