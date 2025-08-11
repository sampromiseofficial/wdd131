// Set current year
const yearSpan = document.getElementById("year");
yearSpan.textContent = new Date().getFullYear();

// Set last modified date
const lastModified = document.getElementById("lastModified");
lastModified.textContent = `Last Modified: ${document.lastModified}`;

// Toggle mobile nav
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");
menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Toggle dark/light theme
const themeToggle = document.getElementById("themeToggle");
const body = document.body;
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
  body.classList.add("dark");
}

themeToggle.addEventListener("click", () => {
  body.classList.toggle("dark");
  localStorage.setItem("theme", body.classList.contains("dark") ? "dark" : "light");
});

// Contact form functionality
document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    const response = document.getElementById("formResponse");

    if (name && email && message) {
        // Save contact data
        localStorage.setItem("contact", JSON.stringify({ name, email, message }));

        // Increment review count
        let count = parseInt(localStorage.getItem("reviewCount") || "0", 10);
        count++;
        localStorage.setItem("reviewCount", count);

        response.textContent = `✅ Thank you, ${name}. Your message has been saved.`;
        response.style.color = "green";
        this.reset();
    } else {
        response.textContent = "⚠ Please fill in all fields correctly.";
        response.style.color = "red";
    }
});