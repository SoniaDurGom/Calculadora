const Calculadora = require("../JS/Calculadora"); //Importar programa

beforeEach(()=>{
    Calculadora.num1=null;
    //..
})
afterEach(()=>{
    Calculadora.num1=null;
    //..
})

   describe("Obtencion de numero", () => {
        test ("Test obtenerNumero: ", ()=>{ 
            expect(Calculadora.obtenerNumero(1)).toBe(1); 
            expect(Calculadora.obtenerNumero(2)).toBe(2); 
            expect(Calculadora.obtenerNumero(52)).toBe(52); 
            Calculadora.borrar();
        })
    })

    describe("Obtencion de operadores", () =>{
        test ("Test obtenerOperador: ", ()=>{ 
            //Operadores validos
            expect(Calculadora.obtenerOperador('+')).toBe('+'); 
            expect(Calculadora.obtenerOperador('-')).toBe('-'); 
            expect(Calculadora.obtenerOperador('*')).toBe('*'); 
            expect(Calculadora.obtenerOperador('/')).toBe('/');
            //Operadores invalidos
            expect(Calculadora.obtenerOperador(':')).toBe("ERROR");
            Calculadora.borrar();
         })
    })

    describe ("Borrar", () =>{
        test ("Test borrar: ", ()=>{
            Calculadora.borrar();
            expect(Calculadora.num1).toBeNull();
            expect(Calculadora.num2).toBeNull();
            expect(Calculadora.resultado).toBeNull();
            expect(Calculadora.operador).toBeNull();
        })
    })

    describe ("Suma", () =>{
        test ("Test SUMA con numeros positivos: ", ()=>{ 
            Calculadora.obtenerNumero(1);
            Calculadora.obtenerNumero(2);
            expect(Calculadora.sumar()).toBe(3);
            Calculadora.borrar();
        })
            /*
            //VAriables locales
            expect(Calculadora.num1).toBeNull();
            expect(Calculadora.num2).toBeNull();
            expect(Calculadora.resultado).toBeNull();
            expect(Calculadora.operador).toBeNull();
            */
            
            test ("Test SUMA con decimales: ", ()=>{ 
            Calculadora.obtenerNumero(1.2);
            Calculadora.obtenerNumero(1.3);
            expect(Calculadora.sumar()).toBeCloseTo(2.5,5);
            Calculadora.borrar();
        })
        test ("Test SUMA con el primer nuemero negativo: ", ()=>{ 
            Calculadora.obtenerNumero(-5);
            Calculadora.obtenerNumero(3);
            expect(Calculadora.sumar()).toBe(-2);
            Calculadora.borrar();
        })

        test ("Test SUMA con el primer numero negativo y decimal: ", ()=>{ 
            Calculadora.obtenerNumero(-2.4);
            Calculadora.obtenerNumero(1.2);
            expect(Calculadora.sumar()).toBeCloseTo(-1.2,5);
            Calculadora.borrar();
        })

        test ("Test SUMA con el segundo numero negativo: ", ()=>{ 
            Calculadora.obtenerNumero(1);
            Calculadora.obtenerNumero(-2);
            expect(Calculadora.sumar()).toBe(-1);
            Calculadora.borrar();
        })

        test ("Test SUMA con el segundo numero negativo y decimal: ", ()=>{ 
            Calculadora.obtenerNumero(2);
            Calculadora.obtenerNumero(-1.2);
            expect(Calculadora.sumar()).toBeCloseTo(0.8,5)
            Calculadora.borrar();
        })

        test ("Test SUMA con los 2 numeros negativos: ", ()=>{ 
            //Con dos negativos
            Calculadora.obtenerNumero(-1);
            Calculadora.obtenerNumero(-2);
            expect(Calculadora.sumar()).toBe(-3);
            Calculadora.borrar();
        })

        test ("Test SUMA con los 2 numeros negativos y decimales: ", ()=>{ 
            Calculadora.obtenerNumero(-2.12);
            Calculadora.obtenerNumero(-3.2);
            expect(Calculadora.sumar()).toBeCloseTo(-5.32,5);
            Calculadora.borrar();  
        })
    })

    describe ("Resta", () =>{

        test ("Test resta con numeros positivos: ", ()=>{ 
            Calculadora.obtenerNumero(10);
            Calculadora.obtenerNumero(5);
            expect(Calculadora.restar()).toBe(5);
            Calculadora.borrar();
        })

        test ("Test resta con numeros decimales: ", ()=>{ 
            Calculadora.obtenerNumero(10.2);
            Calculadora.obtenerNumero(5.1);
            expect(Calculadora.restar()).toBeCloseTo(5.1,5);
            Calculadora.borrar();
        })

        test ("Test resta con el primer numero negativo: ", ()=>{ 
            //Un numero negativo
            Calculadora.obtenerNumero(-5);
            Calculadora.obtenerNumero(10);
            expect(Calculadora.restar()).toBe(-15);
            Calculadora.borrar();
        })

        test ("Test resta numero decimales y el primero negativo: ", ()=>{ 
            Calculadora.obtenerNumero(-4.2);
            Calculadora.obtenerNumero(2.1);
            expect(Calculadora.restar()).toBeCloseTo(-6.3,5);
            Calculadora.borrar();
        })
        
        test ("Test resta con el segundo numero negativo: ", ()=>{ 
            Calculadora.obtenerNumero(5);
            Calculadora.obtenerNumero(-10);
            expect(Calculadora.restar()).toBe(15);
            Calculadora.borrar();
        })
        
        test ("Test resta con numeros decimales y el segundo negativo: ", ()=>{ 
            Calculadora.obtenerNumero(5.2);
            Calculadora.obtenerNumero(-2.1);
            expect(Calculadora.restar()).toBeCloseTo(7.3,5);
            Calculadora.borrar();
        })
        test ("Test resta con numeros negativos: ", ()=>{ 
            //Con dos negativos
            Calculadora.obtenerNumero(-5);
            Calculadora.obtenerNumero(-10);
            expect(Calculadora.restar()).toBe(5);
            Calculadora.borrar();
        })

        test ("Test resta con numeros decimales y negativos: ", ()=>{ 
            Calculadora.obtenerNumero(-6.2);
            Calculadora.obtenerNumero(-2.3);
            expect(Calculadora.restar()).toBeCloseTo(-3.9,5);
            Calculadora.borrar();
        })
    })

    describe ("Multiplicacion", () =>{
        test ("Test MULTIPLICACIÓN con numeros positivos: ", ()=>{ //Test Multiplicacion
            Calculadora.obtenerNumero(10);
            Calculadora.obtenerNumero(5);
            expect(Calculadora.multiplicar()).toBe(50);
            Calculadora.borrar();
        })

        test ("Test MULTIPLICACIÓN con numeros decimales positivos: ", ()=>{ 
            Calculadora.obtenerNumero(10.2);
            Calculadora.obtenerNumero(6.2);
            expect(Calculadora.multiplicar()).toBeCloseTo(63.24,5);
            Calculadora.borrar();
        })

        test ("Test MULTIPLICACIÓN con el primer numero negativo: ", ()=>{ 
            //Con un valor negativo
            Calculadora.obtenerNumero(-1);
            Calculadora.obtenerNumero(5);
            expect(Calculadora.multiplicar()).toBe(-5);
            Calculadora.borrar();
        })

        test ("Test MULTIPLICACIÓN con numeros decimales y el primero negativo: ", ()=>{ 
            Calculadora.obtenerNumero(-3.5);
            Calculadora.obtenerNumero(2.6);
            expect(Calculadora.multiplicar()).toBeCloseTo(-9.1,5);
            Calculadora.borrar();
        })

        test ("Test MULTIPLICACIÓN con el segundo numero negativo: ", ()=>{ 
            Calculadora.obtenerNumero(2);
            Calculadora.obtenerNumero(-5);
            expect(Calculadora.multiplicar()).toBe(-10);
            Calculadora.borrar();
        })

        test ("Test MULTIPLICACIÓN con numeros decimales y el segundo negativo: ", ()=>{ 
            Calculadora.obtenerNumero(2.1);
            Calculadora.obtenerNumero(-3.2);
            expect(Calculadora.multiplicar()).toBeCloseTo(-6.72,5);
            Calculadora.borrar();
        })

        test ("Test MULTIPLICACIÓN con numeros negativos: ", ()=>{ 
            //Con dos valores negativos
            Calculadora.obtenerNumero(-1);
            Calculadora.obtenerNumero(-5);
            expect(Calculadora.multiplicar()).toBe(5);
            Calculadora.borrar();
        })

        test ("Test MULTIPLICACIÓN con numeros decimales y negativos: ", ()=>{ 
            Calculadora.obtenerNumero(-2.3);
            Calculadora.obtenerNumero(-6.3);
            expect(Calculadora.multiplicar()).toBeCloseTo(14.49,5);
            Calculadora.borrar();
        })
    })
    
    describe ("Division", () =>{
        test ("Test DIVISIÓN con numeros positivos: ", ()=>{ //Test division
            Calculadora.obtenerNumero(10);
            Calculadora.obtenerNumero(5);
            expect(Calculadora.dividir()).toBe(2);
            Calculadora.borrar();
        })

        test ("Test DIVISIÓN con el primer numero negativo: ", ()=>{
            //Con un valor negativo
            Calculadora.obtenerNumero(-15);
            Calculadora.obtenerNumero(3);
            expect(Calculadora.dividir()).toBe(-5);
            Calculadora.borrar();
        })

        test ("Test DIVISIÓN con numeros negativos: ", ()=>{
            Calculadora.obtenerNumero(-25);
            Calculadora.obtenerNumero(-5);
            expect(Calculadora.dividir()).toBe(5);
            Calculadora.borrar();
        })

        test ("Test DIVISIÓN entre 0: ", ()=>{
            Calculadora.obtenerNumero(0);
            Calculadora.obtenerNumero(2);
            expect(Calculadora.dividir()).toBe(0); 
            Calculadora.borrar();
        })

        test ("Test DIVISIÓN entre 0 y el segundo numero decimal: ", ()=>{
            Calculadora.obtenerNumero(0);
            Calculadora.obtenerNumero(2.5);
            expect(Calculadora.dividir()).toBe(0);
            Calculadora.borrar();
        })

        test ("Test DIVISIÓN con el segundo numero decimal", ()=>{
            //Decimales
            Calculadora.obtenerNumero(10);
            Calculadora.obtenerNumero(2.5);
            expect(Calculadora.dividir()).toBe(4); 
            Calculadora.borrar();
        })

        test ("Test DIVISIÓN siendo 0 el segundo numero: ", ()=>{
            //División por 0. 
            Calculadora.obtenerNumero(10);
            Calculadora.obtenerNumero(0);
            expect(Calculadora.dividir()).toBe(NaN); 
            Calculadora.borrar();
        })
    })

    describe ("Potencias", () =>{
        test ("Test POTENCIA con numeros positivos: ", ()=>{
            Calculadora.obtenerNumero(10);
            Calculadora.obtenerNumero(2);
            expect(Calculadora.potencia()).toBe(100);
            Calculadora.borrar();
        })

        test ("Test POTENCIA con la base negativa: ", ()=>{
            Calculadora.obtenerNumero(-15);
            Calculadora.obtenerNumero(3);
            expect(Calculadora.potencia()).toBe(-3375);
            Calculadora.borrar();
        })
        test ("Test POTENCIA con base 0: ", ()=>{
            Calculadora.obtenerNumero(0);
            Calculadora.obtenerNumero(2);
            expect(Calculadora.potencia()).toBe(0);
            Calculadora.borrar();
        })
        test ("Test POTENCIA con exponente 0: ", ()=>{
            Calculadora.obtenerNumero(2);
            Calculadora.obtenerNumero(0);
            expect(Calculadora.potencia()).toBe(1);
            Calculadora.borrar();
        })
        // test ("Test POTENCIA con base decimal: ", ()=>{
        //     Calculadora.obtenerNumero(2.2);
        //     Calculadora.obtenerNumero(2);
        //     expect(Calculadora.potencia()).toBe(4.84);
        //     Calculadora.borrar();
        // })
        test ("Test POTENCIA con exponente decimal: ", ()=>{
            Calculadora.obtenerNumero(2);
            Calculadora.obtenerNumero(2.2);
            expect(Calculadora.potencia()).toBeCloseTo(4.59);
            Calculadora.borrar();
        })

    })

    describe ("Raiz cuadrada", () =>{
        test ("Test RAIZ CUADRADA con numero positivo: ", ()=>{
            Calculadora.obtenerNumero(4);
            expect(Calculadora.raizCuadrada()).toBe(2);
            Calculadora.borrar();
        })

        test ("Test RAIZ CUADRADA con numero negativo: ", ()=>{
            Calculadora.obtenerNumero(-4);
            expect(Calculadora.raizCuadrada()).toBe(NaN);
            Calculadora.borrar();
        })

        test ("Test RAIZ CUADRADA con numero decimal: ", ()=>{
            Calculadora.obtenerNumero(2.2);
            expect(Calculadora.raizCuadrada()).toBeCloseTo(1.48);
            Calculadora.borrar();
        })

        test ("Test RAIZ CUADRADA de 0: ", ()=>{
            Calculadora.obtenerNumero(0);
            expect(Calculadora.raizCuadrada()).toBe(0);
            Calculadora.borrar();
        })

    })

    describe ("Calcular numero", () =>{
        test ("Calculo con operador suma: ", ()=>{ 
            Calculadora.obtenerNumero(5);
            Calculadora.obtenerNumero(3);
            Calculadora.obtenerOperador('+');
            expect(Calculadora.calcular()).toBe(8);
            Calculadora.borrar();
        })

        test ("Calculo con operador resta: ", ()=>{ 
            Calculadora.obtenerNumero(5);
            Calculadora.obtenerNumero(3);
            Calculadora.obtenerOperador('-');
            expect(Calculadora.calcular()).toBe(2);
            Calculadora.borrar();
        })

        test ("Calculo con operador multiplicacion", ()=>{
            Calculadora.obtenerNumero(5);
            Calculadora.obtenerNumero(3);
            Calculadora.obtenerOperador('*');
            expect(Calculadora.calcular()).toBe(15);
            Calculadora.borrar();
        })

        test ("Calculo con operador division", () =>{
            Calculadora.obtenerNumero(15);
            Calculadora.obtenerNumero(3);
            Calculadora.obtenerOperador('/');
            expect(Calculadora.calcular()).toBe(5);
            Calculadora.borrar();
        })
        test ("Calculo con operador raiz cuadrada", () =>{
            Calculadora.obtenerNumero(4);
            Calculadora.obtenerOperador('√');
            expect(Calculadora.calcular()).toBe(2);
            Calculadora.borrar();
        })

        test ("Calculo con operador invalido: ", ()=>{ 
            Calculadora.obtenerNumero(5);
            Calculadora.obtenerNumero(3);
            Calculadora.obtenerOperador('()');
            expect(Calculadora.calcular()).toBe('ERROR');
            Calculadora.borrar();
        })

        test ("Volver a calcular con el ultimo resultado: ", ()=>{ 
            Calculadora.obtenerNumero(5);
            Calculadora.obtenerOperador('+');
            Calculadora.obtenerNumero(10);
            expect(Calculadora.calcular()).toBe(15);
            Calculadora.obtenerOperador('-');
            Calculadora.obtenerNumero(5);
            expect(Calculadora.calcular()).toBe(10);
        })
    })