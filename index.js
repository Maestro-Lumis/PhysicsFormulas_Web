console.log('Happy developing ✨')

let currentSection = null;
let currentIndex = 0;
let isFlipped = false;

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

function openSection(id) {
    currentSection = SECTIONS.find(s => s.id === id);
    currentIndex = 0;
    isFlipped = false;
    showScreen('screen-cards');
    renderCard();
}

function goBack() {
    showScreen('screen-sections');
    currentSection = null;
}

function nextCard() {
    if (!currentSection) return;
    currentIndex = (currentIndex + 1) % currentSection.formulas.length;
    isFlipped = false;
    renderCard();
}

function toggleCard() {
    isFlipped = !isFlipped;
    renderCard();
}

function renderCard() {
    const formula = currentSection.formulas[currentIndex];
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

function showScreen(id) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById(id).classList.add('active');
}

window.onload = init;