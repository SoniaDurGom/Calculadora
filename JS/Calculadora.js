//GLOBAL.document = new JSDOM("Calculadora.html").window.document;
//var jsdom = require("jsdom");
//var JSDOM = jsdom.JSDOM;

//numeroanterior
//Boorado, primer clic, borra num2, segundo clic borra num1 y operador.
//Decimales, pasar a string y luego parse int o parsefloat.

var resultado=null; //Resultado de la operacion
var num1=null; //Primer operador
var num2=null; //Segundo operador
var operador=null; //Operacion a realizar

var aux;
var numCadena=""; //El valor del numero guardado como cadena
var count = 0; //Para recibir el segundo numero

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

        case null:  
            resultado="ERROR";
            break;
        default:
            //console.log("Operador invalido");
            resultado= 'NAN';
            break;
    }
    //console.log(resultado);
    return resultado; //Devuelve resultado de la operacion.
   
}

//Mostrar resultado: Con el igual
function mostrar (){ //Meter un for each
    count++;
    if(count>=1){
        obtenerNumero(aux);
        numCadena="";
        aux=0;
    }
    calcular();
    imprimirPantalla (resultado);
    if(resultado!=null){
        console.log(num1+operador +num2+ "="+resultado);
        //num1=resultado;
        console.log(num1+operador +num2+ "="+resultado);
    }
}

function imprimirPantalla (valor){ //Meter un for each
    document.getElementById('display').innerHTML = valor;
}

function imprimirNumero (numero){
    if(numero==null){
        resultado=null;
        num1=null;
    }
    if(operador==null) { //Si no hay operador, sigue leyendo numeros
        numCadena+=numero.toString();
        if(comaFlotante()==true){
            numCadena+='.';
            aux=parseFloat(numCadena);
            imprimirPantalla (aux);
            console.log(numCadena);
        }
        else{
            aux=parseInt(numCadena);
            imprimirPantalla (aux);
        }
        
    }else{
        if(num1==null){
            obtenerNumero(aux);
            numCadena="";
            aux=0;
        }
        numCadena+=numero.toString();
        aux=parseInt(numCadena);
        imprimirPantalla (aux);
    }
    //obtenerNumero(numero);
    //imprimirPantalla(numero);
}

function imprimirOperador (operador){ 
    obtenerOperador(operador);
    if(operador == '*'){
        imprimirPantalla ('x');
    }
    if(operador == '/'){
        imprimirPantalla ('÷');
    }
    else{
        imprimirPantalla (operador);
    }
}

function clr (){
    borrar();
    imprimirPantalla ("")
}

//Obtener numero: Si no hay ningun numero guardado guardarlo como num1
//Si ya hay numero guardarlo como num 2.
//Si ya hay uno y dos. No lo guarda 
function obtenerNumero (numero){ //Llamada al pulsar cualquier boton numerico
    if (num1!=null && num2==null){
        num2=numero;
        //console.log(num2);
        //document.getElementById('display').innerHTML = num2;
        return num2;
    }

    if (num1==null){
        num1=numero;
        //console.log(num1);
        //document.getElementById('display').innerHTML = num1;
        return num1;
    } 

    if (num1!=null && num2!=null){
        num1=resultado;
        num2=numero;
        //console.log(num2);
        //document.getElementById('display').innerHTML = num2;
        return num2;
    }
    else{
        //window.alert("Error");
        return "ERROR";
    }

}

function obtenerOperador (op){
    if(op == '+' || op == '-' || op ==  '*' || op ==  '/'){
        operador=op;
       
        //console.log(operador);
        //document.getElementById('display').innerHTML = operador;
        return operador;
    }
    else{
        //console.log(operador);
        //document.getElementById('display').innerHTML = "ERROR";
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
    //console.log(resultado);
    return resultado;
}

function multiplicar (){
    resultado=num1*num2;
    //console.log(resultado);
    return resultado;
}

function dividir (){
    if(num2!=0){
        resultado= num1/num2;
    }else{
        resultado= NaN;
    }
    //console.log(resultado);
    return resultado;
}

function comaFlotante(){
    return true;
}
//for each addeventlistener. Caa vez que clic muestra. MIRAR

//Boton borrar, todas las variables globales a estado inicial
function borrar (){
    num1=null;
    num2=null;
    operador=null;
    resultado=null;
    aux=null;
    numCadena="";
    count=0;
    //document.getElementById('display').innerHTML = resultado;
}

//cdobject.onclick = function(){myScript};
//const calculadora={
  //  num1: num1,
    //num2: null,
    //op,
    //resultado: null,
    //sumar: function(n1,n2){return n1+n2},
    //restar,
    //....
    //luego se exporta calculadora

//}



/*****************************************************************/

function recorridoTecla(id)
{
    console.log("Recorrido tecla: " + id);
}

/*****************************************************************/



module.exports= {sumar, restar, dividir, multiplicar,borrar,calcular,mostrar,obtenerNumero,obtenerOperador,num1,num2,operador,resultado}