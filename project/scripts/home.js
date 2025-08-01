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

// Load featured projects dynamically
const projects = [
  {
    title: "Portfolio Website",
    description: "A responsive personal portfolio to showcase my skills.",
    image: "images/portfolio.webp"
  },
  {
    title: "Weather App",
    description: "A simple weather forecast app using JavaScript APIs.",
    image: "images/weather.webp"
  },
  {
    title: "To-do List",
    description: "Interactive to-do list using localStorage.",
    image: "images/todo.webp"
  }
];

const projectsContainer = document.getElementById("projectsContainer");

projects.forEach(project => {
  const card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `
    <img src="${project.image}" alt="${project.title}" loading="lazy">
    <h3>${project.title}</h3>
    <p>${project.description}</p>
  `;
  projectsContainer.appendChild(card);
});
