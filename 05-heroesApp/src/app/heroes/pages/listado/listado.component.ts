import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { Heroe } from '../heroe/interfaces/heroes.interface';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styles: [
  ]
})
export class ListadoComponent implements OnInit {

  heroes: Heroe[] = [];

  constructor(private heroresService: HeroesService) {

  }

  ngOnInit(): void {
    this.heroresService.getHeroes()
      .subscribe(heroes => { this.heroes = heroes });
  }

}
