const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
    templeName: "Accra Ghana",
    location: "Accra Ghana",
    dedicated: "2004, January, 11",
    area: 17500,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/accra-ghana/400x225/accra-ghana-temple-detail-249022-2400x1200.jpg"
  },
  {
    templeName: "Brisbane Australia",
    location: "Brisbane, Australia",
    dedicated: "2003, June, 15",
    area: 10700,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/brisbane-australia/800x500/brisbane-australia-temple-lds-745088-wallpaper.jpg"
  },
  {
    templeName: "London England",
    location: "London, England",
    dedicated: "1992, October, 18",
    area: 42652,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/london-england/800x500/london-england-temple-lds-650239-wallpaper.jpg"
  },
  {
    templeName: "Johannesburg South Africa",
    location: "Johannesburg South Africa",
    dedicated: "1985, August, 25",
    area: 19184,
    imageUrl:"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/johannesburg-south-africa/800x500/johannesburg-south-africa-temple-lds-83166-wallpaper.jpg"
    },
    {
    templeName: "The Hague Netherlands",
    location: "The Hague Netherlands",
    dedicated: "2002, September, 8",
    area: 14477,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/the-hague-netherlands/2019/800x500/1-hague-netherlands-temple-2196995.jpg"
    },
];

const main = document.querySelector("main");
const h2 = document.querySelector("main h2");

// Create container
const container = document.createElement("div");
container.classList.add("container");
main.appendChild(container);

// Create temple card
function createTempleCard(temple) {
  const section = document.createElement("section");
  const h3 = document.createElement("h3");
  h3.textContent = temple.templeName;

  const loc = document.createElement("p");
  loc.innerHTML = `<strong>Location:</strong> ${temple.location}`;

  const date = document.createElement("p");
  date.innerHTML = `<strong>Dedicated:</strong> ${temple.dedicated}`;

  const size = document.createElement("p");
  size.innerHTML = `<strong>Size:</strong> ${temple.area.toLocaleString()} sq ft`;

  const figure = document.createElement("figure");
  const img = document.createElement("img");
  img.src = temple.imageUrl;
  img.alt = temple.templeName;
  img.loading = "lazy";

  figure.appendChild(img);
  section.appendChild(h3);
  section.appendChild(loc);
  section.appendChild(date);
  section.appendChild(size);
  section.appendChild(figure);
  container.appendChild(section);
}

// Clear and display
function displayTemples(array) {
  container.innerHTML = "";
  array.forEach(createTempleCard);
}

// Initial display
displayTemples(temples);

// Filters
function filterTemples(type) {
  let filtered = [];

  switch (type) {
    case "Old":
      filtered = temples.filter(t => parseInt(t.dedicated.split(",")[0]) < 1900);
      break;
    case "New":
      filtered = temples.filter(t => parseInt(t.dedicated.split(",")[0]) > 2000);
      break;
    case "Large":
      filtered = temples.filter(t => t.area > 90000);
      break;
    case "Small":
      filtered = temples.filter(t => t.area < 10000);
      break;
    default:
      filtered = temples;
  }

  h2.textContent = type === "Home" ? "All Temples" : `${type} Temples`;
  displayTemples(filtered);
}

// Menu events
document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    document.querySelectorAll("nav a").forEach(a => a.classList.remove("active"));
    link.classList.add("active");
    filterTemples(link.title);
  });
});

// Toggle mobile menu
const menuButton = document.getElementById("menu");
const navMenu = document.querySelector(".navigation");

menuButton.addEventListener("click", () => {
  menuButton.classList.toggle("open");
  navMenu.classList.toggle("open");
});

// Footer dates
document.addEventListener("DOMContentLoaded", () => {
  const year = new Date().getFullYear();
  const lastModified = document.lastModified;
  document.querySelector("footer p").innerHTML = `&copy; ${year} &#10070; Oni Samson Promise &#10070; Nigeria`;
  document.getElementById("lastModified").textContent = `Last Modified: ${lastModified}`;
});
