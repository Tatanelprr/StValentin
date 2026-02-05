document.addEventListener('DOMContentLoaded', () => {
	const btnOui = document.getElementById('btn-oui');
	const btnNon = document.getElementById('btn-non');
	const modal = document.getElementById('modal');
	const btnClose = document.getElementById('btn-close');
	const heartsContainer = document.getElementById('hearts-container');

	const createHeart = () => {
		const heart = document.createElement('div');
		heart.className = 'floating-heart';
		heart.innerHTML = '❤️';
		heart.style.left = Math.random() * 100 + 'vw';
		heart.style.animationDuration = (Math.random() * 3 + 2) + 's';
		heart.style.fontSize = (Math.random() * 20 + 10) + 'px';
		
		heartsContainer.appendChild(heart);

		setTimeout(() => { heart.remove(); }, 5000);
	};

	setInterval(createHeart, 300);

	const moveButton = () => {
		const x = Math.random() * (window.innerWidth - btnNon.offsetWidth - 20);
		const y = Math.random() * (window.innerHeight - btnNon.offsetHeight - 20);

		btnNon.style.position = 'fixed';
		btnNon.style.left = `${x}px`;
		btnNon.style.top = `${y}px`;
	};

	btnNon.addEventListener('mouseover', moveButton);
	btnNon.addEventListener('touchstart', moveButton);

	btnOui.addEventListener('click', () => {
		modal.classList.remove('hidden');
		btnOui.disabled = true;
		btnNon.disabled = true;
		
		for(let i = 0; i < 50; i++) {
			setTimeout(createHeart, i * 20);
		}
	});

	btnClose.addEventListener('click', () => {
		modal.classList.add('hidden');
	});
});