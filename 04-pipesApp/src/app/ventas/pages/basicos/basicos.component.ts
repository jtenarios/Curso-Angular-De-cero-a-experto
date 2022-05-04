import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent {

  nombreLower: string = 'jaime';
  nombreUpper: string = 'JAIME';
  nombreCompleto: string = 'jAiMe tEnA';

  fecha: Date = new Date(); // El día de hoy


}
