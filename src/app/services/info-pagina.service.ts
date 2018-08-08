import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class InfoPaginaService {

  info: InfoPagina = {};

  cargada: boolean = false;

  constructor( public http: HttpClient ) {
    
    this.http.get( 'assets/data/data-pagina.json' ).subscribe( (resp:InfoPagina) => {

      this.cargada = true;
      this.info = resp;
      
      console.log(resp);

    });

   }

}

export interface InfoPagina {
  titulo?: string;
  email?: string;
  nombre_corto?: string;
  nombre_autor?: string;
  facebook?: string;
  twitter?: string;
  instagram?: string;
  tublr?: string;
  equipo_trabajo?: any[];
}
