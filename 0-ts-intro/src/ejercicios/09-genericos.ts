/*
    ===== Código de TypeScript =====
*/

function queTipoSoy<T>(arugmento: T){
    return arugmento;
}

let soyString = queTipoSoy('Hola mundo');
let soyNumero = queTipoSoy(100);
let soyArreglo = queTipoSoy([1, 2, 3, 4, 5]);
let soyExplicito = queTipoSoy<number>(100);