import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InfoPagina } from '../interfaces/info-pagina.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: InfoPagina = {};
  loaded = false;
  equipo: any[] = [];

  constructor( private http: HttpClient ) {

    this.cargarInfo();
    this.cargarEquipo();

  }

  private cargarInfo() {

    // Leer el archivo JSON:

    this.http.get('assets/data/data-pagina.json')
    .subscribe( (resp: InfoPagina ) => {
      this.loaded = true;
      this.info = resp;
    });

  }

  private cargarEquipo() {

    // Leer el archivo JSON:

    this.http.get('https://angular-html-f6e78-default-rtdb.firebaseio.com/equipo.json')
     .subscribe( (resp: any) => {

      this.equipo = resp;
      // console.log( resp );
    });

  }
}
