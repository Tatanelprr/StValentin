document.addEventListener('DOMContentLoaded', () => {
    const btnOui = document.getElementById('btn-oui');
    const btnNon = document.getElementById('btn-non');
    const modal = document.getElementById('modal');
    const btnClose = document.getElementById('btn-close');
    const heartsContainer = document.getElementById('hearts-container');

    // 1. Création des cœurs flottants
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

    // 2. Logique du bouton "Non" qui s'enfuit
    const moveButton = () => {
        const x = Math.random() * (window.innerWidth - btnNon.offsetWidth - 20);
        const y = Math.random() * (window.innerHeight - btnNon.offsetHeight - 20);

        btnNon.style.position = 'fixed';
        btnNon.style.left = `${x}px`;
        btnNon.style.top = `${y}px`;
    };

    btnNon.addEventListener('mouseover', moveButton);
    btnNon.addEventListener('touchstart', moveButton);

    // 3. Action sur le bouton "Oui"
    btnOui.addEventListener('click', () => {
        modal.classList.remove('hidden');
        
        // On ne désactive plus les boutons pour pouvoir rejouer !
        
        // Explosion de joie
        for(let i = 0; i < 50; i++) {
            setTimeout(createHeart, i * 20);
        }
    });

    // Fermer la modal et réinitialiser le bouton "Non"
    btnClose.addEventListener('click', () => {
        modal.classList.add('hidden');
        
        // Optionnel : remet le bouton "Non" à sa place d'origine
        btnNon.style.position = 'relative';
        btnNon.style.left = 'auto';
        btnNon.style.top = 'auto';
    });
});