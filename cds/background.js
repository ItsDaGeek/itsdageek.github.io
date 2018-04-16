var colors = [
    { r: "104", g: "227", b: "221" }, //Cyan
    { r: "0", g: "137", b: "208" }, //Blue
    { r: "146", g: "39", b: "143" }, //Purple
    { r: "237", g: "28", b: "36" }, //Red
    { r: "244", g: "121", b: "32" } //Orange
];


function background() {
    $.getJSON("https://raw.githubusercontent.com/dconnolly/chromecast-backgrounds/master/backgrounds.json").then(json => {
        var item = json[Math.floor(Math.random() * json.length)];
        var bg = item["url"]
        var color = colors[Math.floor(Math.random() * colors.length)]
        document.body.style.backgroundImage = 'url("' + bg + '")';
    });
}

background()

setInterval(background, 90 * (1000))


// FOR TESTING WEBKIT
// setInterval(background, 10 * (1000))