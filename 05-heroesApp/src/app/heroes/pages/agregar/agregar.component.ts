import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from "rxjs/operators";

import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';

import { Heroe, Publisher } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';
import { ConfirmarComponent } from '../../components/confirmar/confirmar.component';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: [`
    img {
      width: 100%;
      border-radius: 5px;
    }
  `]
})
export class AgregarComponent implements OnInit {

  publisher = [
    {
      id: 'DC Comics',
      desc: 'DC - Comics'
    },
    {
      id: 'Marvel Comics',
      desc: 'Marvel - Comics'
    }
  ];

  heroe: Heroe = {
    superhero: '',
    alter_ego: '',
    characters: '',
    first_appearance: '',
    publisher: Publisher.DCComics,
    alt_img: '',
  };

  constructor(private heroesService: HeroesService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private snackBar: MatSnackBar,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {

    if (!this.router.url.includes('editar')) {
      return;
    }

    this.activatedRoute.params
      .pipe(
        switchMap(resp => this.heroesService.getHeroesPorId(resp['id']))
      )
      .subscribe(hereo => this.heroe = hereo);

  }

  guardar() {
    if (this.heroe.superhero.trim().length === 0) {
      return;
    }

    // Si tenemos id es que estamos editando
    // Si no tiene id es que es un objeto nuevo
    if (this.heroe.id) {
      // acutaliar
      this.heroesService.actualizarHeroe(this.heroe)
        .subscribe(heroe => {
          console.log('Actualizando', heroe)
          this.mostrarSnackBar('Registro actualizado');
        })
    } else {
      // Crear nuevo registro
      this.heroesService.agregarHeroe(this.heroe)
        .subscribe(heroe => {
          this.router.navigate(['/heroes/editar', heroe.id]);
          this.mostrarSnackBar('Registro creado');
        });

    }
  }

  borrarHeroe() {

    const dialog = this.dialog.open(ConfirmarComponent, {
      width: '550px',
      data: this.heroe
    });

    dialog.afterClosed().subscribe(
      result => {
        if (result) {
          this.heroesService.borrarHeroe(this.heroe.id!)
            .subscribe(resp => {
              // navegar a la ruta Listado de Heroes
              this.router.navigate(['/heroes']);
            });
        }
      }
    )

  }

  mostrarSnackBar(mensaje: string) {
    this.snackBar.open(mensaje, 'ok!', {
      duration: 2500
    })
  }

}
