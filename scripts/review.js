    let count = localStorage.getItem('reviewCount') || 0;
    count++;
    localStorage.setItem('reviewCount', count);
    document.getElementById('reviewCount').textContent = count;

// Footer dates
document.addEventListener("DOMContentLoaded", () => {
    const year = new Date().getFullYear();
    const lastModified = document.lastModified;
    document.querySelector("footer p").innerHTML = `&copy; ${year} &#10070; Oni Samson Promise &#10070; Nigeria`;
    document.getElementById("lastModified").textContent = `Last Modified: ${lastModified}`;
});