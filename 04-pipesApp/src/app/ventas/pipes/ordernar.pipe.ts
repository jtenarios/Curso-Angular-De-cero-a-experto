import { Pipe, PipeTransform } from '@angular/core';
import { Hereo } from '../interfaces/ventas.interfaces';

@Pipe({
  name: 'ordernar'
})
export class OrdernarPipe implements PipeTransform {

  transform(heroes: Hereo[], ordenarPor: string = 'sin valor'): Hereo[] {

    switch (ordenarPor) {
      case 'nombre':
        return heroes.sort((a, b) => (a.nombre > b.nombre) ? 1 : -1);
      case 'vuela':
        return heroes.sort((a, b) => (a.vuela > b.vuela) ? -1 : 1);
      case 'color':
        return heroes.sort((a, b) => (a.color > b.color) ? 1 : -1);
      default:
        return heroes;
    }

    // if (ordenarPor === 'sin valor') {
    //   return heroes
    // } else {
    //   // Compara por nombre
    //   heroes = heroes.sort((a, b) => (a.nombre > b.nombre) ? 1 : -1);
    // }

    // return heroes;
  }

}
