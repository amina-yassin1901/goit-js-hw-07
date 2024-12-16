const inputEl = document.querySelector('input');
const spanEl = document.querySelector('span');
inputEl.addEventListener('input', event => {
    const trimEl = event.target.value.trim();
    if (trimEl === '') {
        spanEl.textContent = 'Anonymous';
    } else {
        spanEl.textContent = trimEl;
    }
});