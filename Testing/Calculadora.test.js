const Calculadora = require("../JS/Calculadora"); //Importar programa

describe("Calculadora.js",()=> {  //Descripcion del programa

    test ("Test obtenerNumero: ", ()=>{ //Test suma
        expect(Calculadora.obtenerNumero(1)).toBe(1); 
        expect(Calculadora.obtenerNumero(2)).toBe(2); 
        expect(Calculadora.obtenerNumero(52)).toBe("ERROR"); 
    })

    test ("Test numero optenerOperador: ", ()=>{ //Test suma
        expect(Calculadora.obtenerOperador('+')).toBe('+'); 
        expect(Calculadora.obtenerOperador('-')).toBe('-'); 
        expect(Calculadora.obtenerOperador('*')).toBe('*'); 
        expect(Calculadora.obtenerOperador('/')).toBe('/');
        expect(Calculadora.obtenerOperador(':')).toBe("ERROR");
    })

    test ("Test borrar: ", ()=>{ 
       Calculadora.borrar();
    })

    test ("Test numero SUMA: ", ()=>{ //Test resta
        Calculadora.obtenerNumero(1);
        Calculadora.obtenerNumero(2);
        expect(Calculadora.sumar()).toBe(3);
        Calculadora.borrar();

        Calculadora.obtenerNumero(-5);
        Calculadora.obtenerNumero(3);
        expect(Calculadora.sumar()).toBe(-2);
        Calculadora.borrar();

        Calculadora.obtenerNumero(1);
        Calculadora.obtenerNumero(-2);
        expect(Calculadora.sumar()).toBe(-1);
        Calculadora.borrar();

        Calculadora.obtenerNumero(1);
        Calculadora.obtenerNumero(2);
        expect(Calculadora.sumar()).toBe(3);
        Calculadora.borrar();
    })

    test ("Test numero RESTA: ", ()=>{ //Test resta
        Calculadora.obtenerNumero(10);
        Calculadora.obtenerNumero(5);
        expect(Calculadora.restar()).toBe(5);
        Calculadora.borrar();

        Calculadora.obtenerNumero(-5);
        Calculadora.obtenerNumero(10);
        expect(Calculadora.restar()).toBe(-15);
        Calculadora.borrar();

        Calculadora.obtenerNumero(5);
        Calculadora.obtenerNumero(-10);
        expect(Calculadora.restar()).toBe(15);
        Calculadora.borrar();

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

        Calculadora.obtenerNumero(-1);
        Calculadora.obtenerNumero(5);
        expect(Calculadora.multiplicar()).toBe(-5);
        Calculadora.borrar();

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