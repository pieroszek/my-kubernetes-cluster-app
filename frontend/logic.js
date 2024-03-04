function changeColor() {
    const colors = ['red', 'green', 'blue', 'yellow', 'purple', 'orange'];
    const currentColor = document.getElementById('background').style.backgroundColor;
    let newColor = colors[Math.floor(Math.random() * colors.length)];
    while (newColor === currentColor) {
        newColor = colors[Math.floor(Math.random() * colors.length)];
    }
    document.getElementById('background').style.backgroundColor = newColor;
}
