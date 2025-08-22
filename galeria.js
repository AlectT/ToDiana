const imagenes = [
	{ ruta: 'imagenes/1.jpg', fecha: '15-06-2025' },
	{ ruta: 'imagenes/2.jpg', fecha: '27-04-2025' },
	{ ruta: 'imagenes/3.jpg', fecha: '31-05-2025' },
	{ ruta: 'imagenes/4.jpg', fecha: '10-08-2025' },
	{ ruta: 'imagenes/5.jpg', fecha: '20-08-2025 / 09-08-2025' },
];

const orden = [];
const pictures = document.querySelectorAll('.moment');
const dates = document.querySelectorAll('.date');

function ordenRandom(min, max) {
	while (orden.length < imagenes.length) {
		let numero;
		if (orden.length === 0) {
			numero = orden.push(Math.floor(Math.random() * (max - min + 1)) + min);
		} else {
			numero = Math.floor(Math.random() * (max - min + 1)) + min;
			while (orden.includes(numero)) {
				numero = Math.floor(Math.random() * (max - min + 1)) + min;
			}
		}
		if (!orden.includes(numero)) {
			orden.push(numero);
		}
	}
	return orden;
}

ordenRandom(0, imagenes.length - 1);

pictures.forEach((picture, index) => {
	picture.src = picture.src !== undefined ? imagenes[orden[index]].ruta : null;
});

dates.forEach((date, index) => {
	date.textContent = imagenes[orden[index]].fecha;
});
