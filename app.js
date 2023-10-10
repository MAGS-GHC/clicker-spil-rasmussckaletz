let cookies = 0;


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

let cookieMultiplier = multiplierCookies.level1;

const autoclickerLevel = {
    level0: 0,
    level1: cookieMultiplier,
    level2: cookieMultiplier,
    level3: cookieMultiplier,
    level4: cookieMultiplier,
    level5: cookieMultiplier,
    level6: cookieMultiplier,
    level7: cookieMultiplier,
    level8: cookieMultiplier,
    level9: cookieMultiplier,
    level10: cookieMultiplier,
}

const autoclickerTime = {
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




let clickPerSecond = autoclickerLevel.level0;
let autoclickInterval;

function UpdateCookieCounter() {
    document.getElementById("cookies").innerHTML = `${cookies} cookies`;
    document.title = `${cookies} cookies - Clicker Spil`;
}

function ClickOnCookie() {
    cookies += cookieMultiplier;
    UpdateCookieCounter();
}

function AutoclickOnCookie(interval) {
    if (autoclickInterval) {
        clearInterval(autoclickInterval);
    }
    autoclickInterval = setInterval(Autoclick, interval);
    function Autoclick() {
        for (let i = 0; i < clickPerSecond; i++) {
            ClickOnCookie();
        }
    }
}


function MultiplierCookieStore() {
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

    for (let index in multiplierLevels) {
        const level = multiplierLevels[index];
        if (cookieMultiplier === level.level) {
            if (cookies >= level.price) {
                cookies -= level.price;
                document.getElementById("cookieknap").innerHTML = level.nextButtonText;
                cookieMultiplier = level.nextLevel;
            }
            break;
        }
        continue;
    }
    UpdateCookieCounter();
}


function AutoclickerStore() {
    const autoclickerLevels = [
        { level: autoclickerLevel.level0, price: autoclickerPrice.level1Price, time: autoclickerTime.level1Time, nextLevel: autoclickerLevel.level1, nextButtonText: "2 x Hastighed" },
        { level: autoclickerLevel.level1, price: autoclickerPrice.level2Price, time: autoclickerTime.level2Time, nextLevel: autoclickerLevel.level2, nextButtonText: "3 x Hastighed" },
        { level: autoclickerLevel.level2, price: autoclickerPrice.level3Price, time: autoclickerTime.level3Time, nextLevel: autoclickerLevel.level3, nextButtonText: "4 x Hastighed" },
        { level: autoclickerLevel.level3, price: autoclickerPrice.level4Price, time: autoclickerTime.level4Time, nextLevel: autoclickerLevel.level4, nextButtonText: "5 x Hastighed" },
        { level: autoclickerLevel.level4, price: autoclickerPrice.level5Price, time: autoclickerTime.level5Time, nextLevel: autoclickerLevel.level5, nextButtonText: "6 x Hastighed" },
        { level: autoclickerLevel.level5, price: autoclickerPrice.level6Price, time: autoclickerTime.level6Time, nextLevel: autoclickerLevel.level6, nextButtonText: "7 x Hastighed" },
        { level: autoclickerLevel.level6, price: autoclickerPrice.level7Price, time: autoclickerTime.level7Time, nextLevel: autoclickerLevel.level7, nextButtonText: "8 x Hastighed" },
        { level: autoclickerLevel.level7, price: autoclickerPrice.level8Price, time: autoclickerTime.level8Time, nextLevel: autoclickerLevel.level8, nextButtonText: "9 x Hastighed" },
        { level: autoclickerLevel.level8, price: autoclickerPrice.level9Price, time: autoclickerTime.level9Time, nextLevel: autoclickerLevel.level9, nextButtonText: "10 x Hastighed" },
        { level: autoclickerLevel.level9, price: autoclickerPrice.level10Price, time: autoclickerTime.level10Time, nextLevel: autoclickerLevel.level10, nextButtonText: "Maxed" },
    ];

    for (let index in autoclickerLevels) {
        console.log(1);
        const level = autoclickerLevels[index];
        if (clickPerSecond === level.level) {
            console.log(2);
            if (cookies >= level.price) {
                console.log(3);
                cookies -= level.price;
                document.getElementById("autoclicker").innerHTML = level.nextButtonText;
                clickPerSecond = level.nextLevel;
                console.log(level.level);
                console.log(level.time);
                AutoclickOnCookie(level.time);
            }
            break;
        }
        continue;
    }
    UpdateCookieCounter();
}