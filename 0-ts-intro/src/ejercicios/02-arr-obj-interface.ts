let habilidades: (boolean | string | number)[] = ['Bash', 'Counter', 'Healing', 100];

interface Personaje {
    nombre: String;
    hp: Number;
    habilidades: String[];
    puebloNatal?: String;
}

const personaje: Personaje = {
    nombre: 'Strifer',
    hp: 100,
    habilidades: ['Bash', 'Counter', 'Healing']
}

personaje.puebloNatal = 'Pueblo Paleta';

console.log(personaje);

