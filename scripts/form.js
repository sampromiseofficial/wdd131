const products = [
  { id: "fc-1888", name: "flux capacitor", averagerating: 4.5 },
  { id: "fc-2050", name: "power laces", averagerating: 4.7 },
  { id: "fs-1987", name: "time circuits", averagerating: 3.5 },
  { id: "ac-2000", name: "low voltage reactor", averagerating: 3.9 },
  { id: "jj-1969", name: "warp equalizer", averagerating: 5.0 }
];

const selectElement = document.getElementById("productName");

products.forEach(product => {
  const option = document.createElement("option");
  option.value = product.name;
  option.textContent = product.name;
  selectElement.appendChild(option);
});

// Footer dates
document.addEventListener("DOMContentLoaded", () => {
  const year = new Date().getFullYear();
  const lastModified = document.lastModified;
  document.querySelector("footer p").innerHTML = `&copy; ${year} &#10070; Oni Samson Promise &#10070; Nigeria`;
  document.getElementById("lastModified").textContent = `Last Modified: ${lastModified}`;
});