window.addEventListener('scroll', (e) => {
	var item = document.querySelectorAll('.content');
	item.forEach((element) => {
		if (element.getBoundingClientRect().top < window.innerHeight) {
			element.classList.add('visible');
		}
	});
});
