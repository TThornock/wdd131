const year = document.querySelector("#currentyear");

const today = new Date();

year.innerHTML = `<span class="currentyear">${today.getFullYear()}</span>`;


let oLastModif = new Date(document.lastModified);


const span = document.getElementById("lastModified");
span.textContent = oLastModif;



