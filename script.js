let celsius = document.getElementById('celsius');
let fahrenheit = document.getElementById('fahrenheit');

celsius.oninput = () => {
    let oninput = (parseFloat(celsius.value) * 9) /5 + 32;
    fahrenheit.value = parseFloat(oninput.toFixed(2));
};

fahrenheit.oninput = () => {
    let oninput = ((parseFloat(fahrenheit.value) - 32) * 5) / 9;
    celsius.value = parseFloat(oninput.toFixed(2));
};