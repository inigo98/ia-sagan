window.onload = function() {
    if (localStorage.getItem('lang') == "es" || localStorage.getItem('lang') == "en") {} else {
        var ln = x = window.navigator.language || navigator.browserLanguage;
        console.log('hola' + ln);
        if (ln == 'en') {
            window.location.href = 'en/index.php'; //si esta en inglés va a ingles
        } else if (ln == 'es') {
            //window.location.href = 'index.php'; // si es es va a español
        } else if (ln == 'en-US') {
            window.location.href = 'en/index.php'; //si esta en inglés va a ingles
        } else {
            //window.location.href = 'index.php'; // si no es ninguna de los dos va a español
        }
    }

}
var select = document.getElementById('translate');
select.addEventListener('change',
    function() {
        var selectedOption = this.options[select.selectedIndex];
        localStorage.setItem('lang', selectedOption.value);
        if (selectedOption.value == "en") {
            window.location.href = 'en/index.php';
        }
    });