export default class App {

    factorial(numero) {
        let resultado = 1;

        for(let m = 1; m <= numero; m++){
            resultado = resultado * m;
        }

        return resultado;
    }
}

let app = new App();

//Prueba de factorial()
console.log(app.factorial(5));