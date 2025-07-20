// Footer date
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

// Wind Chill Calculation (only applies below 10°C, so it will show N/A in Nigeria)
const temperature = 30; // Celsius
const windSpeed = 12; // km/h

function calculateWindChill(t, v) {
    return (
        13.12 +
        0.6215 * t -
        11.37 * Math.pow(v, 0.16) +
        0.3965 * t * Math.pow(v, 0.16)
    ).toFixed(1);
}

const windChillSpan = document.getElementById("windchill");
if (temperature <= 10 && windSpeed > 4.8) {
    windChillSpan.textContent = `${calculateWindChill(temperature, windSpeed)}°C`;
} else {
    windChillSpan.textContent = "N/A";
}