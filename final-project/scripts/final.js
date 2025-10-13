const year = document.querySelector("#currentyear");
const today = new Date();
year.textContent = today.getFullYear();


const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});