function background() {
    $.getJSON("https://raw.githubusercontent.com/dconnolly/chromecast-backgrounds/master/backgrounds.json").then(json => {
        var item = json[Math.floor(Math.random() * json.length)];
        var bg = item["url"]
        document.body.style.backgroundImage = 'url("' + bg + '")';
    });
}

background()

setInterval(background, 120 * 1000)


// FOR TESTING WEBKIT
// setInterval(background, 3 * (1000))