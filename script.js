document.addEventListener('DOMContentLoaded', () => {
    const btnOui = document.getElementById('btn-oui');
    const btnNon = document.getElementById('btn-non');
    const modal = document.getElementById('modal');
    const btnClose = document.getElementById('btn-close');
    const heartsContainer = document.getElementById('hearts-container');

    // 1. Création des cœurs flottants en arrière-plan
    const createHeart = () => {
        const heart = document.createElement('div');
        heart.className = 'floating-heart';
        heart.innerHTML = '❤️';
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.animationDuration = (Math.random() * 3 + 2) + 's';
        heart.style.fontSize = (Math.random() * 20 + 10) + 'px';
        
        heartsContainer.appendChild(heart);

        // Supprimer le cœur après l'animation
        setTimeout(() => { heart.remove(); }, 5000);
    };

    setInterval(createHeart, 300);

    // 2. Logique du bouton "Non" qui s'enfuit
    const moveButton = () => {
        // On calcule des positions aléatoires en restant dans le viewport
        // On retire une marge pour que le bouton ne sorte pas de l'écran
        const x = Math.random() * (window.innerWidth - btnNon.offsetWidth - 20);
        const y = Math.random() * (window.innerHeight - btnNon.offsetHeight - 20);

        btnNon.style.position = 'fixed';
        btnNon.style.left = `${x}px`;
        btnNon.style.top = `${y}px`;
    };

    btnNon.addEventListener('mouseover', moveButton);
    btnNon.addEventListener('touchstart', moveButton); // Pour mobile

    // 3. Action sur le bouton "Oui"
    btnOui.addEventListener('click', () => {
        modal.classList.remove('hidden');
        btnOui.disabled = true;
        btnNon.disabled = true;
        
        // Explosion de joie (confettis simplifiés)
        for(let i = 0; i < 50; i++) {
            setTimeout(createHeart, i * 20);
        }
    });

    // Fermer la modal
    btnClose.addEventListener('click', () => {
        modal.classList.add('hidden');
    });
});