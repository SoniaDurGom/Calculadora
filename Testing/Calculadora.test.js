const Calculadora = require("./Calculadora"); //Importar programa

describe("Calculadora.js",()=> {  //Descripcion del programa
    test ("Test numero SUMA: ", ()=>{ //Test suma
        expect(Calculadora.sumar(3,1)).toBe(4); 
        expect(Calculadora.sumar(-3,1)).toBe(-2); 
        expect(Calculadora.sumar(3,-1)).toBe(2); 
        //expect(sumar(1,5)).toBe(6);
    })

    test ("Test numero RESTA: ", ()=>{ //Test resta
        expect(Calculadora.restar(5,3)).toBe(2);
        expect(Calculadora.restar(-3,5)).toBe(-8);
        expect(Calculadora.restar(3,-5)).toBe(-2);
    })
    
    test ("Test numero MULTIPLICACIÓN: ", ()=>{ //Test Multiplicacion
       expect(Calculadora.multiplicar(2,5)).toBe(10);
       expect(Calculadora.multiplicar(-2,5)).toBe(-10);
       expect(Calculadora.multiplicar(2,-5)).toBe(-10);
       expect(Calculadora.multiplicar(-2,-5)).toBe(+10);
    })

    test ("Test numero DIVISIÓN: ", ()=>{ //Test division
        expect(Calculadora.dividir(15,5)).toBe(3); 
        //expect(Calculadora.aux).toBe("3"); 
        expect(Calculadora.dividir(0,5)).toBe("NAN"); 
      
    })


})