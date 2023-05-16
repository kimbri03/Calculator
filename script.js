let display = document.getElementById('screen');

const limpiar = () => {
    display.value = '';
}

const mostrar = (n) =>{
    display.value += n;
}

const calc = () => {
    display.value = eval(display.value);
}