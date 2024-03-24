function calcularDivision(dividendo, divisor) {
    if (divisor === 0) {
        return "Error: División por cero";
    } else {
        return dividendo / divisor;
    }
}


let resultado = division(10, 2);
console.log(resultado);

resultado = division(5, 0);
console.log(resultado); 
