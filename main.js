const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const rsvpForm = document.getElementById("rsvpForm");
const successMsg = document.getElementById("successMsg");

yesBtn.addEventListener("click", () => {
    // Ganti nomor WA kamu di sini (format: 62xxx tanpa +)
    // Tampilkan pesan sukses
    rsvpForm.style.display = "none";
    successMsg.style.display = "block";
    setTimeout(function () {
        const whatsappNumber = "6283114491318"; // GANTI DENGAN NOMOR WA KAMU
        const message = "ayokk! ditunggu jemputannya ❤️";
        const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
            message
        )}`;

        // Buka WhatsApp
        window.open(whatsappURL, "_blank");
        // Code to be executed after the delay
        // console.log("This message appears after 2 seconds.");
    }, 3000); // Delay in milliseconds (2000ms = 2 seconds)
});

noBtn.addEventListener("click", () => {
    const maxX = window.innerWidth - noBtn.offsetWidth - 40;
    const maxY = window.innerHeight - noBtn.offsetHeight - 40;

    const randomX = Math.random() * (maxX - 20) + 20;
    const randomY = Math.random() * (maxY - 20) + 20;

    noBtn.style.position = "fixed";
    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";
});

noBtn.addEventListener("click", (e) => {
    e.preventDefault();
});

// Smooth scroll for better experience
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
            target.scrollIntoView({ behavior: "smooth" });
        }
    });
});
