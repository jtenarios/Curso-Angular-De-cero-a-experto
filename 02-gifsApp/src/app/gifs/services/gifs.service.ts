import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SearchGifsResponse, Gif } from '../interface/gifs.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private _apiKey: string = 'GnSTEUFRIXNIp0xtekN1y9aMLdG5ighE';
  private servicioURL: string = 'https://api.giphy.com/v1/gifs';
  private _historial: string[] = [];

  public resultados: Gif[] = [];

  get historial() {
    return [...this._historial]; // [...] Rompe la referencia, no sé que significa
  }

  constructor(private http: HttpClient) {
    // if (localStorage.getItem('historial')) {
    //   this._historial = JSON.parse(localStorage.getItem('historial')! ); // Con ! le dices a angular confía en mi, se que este objeto es válido
    // }
    
    this._historial = JSON.parse(localStorage.getItem('historial')!) || []; // || []--> Si es null devuelve un array vacio
    this.resultados = JSON.parse(localStorage.getItem('resultados')!) || [];
  }

  buscarGifs(query: string = '') {

    query = query.trim().toLocaleLowerCase();

    if (!this._historial.includes(query)) { // insertar solo si no ya existe en la lista
      this._historial.unshift(query);
      this._historial = this._historial.splice(0, 10); // mostrar solo los 10 últimos
      
      localStorage.setItem('historial', JSON.stringify(this._historial));
      
    }

    const params = new HttpParams()
      .set('api_key', this._apiKey)      
      .set('limit', '10')
      .set('q', query);

    this.http.get<SearchGifsResponse>(`${this.servicioURL}/search`, {params})
      .subscribe((resp) => {
        this.resultados = resp.data;
        localStorage.setItem('resultados', JSON.stringify(this.resultados));
      })

  }



}
