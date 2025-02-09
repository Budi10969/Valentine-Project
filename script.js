// script.js
let messageIndex = 0;
const messages = [
    "Are you sure?", // Pesan pertama setelah klik
    "Really sure?",
    "Think again!",
    "Please say yes!",
    "Don't do this!",
    "I'll be sad 😢",
    "You're breaking my heart 💔"
];

document.getElementById("noButton").addEventListener("click", function() {
    let noButton = document.getElementById("noButton");
    let yesButton = document.getElementById("yesButton");
    
    // Update pesan
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    
    // Perbesar hanya tombol Yes
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    const newSize = currentSize * (window.innerWidth > 480 ? 1.3 : 1.2);
    yesButton.style.fontSize = `${newSize}px`;
    
    // Animasi tekan untuk No
    noButton.style.transform = "scale(0.95)";
    setTimeout(() => {
        noButton.style.transform = "scale(1)";
    }, 100);
});

document.getElementById("yesButton").addEventListener("click", function() {
    this.style.animation = "celebrate 0.5s ease";
    setTimeout(() => {
        window.location.href = "yes_page.html";
    }, 500);
});

// Tambahkan efek hover untuk desktop
if (window.innerWidth > 768) {
    document.querySelectorAll('button').forEach(button => {
        button.addEventListener('mouseover', () => {
            button.style.transform = "scale(1.05)";
        });
        button.addEventListener('mouseout', () => {
            button.style.transform = "scale(1)";
        });
    });
}