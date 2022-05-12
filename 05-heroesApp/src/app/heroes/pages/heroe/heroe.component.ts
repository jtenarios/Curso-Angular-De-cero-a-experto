import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Heroe } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: [
  ]
})
export class HeroeComponent implements OnInit {

  heroe!: Heroe;

  constructor(private activatedRoute: ActivatedRoute, private heroesService: HeroesService) {
  }

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        switchMap(({ id }) => this.heroesService.getHeroesPorId(id))
      )
      .subscribe( heroe => this.heroe = heroe)

      // .subscribe(({id}) => console.log(id)) //desestructuración de argumentos  
      // .subscribe(data => {
      //     this.heroesService.getHeroesPorId(data.id)
      //       .subscribe(heroe => {
      //         this.heroe = heroe;
      //       })
      //   console.log(data);
      // })

      // .subscribe(({ id }) => {
      //   console.log(id);
      //   this.heroesService.getHeroesPorId(id)
      //     .subscribe(heroe => {
      //       this.heroe = heroe;
      //     })

      // })

  }

}
