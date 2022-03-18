/*
    ===== Código de TypeScript =====
*/

import { collapseTextChangeRangesAcrossMultipleVersions } from "typescript";

interface Pasajero {
    nombre: string;
    hijos?: string[];

}

const pasajero1: Pasajero = {
    nombre: 'Jaime'
}

const pasajero2: Pasajero = {
    nombre: 'Melissa',
    hijos: ['Natalia', 'Gabriel']
}

function imprimeHijos(pasajero: Pasajero): void{
    const cuantosHijos = pasajero.hijos?.length || 0;

    console.log(cuantosHijos);
}

imprimeHijos(pasajero1);