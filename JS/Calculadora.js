var aux;
var num1;
var num2;
var operador;

//Calcular(num1,num2, operador) //resultado

//Mostrar resultado: Con el igual

//Obtener numero: Si no hay numero guardado guardarlo como num1
//Si ya hay numero guardarlo como num 2.
//Si ya hay uno y dos. No lo guarda 

function sumar (numero1, numero2){
    let resultado= numero1+numero2;
    aux= resultado;
    return resultado;
}

function restar (numero1, numero2){
    let resultado= numero1-numero2;
    aux= resultado;
    return resultado;
}

function multiplicar (numero1, numero2){
    let resultado= numero1*numero2;
    aux= resultado;
    return resultado;
}

function dividir (numero1, numero2){
    if(numero1>0){
        let resultado= numero1/numero2;
        aux= resultado;
        return resultado;
    }else{
        return "NAN";
    }
}

function mostrar (numero){
    console.log(numero);
}

function borrar (){
    aux=0;
}

//cdobject.onclick = function(){myScript};

module.exports= {sumar, restar, dividir, multiplicar}
module.exports.mostrar = mostrar;
module.exports.borrar = borrar;
//odule.exports.multiplicar = multiplicar;
//module.exports.sumar = sumar;
//module.exports.restar = restar;
//module.exports.dividir = dividir;
//module.exports.aux = aux;