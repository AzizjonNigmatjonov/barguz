const barBtn = document.getElementById('barBtn');
const barList = document.getElementById('bar-list');
barBtn.addEventListener('click', e => {
    barList.style.display = 'inline-block';
})

window.addEventListener('click', e => {
    if (e.target == barList) {
        barList.style.display = 'none';
    }
})

