// script.js

// ----------- CONTACT FORM VALIDATION -----------
document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");

    if (form) {
        form.addEventListener("submit", function (event) {
            const name = document.querySelector("#name");
            const email = document.querySelector("#email");
            const message = document.querySelector("#message");

            // Basic validation
            if (!name.value.trim() || !email.value.trim() || !message.value.trim()) {
                alert("Please fill in all fields.");
                event.preventDefault();
                return;
            }

            const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
            if (!email.value.match(emailPattern)) {
                alert("Please enter a valid email address.");
                event.preventDefault();
                return;
            }

            // Optional: Show success
            alert("Message sent successfully!");
        });
    }
});

// ----------- SMOOTH SCROLLING -----------
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: "smooth" });
        }
    });
});
