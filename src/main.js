export default class App {

    factorial(numero) {
        let resultado = 1;

        for(let m = 1; m <= numero; m++){
            resultado = resultado * m;
        }

        return resultado;
    }

    convertirAString(numero) {
        let string = "";
        let n = 1;

        while(n <= numero){
            string+= "*";
            string - string+"*";
            n++;
        }

        return string;
    }

    obtenerDivisibles(numero) {
        let i = 0;
        let divisores = 1;

        do{
            if(numero%divisores === 0) {
                i++;
            }
            divisores++;
        }while(divisores<=numero);

        return i;
    }
    
    elevar(numero, potencia) {
        let resultado = 1;
        let n = 1;
    }
}

let app = new App();

//Prueba de factorial()
console.log(app.factorial(5));
//Prueba de convertirAString()
console.log(app.convertirAString(8));
//Prueba de obtenerDivisibles()
console.log(app.obtenerDivisibles(8));