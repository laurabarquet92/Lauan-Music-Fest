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

const x = setInterval(countdown, 1000);



/*Button change header*/

function updateButton() {
    const button = document.getElementById("btn");

    if (window.innerWidth <= 768) {
        button.innerHTML = '<i class="fa-solid fa-ticket"></i>';
        button.style.padding = "14px 16px";
        button.style.fontSize = "14px";
    } else {
        button.textContent = "COMPRA LA TEVA ENTRADA";
        button.style.padding = "15px 24px";
        button.style.fontSize = "16px";
    }
    }

    window.addEventListener("resize", updateButton);
    updateButton();


