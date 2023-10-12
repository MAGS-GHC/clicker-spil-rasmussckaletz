document.querySelector("#cookieknap").addEventListener("click", function() {
    showPopup();
});

document.querySelector("#autoclicker").addEventListener("click", function() {
    showPopup();
});

function showPopup(upgradeText) {
    document.querySelector(".popup").classList.add("active");
    if (upgradeText.includes("Autoclicker")) {
        document.getElementById("buy-text").innerHTML = `Du købte ${upgradeText}!`;
    } else {
        document.getElementById("buy-text").innerHTML = `Du købte ${upgradeText} x Cookies!`;
    }
    
    document.querySelector(".popup .close-btn").addEventListener("click", function() {
        document.querySelector(".popup").classList.remove("active");
    });
}