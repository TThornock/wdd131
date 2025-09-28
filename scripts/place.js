const year = document.querySelector("#currentyear");

const today = new Date();

year.innerHTML = `<span class="currentyear">${today.getFullYear()}</span>`;


let oLastModif = new Date(document.lastModified);


const span = document.getElementById("lastModified");
span.textContent = oLastModif;

const url = 'https://api.open-meteo.com/v1/forecast?latitude=40.7608&longitude=-111.8910&current_weather=true';

fetch(url)
    .then(res => res.json())
    .then(data => {
        const weather = data.current_weather;
        const tempc = weather.temperature;
        const windkmh = weather.windspeed;

        const tempf = (tempc * 1.8) + 32;
        const windmph = windkmh * 0.621371;

        const tempfrounded = parseFloat(tempf.toFixed(1));
        const windmphrounded = parseFloat(windmph.toFixed(1));

        document.getElementById('temp').textContent = tempfrounded;
        document.getElementById('wind').textContent = windmphrounded;
        document.getElementById('windchill').textContent = calculateWindChill(tempfrounded, windmphrounded);
  });

function calculateWindChill(tempf, windmph) {
    if (tempf <= 50 && windmph >= 3) {
        const windfactor = Math.pow(windmph, 0.16);
        const base = 35.74;
        const tempset = 0.6215 * tempf;
        const windset = 35.75 * windfactor;
        const effect = 0.4275 * tempf * windfactor;

        const chill = base + tempset - windset + effect
        return chill.toFixed(1)
    }
    else {
        return 'N/A';
    }
}