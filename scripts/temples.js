// Footer: Current year and last modified date
document.addEventListener("DOMContentLoaded", () => {
  const year = new Date().getFullYear();
  const lastModified = document.lastModified;

  const lastModifiedElement = document.getElementById("lastModified");
  if (lastModifiedElement) {
    lastModifiedElement.textContent = `Last Modified: ${lastModified}`;
  }

  const footer = document.querySelector("footer p");
  if (footer) {
    footer.innerHTML = `&copy; ${year} &#10070; Oni Samson Promise &#10070; Nigeria`;
  }

  // Hamburger menu toggle
  const menuButton = document.getElementById("menu");
  const nav = document.querySelector("nav ul.navigation");

  menuButton.addEventListener("click", () => {
    nav.classList.toggle("open");
    menuButton.classList.toggle("open");
  });
});
