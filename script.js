// ==========================================
// PASSWORD - PAGE 1
// ==========================================

function checkPassword() {

    const passwordInput = document.getElementById("password");
    const message = document.getElementById("passwordMessage");

    const password = passwordInput.value.trim().toLowerCase();

    if (password === "anu") {

        message.textContent = "Correct ❤️";

        setTimeout(function () {
            nextPage(2);
        }, 700);

    } else {

        message.textContent = "Wrong password 😏 Try again.";

        passwordInput.value = "";
        passwordInput.focus();
    }
}


// ==========================================
// PAGE NAVIGATION
// ==========================================

function nextPage(number) {

    const pages = document.querySelectorAll(".page");

    pages.forEach(function (page) {
        page.classList.remove("active");
    });

    const next = document.getElementById("page" + number);

    if (next) {
        next.classList.add("active");
    }
}


// ==========================================
// PAGE 2 - NO BUTTON RUNS AWAY
// ==========================================

function moveNoButton() {

    const button = document.getElementById("noButton");

    if (!button) {
        return;
    }

    const x = Math.random() * 300 - 150;
    const y = Math.random() * 200 - 100;

    button.style.transform =
        "translate(" + x + "px, " + y + "px)";
}


// ==========================================
// PAGE 5 - MAKE A WISH
// ==========================================

function makeWish() {

    const message = document.getElementById("wishMessage");
    const candles = document.querySelector(".candles");

    if (candles) {
        candles.textContent = "✨ ✨ ✨";
    }

    if (message) {
        message.textContent =
            "Wish made... ✨ I hope it comes true. ❤️";
    }

    setTimeout(function () {
        nextPage(6);
    }, 2000);
}


// ==========================================
// PAGE 6 - CUT THE CAKE
// ==========================================

function cutCake() {

    const cake = document.getElementById("cake");

    if (cake) {
        cake.textContent = "🍰";
    }

    createBalloons();

    setTimeout(function () {
        nextPage(7);
    }, 4000);
}


// ==========================================
// CREATE BALLOONS
// ==========================================

function createBalloons() {

    const container = document.getElementById("balloons");

    if (!container) {
        return;
    }

    const balloonList = [
        "🎈",
        "🎈",
        "🎈",
        "🎈",
        "🎈",
        "❤️",
        "💕",
        "🎈",
        "💗",
        "🎈"
    ];

    balloonList.forEach(function (emoji) {

        const balloon = document.createElement("span");

        balloon.textContent = emoji;

        balloon.style.position = "fixed";
        balloon.style.bottom = "-80px";
        balloon.style.left = Math.random() * 95 + "%";
        balloon.style.fontSize =
            (35 + Math.random() * 35) + "px";
        balloon.style.zIndex = "100";
        balloon.style.pointerEvents = "none";

        balloon.style.animation =
            "balloonRise " +
            (3 + Math.random() * 4) +
            "s linear";

        container.appendChild(balloon);

        setTimeout(function () {
            balloon.remove();
        }, 8000);
    });
}


// ==========================================
// PAGE 7 - OPEN LETTER
// ==========================================

function openLetter() {

    const letter = document.getElementById("letter");
    const nextButton = document.getElementById("letterNext");

    if (letter) {
        letter.classList.add("show");
    }

    if (nextButton) {
        nextButton.style.display = "inline-block";
    }
}


// ==========================================
// PAGE 8 - FLOATING HEARTS
// ==========================================

function createHeart() {

    const heart = document.createElement("div");

    heart.textContent = "❤️";

    heart.style.position = "fixed";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.bottom = "-40px";
    heart.style.fontSize =
        (15 + Math.random() * 25) + "px";

    heart.style.zIndex = "200";
    heart.style.pointerEvents = "none";

    heart.style.animation = "balloonRise 5s linear";

    document.body.appendChild(heart);

    setTimeout(function () {
        heart.remove();
    }, 5500);
}


// ==========================================
// START HEART ANIMATION
// ==========================================

setInterval(function () {

    const finalPage = document.getElementById("page8");

    if (
        finalPage &&
        finalPage.classList.contains("active")
    ) {
        createHeart();
    }

}, 700);