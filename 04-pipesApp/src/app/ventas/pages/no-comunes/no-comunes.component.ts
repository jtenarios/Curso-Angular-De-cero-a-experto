import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent {

  // i18nSelect
  nombre: string = 'Jaime';
  genero: string = 'masculino';
  invitacionMapa = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla'
  };

  CambiarPersona() {
    console.log('CambiarPersona()');
    this.nombre = 'Emma';
    this.genero = 'femenino';
  }

  // i18nPlural
  clientes: string[] = ['María', 'Pedro', 'Juan', 'Jaime', 'Alicia'];
  clientesMapa = {
    '=0': 'no tenemos ningún cliente esperando.',
    '=1': 'tenemos 1 cliente esperando',
    'other': 'tenemos # clientes esperando'
  }

  BorrarCliente() {
    this.clientes.splice(0, 1);
  }

  // KeyValue Pipe
  persona = {
    nombre: 'Jaime',
    edad: 37,
    direccion: 'Sevilla, España'
  }

  // Json Pipe
  heroes = [
    {
      nombre: 'Superman',
      vuela: true
    },
    {
      nombre: 'Robin',
      vuela: false
    },
    {
      nombre: 'Aquaman',
      vuela: false
    },
  ];

  //Async Pipe
  miObservable = interval(2000); //9, 1,2,3

  valorPromesa = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Tenemos data de la promesa')
    }, 3500);
  });


}
