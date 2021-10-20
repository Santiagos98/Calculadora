const prompt = require('prompt-sync')();

//Saludo personalizado
console.log("¡Bienvenido a mi calculadora personal!");

//Valores numéricos
var númeroUno; 
var númeroDos;
var resultado = "";

//Calculadora
ingresarNúmeros();
while (resultado == ""){
    resultado = cálculo();
};
function cálculo(){
    var operación = prompt("¿Qué operación desea realizar? SUMA, RESTA, MULTIPLICACION, DIVISION, POTENCIACION: ");
    switch(operación.toLowerCase()){
        case "suma":
            console.log("El resultado es: "+sumar());
            break;     
        case "resta":
            console.log("El resultado es: "+restar());
            break;
        case "multiplicacion":
            console.log("El resultado es: "+multiplicar());
            break;
        case "division":
            console.log("El resultado es: "+dividir());
            break;
        case "potenciacion":
            console.log("El resultado es: "+potenciar());
            break;
        default:
            console.log("Operación no reconocida, reingrese una nueva operación");
            resultado = "";
    };
    reinicio()
    return resultado;
};

//Pedir al usuario valores numéricos
function ingresarNúmeros(){
    while (isNaN(númeroUno = parseFloat(prompt("Por favor, ingrese el primer número: ")))){
        console.log ("ERROR: No se ha ingresado un número");
        númeroUno;
    };
    while (isNaN(númeroDos = parseFloat(prompt("Ahora ingrese el segundo número: ")))){
        console.log ("ERROR: No se ha ingresado un número");
        númeroDos;
    };
};

//Operaciones matemáticas
function sumar(){
        resultado = númeroUno+númeroDos
        return parseFloat(resultado.toFixed(4));
};
function restar(){
        resultado = númeroUno-númeroDos;
        return parseFloat(resultado.toFixed(4));
};
function multiplicar(){
        resultado = númeroUno*númeroDos;
        return resultado;
};
function dividir(){
    if (númeroDos != 0){
        resultado = númeroUno/númeroDos;
    } else {
        console.log("ERROR");
        reinicio();
    };
        return parseFloat(resultado.toFixed(4));
};
function potenciar(){
        resultado = númeroUno**númeroDos;
        return parseFloat(resultado.toFixed(4));
};

//Reiniciar calculadora
function reinicio(){
    var nuevaOperación = prompt("¿Desea realizar una nueva operación? SI, NO: ");
        if (nuevaOperación.toLowerCase() === "si"){
            resultado = "";
            ingresarNúmeros()
            cálculo();
        } else if (nuevaOperación.toLowerCase() === "no"){
            console.log("¡Adiós!");
        } else { 
            console.log("Por favor, solo responda SI o NO");
            reinicio();
        };
};
