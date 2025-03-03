
const changeButton = document.getElementById('change-bg');
changeButton.addEventListener('click', function () {
    const body = document.body;
    const colors = ['#f0f8ff', '#ffebcd', '#8a2be2', '#a52a2a', '#5f9ea0', '#d2691e', '#ff7f50'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    body.style.backgroundColor = randomColor
})