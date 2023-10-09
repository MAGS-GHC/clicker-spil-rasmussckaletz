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

function UpdateCookieCounter() {
    document.getElementById("cookies").innerHTML = `${cookies} cookies`;
    document.title = `${cookies} cookies - Clicker Spil`;
}

function ClickOnCookie() {
    cookies += cookieMultiplier;
    UpdateCookieCounter();
}

function MultiplierCookieFunc() {
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