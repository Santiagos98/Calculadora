const prompt = require('prompt-sync')({sigint: true});

//Saludo personalizado
console.log("¡Bienvenido a mi calculadora personal!");

//Valores numéricos
var númeroUno; 
var númeroDos;
var resultado;

//Calculadora
ingresarNúmeros();
cálculo();

//Pedir al usuario valores numéricos
function ingresarNúmeros(){
    while (isNaN(númeroUno = parseFloat(prompt("Por favor, ingrese el primer número: ")))){
        console.log ("ERROR: No se ha ingresado un número");
    };
    while (isNaN(númeroDos = parseFloat(prompt("Ahora ingrese el segundo número: ")))){
        console.log ("ERROR: No se ha ingresado un número");
    };
};

//Selección de operación matemática
function cálculo(){
    var operación = prompt("¿Qué operación desea realizar? SUMA, RESTA, MULTIPLICACION, DIVISION, POTENCIACION, RADICACION: ");
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
        console.log("El resultado es: " + parseFloat(resultado.toFixed(4)));
        return resultado;
};
function restar(){
        resultado = númeroUno-númeroDos;
        console.log("El resultado es: " + parseFloat(resultado.toFixed(4)));
        return resultado;
};
function multiplicar(){
        resultado = númeroUno*númeroDos;
        console.log("El resultado es: " + parseFloat(resultado.toFixed(4)));
        return resultado;
};
function dividir(){
    if (númeroDos == 0){
        console.log("ERROR");
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

//Reiniciar calculadora
function reinicio(){
    var nuevaOperación = prompt("¿Ahora, qué desea realizar?\n A) Nueva operación con los mismos números\n B) Nueva operación con distintos números\n C) Salir de la calculadora\n"); 
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
