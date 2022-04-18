var aux;

//Calcular(num1,num2, operador)
//Mostrar resultado
//

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

cdobject.onclick = function(){myScript};

//module.exports= {sumar, restar, dividir, multiplicar}
module.exports.multiplicar = multiplicar;
module.exports.sumar = sumar;
module.exports.restar = restar;
module.exports.dividir = dividir;
module.exports.mostrar = mostrar;
module.exports.borrar = borrar;
//module.exports.aux = aux;