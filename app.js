let cookies = 0;
let cookiesInTotal = 0;

const multiplierCookies = {
    level1: 1,
    level2: 2,
    level3: 4,
    level4: 8,
    level5: 16,
    level6: 32,
    level7: 64,
    level8: 128,
    level9: 256,
    level10: 512,
}

const multiplierCookiePrice = {
    level2Price: 10,
    level3Price: 100,
    level4Price: 1000,
    level5Price: 10000,
    level6Price: 100000,
    level7Price: 1000000,
    level8Price: 10000000,
    level9Price: 100000000,
    level10Price: 100000000,
}

const multiplierLevels = [
    { level: multiplierCookies.level1, price: multiplierCookiePrice.level2Price, nextLevel: multiplierCookies.level2, nextButtonText: "4 x Cookies" },
    { level: multiplierCookies.level2, price: multiplierCookiePrice.level3Price, nextLevel: multiplierCookies.level3, nextButtonText: "8 x Cookies" },
    { level: multiplierCookies.level3, price: multiplierCookiePrice.level4Price, nextLevel: multiplierCookies.level4, nextButtonText: "16 x Cookies" },
    { level: multiplierCookies.level4, price: multiplierCookiePrice.level5Price, nextLevel: multiplierCookies.level5, nextButtonText: "32 x Cookies" },
    { level: multiplierCookies.level5, price: multiplierCookiePrice.level6Price, nextLevel: multiplierCookies.level6, nextButtonText: "64 x Cookies" },
    { level: multiplierCookies.level6, price: multiplierCookiePrice.level7Price, nextLevel: multiplierCookies.level7, nextButtonText: "128 x Cookies" },
    { level: multiplierCookies.level7, price: multiplierCookiePrice.level8Price, nextLevel: multiplierCookies.level8, nextButtonText: "256 x Cookies" },
    { level: multiplierCookies.level8, price: multiplierCookiePrice.level9Price, nextLevel: multiplierCookies.level9, nextButtonText: "512 x Cookies" },
    { level: multiplierCookies.level9, price: multiplierCookiePrice.level10Price, nextLevel: multiplierCookies.level10, nextButtonText: "Maxed" }
];

const autoclickerPrice = {
    level1Price: 10,
    level2Price: 100,
    level3Price: 1000,
    level4Price: 10000,
    level5Price: 100000,
    level6Price: 1000000,
    level7Price: 10000000,
    level8Price: 100000000,
    level9Price: 1000000000,
    level10Price: 1000000000,
}

const autoclickerInterval = {
    level1Time: 10000,
    level2Time: 9000,
    level3Time: 8000,
    level4Time: 7000,
    level5Time: 6000,
    level6Time: 5000,
    level7Time: 4000,
    level8Time: 3000,
    level9Time: 2000,
    level10Time: 1000,
}

const autoclickerLevels = [
    { buttonLabel: "1 x Hastighed", price: autoclickerPrice.level1Price, nextUprade: autoclickerInterval.level1Time, nextButtonLabel: "2 x Hastighed" },
    { buttonLabel: "2 x Hastighed", price: autoclickerPrice.level2Price, nextUprade: autoclickerInterval.level2Time, nextButtonLabel: "3 x Hastighed" },
    { buttonLabel: "3 x Hastighed", price: autoclickerPrice.level3Price, nextUprade: autoclickerInterval.level3Time, nextButtonLabel: "4 x Hastighed" },
    { buttonLabel: "4 x Hastighed", price: autoclickerPrice.level4Price, nextUprade: autoclickerInterval.level4Time, nextButtonLabel: "5 x Hastighed" },
    { buttonLabel: "5 x Hastighed", price: autoclickerPrice.level5Price, nextUprade: autoclickerInterval.level5Time, nextButtonLabel: "6 x Hastighed" },
    { buttonLabel: "6 x Hastighed", price: autoclickerPrice.level6Price, nextUprade: autoclickerInterval.level6Time, nextButtonLabel: "7 x Hastighed" },
    { buttonLabel: "7 x Hastighed", price: autoclickerPrice.level7Price, nextUprade: autoclickerInterval.level7Time, nextButtonLabel: "8 x Hastighed" },
    { buttonLabel: "8 x Hastighed", price: autoclickerPrice.level8Price, nextUprade: autoclickerInterval.level8Time, nextButtonLabel: "9 x Hastighed" },
    { buttonLabel: "9 x Hastighed", price: autoclickerPrice.level9Price, nextUprade: autoclickerInterval.level9Time, nextButtonLabel: "10 x Hastighed" },
    { buttonLabel: "10 x Hastighed", price: autoclickerPrice.level10Price, nextUprade: autoclickerInterval.level10Time, nextButtonLabel: "Maxed" },
];

let cookieMultiplier = multiplierCookies.level1;
let autoclickInterval;
let labelOnAutoclickButton =  "1 x Hastighed";

function UpdateCookieCounter() {
    let cookieKnapHTML = document.getElementById("cookieknap");
    let autoclickerKnapHTML = document.getElementById("autoclicker");
    document.getElementById("cookies").innerHTML = `${cookies} cookies`;
    document.getElementById("cookiesInTotal").innerHTML = `${cookiesInTotal} cookies in total`;
    document.title = `${cookies} cookies - Clicker Spil`;
    cookieKnapHTML.disabled = true;
    autoclickerKnapHTML.disabled = true;
    for (let index in multiplierLevels) {
        const level = multiplierLevels[index];
        if (cookieMultiplier === level.level && cookies >= level.price) {
            cookieKnapHTML.disabled = false;
        }
    }

    for (let index in autoclickerLevels) {
        const level = autoclickerLevels[index];
        if (labelOnAutoclickButton === level.buttonLabel && cookies >= level.price) {
            autoclickerKnapHTML.disabled = false;
        }
    }
}

function ClickOnCookie() {
    cookies += cookieMultiplier;
    cookiesInTotal += cookieMultiplier;
    UpdateCookieCounter();
}

function AutoclickOnCookie(interval) {
    UpdateCookieCounter();
    console.log("Interval: " + interval);
    if (autoclickInterval) {
        clearInterval(autoclickInterval);
    }
    
    function Autoclick() {
        for (let i = 0; i < 1; i++) {
            ClickOnCookie();
        }
    }
    autoclickInterval = setInterval(Autoclick, interval);
}

function MultiplierCookieStore() {
    for (let index in multiplierLevels) {
        const level = multiplierLevels[index];
        if (cookieMultiplier === level.level) {
            if (cookies >= level.price) {
                cookies -= level.price;
                document.getElementById("cookieknap").innerHTML = level.nextButtonText;
                cookieMultiplier = level.nextLevel;
                UpdateCookieCounter(level.price);
            }
            break;
        }
        continue;
    }
}

function AutoclickerStore() {
    for (let index in autoclickerLevels) {
        const level = autoclickerLevels[index];
        if (labelOnAutoclickButton === level.buttonLabel) {
            console.log("Next upgrade: " + level.nextButtonLabel);
            console.log("Pris: " + level.price);
            if (cookies >= level.price) {
                cookies -= level.price;
                console.log(level.nextButtonLabel);
                labelOnAutoclickButton = level.nextButtonLabel;
                document.getElementById("autoclicker").innerHTML = level.nextButtonLabel;
                AutoclickOnCookie(level.nextUprade, level.price);
            }
            break;
        }
        continue;
    }
}
