const Calculadora = require("./Calculadora");

describe("Calculadora.js",()=> { 
    test ("Test numero SUMA: ", ()=>{
        expect(Calculadora.sumar(3,1)).toBe(4); 
        //expect(sumar(1,5)).toBe(6);
    })

    test ("Test numero RESTA: ", ()=>{
        expect(Calculadora.restar(5,3)).toBe(2);
    })
    
    test ("Test numero MULTIPLICACIÓN: ", ()=>{
       expect(Calculadora.multiplicar(2,5)).toBe(10);
    })

    test ("Test numero DIVISIÓN: ", ()=>{
        expect(Calculadora.dividir(15,5)).toBe(3); 
        //expect(Calculadora.aux).toBe("3"); 
        expect(Calculadora.dividir(0,5)).toBe("NAN"); 
      
    })


})