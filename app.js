// Definer variabler til antal cookies og cookies i alt
let cookies = 0;
let cookiesInTotal = 0;

// Definer de forskellige opgraderinger til cookies delen
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

// Tjekker hvilket level du er i og finder den tilsvarende opgraderingspris samt opdaterer knappens titel
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

// Definer de forskellige opgraderinger til autoclicker delen
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

// Tjekker hvilken autoclicker knap titel, der vises og finder den tilsvarende opgraderingspris + interval samt opdaterer knappens titel
const autoclickerLevels = [
    { buttonLabel: "1 x Autoclicker", price: autoclickerPrice.level1Price, nextUprade: autoclickerInterval.level1Time, nextButtonLabel: "2 x Autoclicker" },
    { buttonLabel: "2 x Autoclicker", price: autoclickerPrice.level2Price, nextUprade: autoclickerInterval.level2Time, nextButtonLabel: "3 x Autoclicker" },
    { buttonLabel: "3 x Autoclicker", price: autoclickerPrice.level3Price, nextUprade: autoclickerInterval.level3Time, nextButtonLabel: "4 x Autoclicker" },
    { buttonLabel: "4 x Autoclicker", price: autoclickerPrice.level4Price, nextUprade: autoclickerInterval.level4Time, nextButtonLabel: "5 x Autoclicker" },
    { buttonLabel: "5 x Autoclicker", price: autoclickerPrice.level5Price, nextUprade: autoclickerInterval.level5Time, nextButtonLabel: "6 x Autoclicker" },
    { buttonLabel: "6 x Autoclicker", price: autoclickerPrice.level6Price, nextUprade: autoclickerInterval.level6Time, nextButtonLabel: "7 x Autoclicker" },
    { buttonLabel: "7 x Autoclicker", price: autoclickerPrice.level7Price, nextUprade: autoclickerInterval.level7Time, nextButtonLabel: "8 x Autoclicker" },
    { buttonLabel: "8 x Autoclicker", price: autoclickerPrice.level8Price, nextUprade: autoclickerInterval.level8Time, nextButtonLabel: "9 x Autoclicker" },
    { buttonLabel: "9 x Autoclicker", price: autoclickerPrice.level9Price, nextUprade: autoclickerInterval.level9Time, nextButtonLabel: "10 x Autoclicker" },
    { buttonLabel: "10 x Autoclicker", price: autoclickerPrice.level10Price, nextUprade: autoclickerInterval.level10Time, nextButtonLabel: "Maxed" },
];

let cookieMultiplier = multiplierCookies.level1; // Definer at cookieMultiplier skal starte i level 1
let autoclickInterval;
let labelOnAutoclickButton =  "1 x Autoclicker"; // Definer første knaps titel til autoclicker


document.querySelector("#cookieknap").addEventListener("click", function() {
    showPopup();
});

document.querySelector("#autoclicker").addEventListener("click", function() {
    showPopup();
});

function showPopup() {
    document.querySelector(".popup").classList.add("active");

    document.querySelector(".popup .close-btn").addEventListener("click", function() {
        document.querySelector(".popup").classList.remove("active");
    });
}


// Generel opdatering af selve knapperne og værdier samt design
function UpdateCookieCounter() {
    let cookieKnapHTML = document.getElementById("cookieknap");
    let autoclickerKnapHTML = document.getElementById("autoclicker");
    document.getElementById("cookies").innerHTML = `${cookies} cookies`;
    document.getElementById("cookiesInTotal").innerHTML = `${cookiesInTotal} cookies in total`;
    document.title = `${cookies} cookies - Clicker Spil`;
    cookieKnapHTML.disabled = true; // Knappen kan ikke klikkes på samt er gennemsigtig, hvis den ikke kan bruges
    autoclickerKnapHTML.disabled = true; // Knappen kan ikke klikkes på samt er gennemsigtig, hvis den ikke kan bruges
    for (let index in multiplierLevels) {
        const level = multiplierLevels[index];
        if (cookieMultiplier === level.level && cookies >= level.price) {
            cookieKnapHTML.disabled = false; // Hvis if statement returnerer true værdi, bliver knappen brugbar og synlig
        }
    }
    
    for (let index in autoclickerLevels) {
        const level = autoclickerLevels[index];
        if (labelOnAutoclickButton === level.buttonLabel && cookies >= level.price) {
            autoclickerKnapHTML.disabled = false; // Hvis if statement returnerer true værdi, bliver knappen brugbar og synlig
        }
    }
}

// Definer hvad der sker, når der klikkes på cookie
function ClickOnCookie() {
    let sound = document.getElementById("cookielyd");
    cookies += cookieMultiplier; // tilføj antal cookies til tæller (cookieMultiplier angiver det level og antal cookies, vi har købt)
    cookiesInTotal += cookieMultiplier; // tilføj antal cookies til total tæller (cookieMultiplier angiver det level og antal cookies, vi har købt)
    sound.play();
    UpdateCookieCounter();
}

// Definer autoclickerens function efter vi har købt autoclickeren første gang
function AutoclickOnCookie(interval) {
    UpdateCookieCounter();
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

// Function, hvor vi køber opgraderinger til vores multiplier
function MultiplierCookieStore() {
    for (let index in multiplierLevels) {
        const level = multiplierLevels[index];
        if (cookieMultiplier === level.level) {
            if (cookies >= level.price) { // Tjekker om vi har cookies nok til opgradering
                cookies -= level.price; // Fratrækker opgraderingspris fra cookies
                document.getElementById("cookieknap").innerHTML = level.nextButtonText;
                cookieMultiplier = level.nextLevel; // Fastsætter nyt level
                UpdateCookieCounter(level.price); // Opdaterer counter
                showPopup();
                //window.alert("Du opgraderede antal cookies pr. klik!"); // Giver achievement / confirmation popup ved køb
            }
            break;
        }
        continue;
    }
}

// Function, hvor vi køber opgraderinger til vores autoclicker
function AutoclickerStore() {
    for (let index in autoclickerLevels) {
        const level = autoclickerLevels[index];
        if (labelOnAutoclickButton === level.buttonLabel) {
            if (cookies >= level.price) { // Tjekker om vi har cookies nok til opgradering
                cookies -= level.price; // Fratrækker opgraderingspris fra cookies
                labelOnAutoclickButton = level.nextButtonLabel;
                document.getElementById("autoclicker").innerHTML = level.nextButtonLabel;
                AutoclickOnCookie(level.nextUprade, level.price); // Fastsætter nyt level
                showPopup();
                //window.alert("Du opgraderede din autoclicker!"); // Giver achievement / confirmation popup ved køb
            }
            break;
        }
        continue;
    }
}

setInterval(UpdateCookieCounter, 100) // Opdaterer siden kort efter den bliver loadet, så knapper bliver låst fra start, siden man ingen cookies vil have