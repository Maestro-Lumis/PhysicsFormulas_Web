console.log('Happy developing ✨')

let currentSection = null;
let currentIndex = 0;
let isFlipped = false;
let shuffledFormulas = [];
let startX = 0;

function init() {
    const list = document.getElementById('sections-list');
    list.innerHTML = '';
    SECTIONS.forEach(section => {
        const li = document.createElement('li');
        const btn = document.createElement('button');
        btn.className = 'section-btn';
        btn.textContent = section.title;
        btn.onclick = () => openSection(section.id);
        li.appendChild(btn);
        list.appendChild(li);
    });
}

function shuffle(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

function openSection(id) {
    currentSection = SECTIONS.find(s => s.id === id);
    shuffledFormulas = shuffle(currentSection.formulas);
    currentIndex = 0;
    isFlipped = false;
    showScreen('screen-cards');
    renderCard();
    initSwipe();
}

function goBack() {
    showScreen('screen-sections');
    currentSection = null;
}

function nextCard() {
    if (!currentSection) return;
    currentIndex = (currentIndex + 1) % shuffledFormulas.length;
    isFlipped = false;
    renderCard();
}

function prevCard() {
    if (!currentSection) return;
    currentIndex = (currentIndex - 1 + shuffledFormulas.length) % shuffledFormulas.length;
    isFlipped = false;
    renderCard();
}

function toggleCard() {
    isFlipped = !isFlipped;
    renderCard();
}

function renderCard() {
    const formula = shuffledFormulas[currentIndex];
    const content = document.getElementById('card-content');
    document.getElementById('btn-show').textContent = isFlipped ? 'скрыть' : 'покажи';

    if (isFlipped) {
        if (formula.image) {
            content.innerHTML = `<img src="images/${formula.image}" alt="${formula.раздел}">`;
        } else {
            content.innerHTML = `<p class="placeholder-text">Изображение появится позже</p>`;
        }
    } else {
        content.innerHTML = `
            <p class="card-kim">КИМ ${formula.kim}</p>
            <p class="card-раздел">${formula.раздел}</p>
            <p class="card-prompt">${formula.prompt}</p>
        `;
    }
}

function initSwipe() {
    const card = document.getElementById('card-box');

    card.addEventListener('click', () => toggleCard());

    card.addEventListener('touchstart', e => {
        startX = e.touches[0].clientX;
    }, { passive: true });

    card.addEventListener('touchend', e => {
        const diff = startX - e.changedTouches[0].clientX;
        if (Math.abs(diff) > 50) {
            if (diff > 0) nextCard();
            else prevCard();
        }
    }, { passive: true });
}

function showScreen(id) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById(id).classList.add('active');
}

window.onload = init;