let display = document.getElementById('display');

function appendNumber(number) {
    display.value += number;
}

function appendOperator(operator) {
    display.value += operator;
}

function clearDisplay() {
    display.value = '';
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch (e) {
        display.value = 'Ошибка';
    }
}

if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('service-worker.js').then((registration) => {
            console.log('Service Worker зарегистрирован: ', registration);
        }).catch((error) => {
            console.log('Ошибка регистрации Service Worker: ', error);
        });
    });
}
