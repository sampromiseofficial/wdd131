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
