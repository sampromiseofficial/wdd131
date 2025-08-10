    let count = localStorage.getItem('reviewCount') || 0;
    count++;
    localStorage.setItem('reviewCount', count);
    document.getElementById('reviewCount').textContent = count;

// Footer dates
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