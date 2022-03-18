/*
    ===== Código de TypeScript =====
*/

class PersonalNomal {
    constructor(
        public nombre: string,
        public direccion: string

    ) {
        console.log('PersonalNomal');
    }
}

class Heroe extends PersonalNomal {
    // alterEgo: string;
    // edad: number;
    // nombreReal: string;

    // constructor(alterEgo: string){
    //     this.alterEgo = alterEgo;
    // }

    constructor(
        public alterEgo: string,
        public edad: number,
        public nombreReal: string,
    ) {
        super(nombreReal, 'NY, Usa');
        console.log('Heroe');
    }
}

const ironman = new Heroe('Ironman', 45, 'Tony');

console.log('ironman :>> ', ironman);