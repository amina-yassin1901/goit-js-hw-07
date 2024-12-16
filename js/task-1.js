const itemEl = document.querySelectorAll('.item');
console.log(`Number of categories: ${itemEl.length}`)

itemEl.forEach((item) => {
    const titleEl = item.querySelector('h2').textContent;
    const numberItems = item.querySelectorAll('ul li').length;
    console.log(`Category: ${titleEl}`);
    console.log(`Elements: ${numberItems}`);
});
