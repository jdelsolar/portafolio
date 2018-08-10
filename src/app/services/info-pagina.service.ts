import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class InfoPaginaService {
  info: InfoPagina = {};

  equipo: any[] = [];

  cargada: boolean = false;

  constructor(public http: HttpClient) {

    this.cargar_info();

    this.cargar_equipo();
    
  }


  private cargar_info() {
    this.http
        .get("assets/data/data-pagina.json")
        .subscribe((resp: InfoPagina) => {
          this.cargada = true;
          this.info = resp;
  
          
        });
  }

  private cargar_equipo() {

    this.http
        .get("https://prueba-17547.firebaseio.com/portafolio/equipo.json")
        .subscribe( (resp:any) => {

          this.equipo = resp;

          
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
