const temperature = 8;
const windSpeed = 10;

function calculateWindChill(temp, speed) {
    return 13.12 + 0.6215 * temp - 11.37 * Math.pow(speed, 0.16) + 0.3965 * temp * Math.pow(speed, 0.16);
}

function displayWillChill() {
    const windChillElement = document.getElementById("windchill");

    if (temperature <= 10 && windSpeed > 4.8) {
        const chill = calculateWindChill(temperature, windSpeed);
        windChillElement.textContent = `${chill.toFixed(1)} °C`;
    } else {
        windChillElement.textContent = "N/A";
    }
}

window.addEventListener("load", displayWillChill);