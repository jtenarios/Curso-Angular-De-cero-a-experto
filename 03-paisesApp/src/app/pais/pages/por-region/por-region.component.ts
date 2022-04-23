import { Component } from '@angular/core';
import { Country } from '../../interfaces/paises.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [`
    button: {
      margin-right: 5px;
    }
  `
  ]
})
export class PorRegionComponent {

  regiones: string[] = ['EU','EFTA','CARICOM','PA','AU','USAN','EEU','AL','ASEAN','CAIS','CEFTA','NAFTA','SAARC'];
  regionActiva: string = '';
  paises: Country[] = [];

  constructor( private paisService: PaisService) { }

  getClaseCSS(region: string): string {
    return region === this.regionActiva ? 'btn btn-primary' : 'btn btn-outline-primary';
  }

  activarRegion(region: string) {

    // Si ya estoy en la misma región, no volver a consumir el REST
    if ( region === this.regionActiva ) { return; }

    this.regionActiva = region;
    this.paises = [];

    this.paisService.buscarRegion(region)
      .subscribe( (paises) =>{
        console.log(paises);
        this.paises = paises;
      }
        
      );

  }
}
