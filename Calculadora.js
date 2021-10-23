const prompt = require('prompt-sync')({sigint: true});

//Saludo personalizado
console.log("¡Bienvenido a mi calculadora personal!");

//Valores numéricos
var númeroUno; 
var númeroDos;
var resultado;

var error = {
    dividirPorCero: "error1",
    radicacionPorCero: "error2",
    radicacionPorCero: "error3",
}

//Calculadora
ingresarNúmeros();
cálculo();

function ingresoNumero(tipoNumero) {
    var aux;
    while (isNaN(aux = parseFloat(mi_prompt(`Por favor, ingrese el ${tipoNumero} número: `)))){
        console.log ("ERROR: No se ha ingresado un número");
    };
    return aux;
}

//Pedir al usuario valores numéricos
function ingresarNúmeros(){
    númeroUno = ingresoNumero("primero");
    númeroDos = ingresoNumero("segundo");
};

//Selección de operación matemática
function cálculo(){
    var operación = mi_prompt("¿Qué operación desea realizar? SUMA, RESTA, MULTIPLICACION, DIVISION, POTENCIACION, RADICACION: ");
    switch(operación.toLowerCase()){
        case "suma":
            sumar();
            break;     
        case "resta":
            restar();
            break;
        case "multiplicacion":
            multiplicar();
            break;
        case "division":
            dividir();
            break;
        case "potenciacion":
            potenciar();
            break;
        case "radicacion":
            radicar();
            break;
        default:
            console.log("Operación no reconocida, reingrese una nueva operación");
            cálculo();
    };
    reinicio();
};

//Operaciones matemáticas
function sumar(){
        resultado = númeroUno+númeroDos
        console.log("El resultado es: " + parseFloat(resultado.toFixed(6)));
        return resultado;
};
function restar(){
        resultado = númeroUno-númeroDos;
        console.log("El resultado es: " + parseFloat(resultado.toFixed(6)));
        return resultado;
};
function multiplicar(){
        resultado = númeroUno*númeroDos;
        console.log("El resultado es: " + parseFloat(resultado.toFixed(6)));
        return resultado;
};
function dividir(){
    if (númeroDos == 0){
        console.log(error.dividirPorCero);
    } else {
        resultado = númeroUno/númeroDos;
        console.log("El resultado es: " + parseFloat(resultado.toFixed(4)));
        return resultado;
    }; 
};
function potenciar(){
        resultado = Math.pow(númeroUno,númeroDos);
        console.log("El resultado es: " + parseFloat(resultado.toFixed(4)));
        return resultado;
};
function radicar(){
    if (númeroUno <= 0 || númeroDos == 0){
        console.log("ERROR");
    } else {
        resultado = Math.pow(númeroUno,1/númeroDos);
        console.log("El resultado es: " + parseFloat(resultado.toFixed(4)));
        return resultado;
    };
};

function mi_prompt(string) {
    console.log(string);
    return prompt();
}

//Reiniciar calculadora
function reinicio(){
    var nuevaOperación = mi_prompt("¿Ahora, qué desea realizar?\n A) Nueva operación con los mismos números\n B) Nueva operación con distintos números\n C) Salir de la calculadora"); 
        if (nuevaOperación.toLowerCase() === "a"){
            cálculo();
        } else if (nuevaOperación.toLowerCase() === "b"){
            ingresarNúmeros();
            cálculo();
        } else if (nuevaOperación.toLowerCase() === "c"){ 
            console.log("¡Adiós!");
        } else {
            console.log("Por favor, elija entre A, B y C");
            reinicio();
        };
};

