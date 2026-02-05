document.addEventListener('DOMContentLoaded', () => {
    const btnOui = document.getElementById('btn-oui');
    const btnNon = document.getElementById('btn-non');
    const modal = document.getElementById('modal');
    const btnClose = document.getElementById('btn-close');
    const countDisplay = document.getElementById('count');
    const counterText = document.getElementById('counter-text');
    
    let moveCount = 0;
    let ouiScale = 1;

    // 1. Cœurs flottants (identique)
    const createHeart = () => {
        const heart = document.createElement('div');
        heart.className = 'floating-heart';
        heart.innerHTML = ['❤️', '💖', '💝', '✨'][Math.floor(Math.random() * 4)];
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.animationDuration = (Math.random() * 3 + 2) + 's';
        heart.style.fontSize = (Math.random() * 20 + 15) + 'px';
        document.getElementById('hearts-container').appendChild(heart);
        setTimeout(() => heart.remove(), 5000);
    };
    setInterval(createHeart, 300);

    // 2. Logique du bouton "Non" avec bonus
    const moveButton = () => {
        const x = Math.random() * (window.innerWidth - btnNon.offsetWidth - 20);
        const y = Math.random() * (window.innerHeight - btnNon.offsetHeight - 20);

        btnNon.style.position = 'fixed';
        btnNon.style.left = `${x}px`;
        btnNon.style.top = `${y}px`;

        // Mise à jour du compteur
        moveCount++;
        countDisplay.innerText = moveCount;
        counterText.style.opacity = '1';

        // Faire grossir le bouton OUI
        ouiScale += 0.1;
        btnOui.style.transform = `scale(${ouiScale})`;
        
        // Changer le texte du bouton Non après plusieurs essais
        if(moveCount === 5) btnNon.innerText = "Sérieusement ?";
        if(moveCount === 10) btnNon.innerText = "Tu as de bons réflexes...";
        if(moveCount === 15) btnNon.innerText = "Bon, j'arrête."; // (Mais il continue quand même !)
    };

    btnNon.addEventListener('mouseover', moveButton);

    // 3. Bouton Oui
    btnOui.addEventListener('click', () => {
        modal.classList.remove('hidden');
        // Confettis massifs
        for(let i = 0; i < 100; i++) {
            setTimeout(createHeart, i * 10);
        }
    });

    btnClose.addEventListener('click', () => {
        modal.classList.add('hidden');
        // On réinitialise pour pouvoir recommencer le jeu
        moveCount = 0;
        ouiScale = 1;
        btnOui.style.transform = `scale(1)`;
        btnNon.style.position = 'relative';
        btnNon.style.left = 'auto';
        btnNon.style.top = 'auto';
        btnNon.innerText = "Non";
        counterText.style.opacity = '0';
    });
});