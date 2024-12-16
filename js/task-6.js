function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const controlsEl = document.querySelector('#controls');
const inputEl = controlsEl.querySelector('input');
const createBtn = controlsEl.querySelector('[data-create]');
const destroyBtn = controlsEl.querySelector('[data-destroy]');
const boxesContainer = document.querySelector('#boxes');


function createBoxes(amount) {
  boxesContainer.innerHTML = '';
  const elements = [];
  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
    box.style.width = `${30 + i * 10}px`;
    box.style.height = `${30 + i * 10}px`;
    box.style.backgroundColor = getRandomHexColor();
    box.style.margin = '5px';
    elements.push(box);
  }

  boxesContainer.append(...elements);
}
  function destroyBoxes() {
  boxesContainer.innerHTML = '';
  }
  createBtn.addEventListener('click', () => {
    const amount = parseInt(inputEl.value.trim(), 10);
    if (amount < 1 || amount > 100 || isNaN(amount)) {
      return;
    }
    createBoxes(amount);
    inputEl.value = '';
  });

destroyBtn.addEventListener('click', destroyBoxes);