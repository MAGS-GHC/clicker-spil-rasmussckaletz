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