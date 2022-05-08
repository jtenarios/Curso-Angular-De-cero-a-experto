import { Component, OnInit } from '@angular/core';
import { Color, Hereo } from '../../interfaces/ventas.interfaces';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styles: [
  ]
})
export class OrdenarComponent implements OnInit {

  enMayusculas: boolean = false;

  ordernarPor: string = '';

  heroes: Hereo[] = [
    {
      nombre: 'Superrman',
      vuela: true,
      color: Color.azul
    },
    {
      nombre: 'Batman',
      vuela: false,
      color: Color.negro
    },
    {
      nombre: 'Robin',
      vuela: false,
      color: Color.verde
    },
    {
      nombre: 'Daredevil',
      vuela: false,
      color: Color.rojo
    },
    {
      nombre: 'Linterna Verde',
      vuela: true,
      color: Color.verde
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

  cambiar() {
    this.enMayusculas = !this.enMayusculas;
    console.log(this.enMayusculas);
  }

  cambiarOrden(valor: string) {
    this.ordernarPor = valor;
  }

}
