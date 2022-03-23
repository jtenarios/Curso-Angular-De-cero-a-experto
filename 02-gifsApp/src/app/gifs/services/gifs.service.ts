import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchGifsResponse } from '../interface/gifs.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private _apiKey: string = 'GnSTEUFRIXNIp0xtekN1y9aMLdG5ighE';
  private _historial: string[] = [];

  public resultados: Gif[] =[];

  get historial() {
    return [...this._historial]; // [...] Rompe la referencia, no sé que significa
  }

  constructor(private http: HttpClient) {

  }

  buscarGifs(query: string) {

    query = query.trim().toLocaleLowerCase();

    if (!this._historial.includes(query)) { // insertar solo si no ya existe en la lista
      this._historial.unshift(query);
      this._historial = this._historial.splice(0, 10); // mostrar solo los 10 últimos
    }

    this.http.get<SearchGifsResponse>(`https://api.giphy.com/v1/gifs/search?api_key=GnSTEUFRIXNIp0xtekN1y9aMLdG5ighE&q=${query}&limit=10`)
      .subscribe((resp) => {
        console.log(resp.data);
        this.resultados = resp.data;
      })

  }



}
