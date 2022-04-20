const Calculadora = require("../JS/Calculadora"); //Importar programa

describe("Calculadora.js",()=> {  //Descripcion del programa

    test ("Test obtenerNumero: ", ()=>{ 
        expect(Calculadora.obtenerNumero(1)).toBe(1); 
        expect(Calculadora.obtenerNumero(2)).toBe(2); 
        expect(Calculadora.obtenerNumero(52)).toBe("ERROR"); 
        Calculadora.borrar();
    })

    test ("Test numero optenerOperador: ", ()=>{ 
        //Operadores validos
        expect(Calculadora.obtenerOperador('+')).toBe('+'); 
        expect(Calculadora.obtenerOperador('-')).toBe('-'); 
        expect(Calculadora.obtenerOperador('*')).toBe('*'); 
        expect(Calculadora.obtenerOperador('/')).toBe('/');
        //Operadores invalidos
        expect(Calculadora.obtenerOperador(':')).toBe("ERROR");
        Calculadora.borrar();
    })

    test ("Test borrar: ", ()=>{ 
       Calculadora.borrar();
    })

    test ("Test numero SUMA: ", ()=>{ 
        Calculadora.obtenerNumero(1);
        Calculadora.obtenerNumero(2);
        expect(Calculadora.sumar()).toBe(3);
        /*
        //VAriables locales
        expect(Calculadora.num1).toBeNull();
        expect(Calculadora.num2).toBeNull();
        expect(Calculadora.resultado).toBeNull();
        expect(Calculadora.operador).toBeNull();
        */
        Calculadora.borrar();

        //Con un negativo
        Calculadora.obtenerNumero(-5);
        Calculadora.obtenerNumero(3);
        expect(Calculadora.sumar()).toBe(-2);
        Calculadora.borrar();

        Calculadora.obtenerNumero(1);
        Calculadora.obtenerNumero(-2);
        expect(Calculadora.sumar()).toBe(-1);
        Calculadora.borrar();

        //Con dos negativos
        Calculadora.obtenerNumero(-1);
        Calculadora.obtenerNumero(-2);
        expect(Calculadora.sumar()).toBe(-3);
        Calculadora.borrar();

        
    })

    test ("Test numero RESTA: ", ()=>{ 
        Calculadora.obtenerNumero(10);
        Calculadora.obtenerNumero(5);
        expect(Calculadora.restar()).toBe(5);
        Calculadora.borrar();

        //Un numero negativo
        Calculadora.obtenerNumero(-5);
        Calculadora.obtenerNumero(10);
        expect(Calculadora.restar()).toBe(-15);
        Calculadora.borrar();

        Calculadora.obtenerNumero(5);
        Calculadora.obtenerNumero(-10);
        expect(Calculadora.restar()).toBe(15);
        Calculadora.borrar();

        //Con dos negativos
        Calculadora.obtenerNumero(-5);
        Calculadora.obtenerNumero(-10);
        expect(Calculadora.restar()).toBe(5);
        Calculadora.borrar();

    })
    
    test ("Test numero MULTIPLICACIÓN: ", ()=>{ //Test Multiplicacion
        Calculadora.obtenerNumero(10);
        Calculadora.obtenerNumero(5);
        expect(Calculadora.multiplicar()).toBe(50);
        Calculadora.borrar();

        //Con un valor negativo
        Calculadora.obtenerNumero(-1);
        Calculadora.obtenerNumero(5);
        expect(Calculadora.multiplicar()).toBe(-5);
        Calculadora.borrar();

        Calculadora.obtenerNumero(2);
        Calculadora.obtenerNumero(-5);
        expect(Calculadora.multiplicar()).toBe(-10);
        Calculadora.borrar();

        //Con dos valores negativos
        Calculadora.obtenerNumero(-1);
        Calculadora.obtenerNumero(-5);
        expect(Calculadora.multiplicar()).toBe(5);
        Calculadora.borrar();
    })

    test ("Test numero DIVISIÓN: ", ()=>{ //Test division
        Calculadora.obtenerNumero(10);
        Calculadora.obtenerNumero(5);
        expect(Calculadora.dividir()).toBe(2);
        Calculadora.borrar();

        //Con un valor negativo
        Calculadora.obtenerNumero(-15);
        Calculadora.obtenerNumero(3);
        expect(Calculadora.dividir()).toBe(-5);
        Calculadora.borrar();

        Calculadora.obtenerNumero(-25);
        Calculadora.obtenerNumero(-5);
        expect(Calculadora.dividir()).toBe(5);
        Calculadora.borrar();

        Calculadora.obtenerNumero(0);
        Calculadora.obtenerNumero(2);
        expect(Calculadora.dividir()).toBe(0); 
        Calculadora.borrar();

        //Decimales
        Calculadora.obtenerNumero(10);
        Calculadora.obtenerNumero(2.5);
        expect(Calculadora.dividir()).toBe(4); 
        Calculadora.borrar();

        //División por 0. 
        Calculadora.obtenerNumero(10);
        Calculadora.obtenerNumero(0);
        expect(Calculadora.dividir()).toBe("NAN"); 
        Calculadora.borrar();
    })

    test ("Test numero calcular: ", ()=>{ 
        Calculadora.obtenerNumero(5);
        Calculadora.obtenerNumero(3);
        Calculadora.obtenerOperador('+');
        expect(Calculadora.calcular()).toBe(8);
        Calculadora.borrar();

        Calculadora.obtenerNumero(5);
        Calculadora.obtenerNumero(3);
        Calculadora.obtenerOperador('-');
        expect(Calculadora.calcular()).toBe(2);
        Calculadora.borrar();

        Calculadora.obtenerNumero(5);
        Calculadora.obtenerNumero(3);
        Calculadora.obtenerOperador('*');
        expect(Calculadora.calcular()).toBe(15);
        Calculadora.borrar();

        Calculadora.obtenerNumero(15);
        Calculadora.obtenerNumero(3);
        Calculadora.obtenerOperador('/');
        expect(Calculadora.calcular()).toBe(5);
        Calculadora.borrar();

        Calculadora.obtenerNumero(5);
        Calculadora.obtenerNumero(3);
        Calculadora.obtenerOperador('()');
        expect(Calculadora.calcular()).toBe("NAN");
        Calculadora.borrar();
    })

})