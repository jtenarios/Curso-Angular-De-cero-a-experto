
// Desestructuración de objectos
interface Reproductor {
    volumen: number;
    segundo: number;
    cancion: string;
    detalles: Detalles;

}

interface Detalles {
    autor: string;
    anio: number;
}

const reproductor: Reproductor = {
    volumen: 90,
    segundo: 36,
    cancion: 'Mess',
    detalles: {
        autor: 'Edd Sheeran',
        anio: 2015
    }
}

//const autor = 'Fulano';

const { volumen, segundo, cancion, detalles, /* detalles:{ autor: autorDetalle} */ } = reproductor;
const { autor } = detalles;

// console.log('El volumen actual es de: ', volumen);
// console.log('El segundo actual es de: ', segundo);
// console.log('La cancion actual es de: ', cancion);
// console.log('El autor es: ', autor);


// Desestructuracion de arreglos

const dbz: string[] = ['Goku', 'Vejeta', 'Trunks'];
// const [ p1, p2, p3] = dbz;
const [ , , p3] = dbz;

// console.log('Personaje 1', dbz[0]);
// console.log('Personaje 2', dbz[1]);
// console.log('Personaje 3', dbz[2]);

// console.log('Personaje 1', p1);
// console.log('Personaje 2', p2);
console.log('Personaje 3', p3);