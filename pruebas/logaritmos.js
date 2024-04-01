function calcularLogaritmo() {

    var base = document.getElementById('base').value;
    var numero = document.getElementById('numero').value;

    base = parseFloat(base);
    numero = parseFloat(numero);
    if (isNaN(base) || isNaN(numero) || base <= 0 || base == 1 || numero <= 0) {
        alert('Por favor ingrese valores válidos. La base debe ser mayor que 0 y diferente de 1. El número debe ser mayor que 0.');
        return;
    }

    var resultado = Math.log(numero) / Math.log(base);

 document.getElementById('resultado').innerText = 'Logaritmo de ' + numero + ' en base ' + base + ' es: ' + resultado;
}