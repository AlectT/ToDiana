const answerYes = document.getElementById('si');
const answerNo = document.getElementById('no');

let contador = 0;
const frases = [
	'Jodete amor',
	'Y esta perra?',
	'Y aún así me quedé',
	'Mejor mierdota',
	'🖕🏼',
	'Pues no pues',
	'Matenme',
];

answerNo.addEventListener('click', () => {
	console.log(screen.height, screen.width);
	if (screen.width <= 600) {
		answerNo.style.top = `${Math.floor(Math.random() * 300) + 20}px`;
		answerNo.style.left = `${Math.floor(Math.random() * 350)}px`;
	} else {
		answerNo.style.top = `${Math.floor(Math.random() * 650)}px`;
		answerNo.style.left = `${Math.floor(Math.random() * 850)}px`;
	}

	if (contador >= 5 && contador < 17) {
		let randomFrase = frases[Math.floor(Math.random() * frases.length)];
		answerNo.textContent = randomFrase;
	}

	if (contador >= 17 && contador < 20) {
		answerNo.textContent = `${20 - contador}...`;
	}

	if (contador === 20) {
		answerYes.style.cursor = 'not-allowed';
		answerYes.href = '#';
		answerYes.style.backgroundColor = '#efeac98e';
		answerYes.textContent = 'Ya ni modo';
	}

	if (contador >= 20) {
		answerNo.textContent = 'Ya no funciona';
	}
	contador++;
});
