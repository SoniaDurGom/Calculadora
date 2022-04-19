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
    //console.log(resultado);
    document.getElementById('display').innerHTML = resultado;
    return resultado; //Devuelve resultado de la operacion.
   
}

//Mostrar resultado: Con el igual
function mostrar (){
}

function imprimir (){
}

//Obtener numero: Si no hay ningun numero guardado guardarlo como num1
//Si ya hay numero guardarlo como num 2.
//Si ya hay uno y dos. No lo guarda 
function obtenerNumero (numero){ //Llamada al pulsar cualquier boton numerico
    if (num1!=null && num2==null){
        num2=numero;
        //console.log(num2);
        document.getElementById('display').innerHTML = num2;
        return num2;
    }
    if (num1==null){
        num1=numero;
        //console.log(num1);
        document.getElementById('display').innerHTML = num1;
        return num1;
    }
    else{
        document.getElementById('display').innerHTML = "ERROR";
        return "ERROR";
    }
    
}

function obtenerOperador (op){
    if(op == '+' || op == '-' || op ==  '*' || op ==  '/'){
        operador=op;
        //console.log(operador);
        document.getElementById('display').innerHTML = operador;
        return operador;
    }
    else{
        //console.log(operador);
        document.getElementById('display').innerHTML = "ERROR";
        return "ERROR";
    }
    
}

function sumar(){
    resultado=num1+num2;
    //console.log(resultado);
    return resultado;
}

function restar (){
    resultado=num1-num2;
    console.log(resultado);
    return resultado;
}

function multiplicar (){
    resultado=num1*num2;
    console.log(resultado);
    return resultado;
}

function dividir (){
    if(num2!=0){
        resultado= num1/num2;
    }else{
        resultado="NAN";
    }
    console.log(resultado);
    return resultado;
}

//Boton borrar, todas las variables globales a estado inicial
function borrar (){
    num1=null;
    num2=null;
    operador=null;
    resultado=null;
    document.getElementById('display').innerHTML = resultado;
}

//cdobject.onclick = function(){myScript};

module.exports= {sumar, restar, dividir, multiplicar,borrar,calcular,obtenerNumero,obtenerOperador,num1,num2,operador,resultado}
