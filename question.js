const question = document.getElementById('question');

question.addEventListener('animationend', async (e) => {
	// setTimeout(() => question.classList.remove('active'), 3000);
	// setTimeout(() => question.classList.add('active'), 3100);
	const answers = document.querySelector('.container-answers');
	setTimeout(() => answers.classList.add('active'), 1000);
});
