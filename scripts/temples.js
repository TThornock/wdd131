const year = document.querySelector("#currentyear");

const today = new Date();

year.innerHTML = `<span class="currentyear">${today.getFullYear()}</span>`;


let oLastModif = new Date(document.lastModified);


const span = document.getElementById("lastModified");
span.textContent = oLastModif;



const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});