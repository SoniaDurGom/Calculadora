var resultado=null; //Resultado de la operacion
var num1=null; //Primer operador
var num2=null; //Segundo operador
var operador=null; //Operacion a realizar

function calcular (){ //LLamado cuando se pulsa "=" CALCULAR RESULTADO
    switch (operador) {
        case '+':
            resultado=sumar();
            break;

        case '-':
            resultado=restar()
            break; 

        case '*':  
            resultado=multiplicar();
            break;
        
        case '/':  
            resultado=dividir();
            break;
        default:
            console.log("Operador invalido");
            resultado="NAN";
            break;
    }
    return resultado; //Devuelve resultado de la operacion.
}
//Mostrar resultado: Con el igual
function mostrar (){
    console.log(resultado); //!!!!!!!!!!!!!!!!!!!!!!!!!!!!Mostrar resultado por intefaz, no consola
}

//Obtener numero: Si no hay ningun numero guardado guardarlo como num1
//Si ya hay numero guardarlo como num 2.
//Si ya hay uno y dos. No lo guarda 
function obtenerNumero (numero){ //Llamada al pulsar cualquier boton numerico
    if (num1!=null && num2==null){
        num2=numero;
        return num2;
    }
    if (num1==null){
        num1=numero;
        return num1;
    }
    else{
        return "ERROR"
    }
    
}

function obtenerOperador (op){
    if(op == '+' || op == '-' || op ==  '*' || op ==  '/'){
        operador=op;
        return operador;
    }
    else{
        return "ERROR"
    }
}

function sumar(){
    resultado=num1+num2;
    return resultado;
}

function restar (){
    resultado=num1-num2;
    return resultado;
}

function multiplicar (){
    resultado=num1*num2;
    return resultado;
}

function dividir (){
    if(num2!=0){
        resultado= num1/num2;
    }else{
        resultado="NAN";
    }
    return resultado;
}

//Boton borrar, todas las variables globales a estado inicial
function borrar (){
    num1=null;
    num2=null;
    operador=null;
    resultado=null;
}


//cdobject.onclick = function(){myScript};

module.exports= {sumar, restar, dividir, multiplicar,borrar,calcular,obtenerNumero,obtenerOperador,num1,num2,operador,resultado}
//module.exports.mostrar = mostrar;
//module.exports.borrar = borrar;
//odule.exports.multiplicar = multiplicar;
//module.exports.sumar = sumar;
//module.exports.restar = restar;
//module.exports.dividir = dividir;