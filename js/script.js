const nextBtn = document.querySelector('.button__next');
const prevBtn = document.querySelector('.button__prev');

nextBtn.addEventListener('click', function() {
    const items = document.querySelectorAll('.slide-item');
    document.querySelector('.slide').appendChild(items[0]);
})

prevBtn.addEventListener('click', function() {
    const items = document.querySelectorAll('.slide-item');
    document.querySelector('.slide').prepend(items[items.length - 1]);
})