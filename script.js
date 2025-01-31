document.addEventListener("DOMContentLoaded", () => {
    countdown(); // Executa la funció una vegada immediatament
    x = setInterval(countdown, 1000); // Inicia el comptador cada segon
});

let x; // Declara `x` globalment

function countdown() {
    const targetDate = new Date("May 23, 2025 18:30:00").getTime();
    const now = new Date().getTime();
    const distance = targetDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;

    if (distance < 0) {
        clearInterval(x);
        document.getElementById("countdown").innerHTML = "Countdown Complete!";
    }
}

/*Button change header*/

function updateButton() {
    const button = document.getElementById("btn");

    if (window.innerWidth <= 768) {
        button.innerHTML = "COMPRA LA TEVA ENTRADA";
        button.style.padding = "14px 20px";
    } else {
        button.textContent = "COMPRA LA TEVA ENTRADA";
        button.style.padding = "1.25rem 2rem";
    }
    }

    window.addEventListener("resize", updateButton);
    updateButton();

/*Menu*/

const checkbtn = document.querySelector(".checkbtn");
const navBar = document.querySelector(".nav-1");

checkbtn.onclick = function(event) {
    navBar.classList.toggle("active");
    event.stopPropagation(); 
};

document.addEventListener("click", function(event) {
    if (!navBar.contains(event.target) && !checkbtn.contains(event.target)) {
        navBar.classList.remove("active");
    }
});

