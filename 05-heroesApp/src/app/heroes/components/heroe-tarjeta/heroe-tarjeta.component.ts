import { Component, Input } from '@angular/core';
import { Heroe } from '../../interfaces/heroes.interface';

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styles: [`
  mat-card {
    margin-top: 20px
  }`]
})
export class HeroeTarjetaComponent {

  @Input() heroe!: Heroe; // Confía en mi TypeScript, siempre te voy a pasar un valor  --> !

}
