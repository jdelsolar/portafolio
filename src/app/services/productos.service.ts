import { Injectable } from "@angular/core";

import { HttpClient } from "@angular/common/http";

@Injectable()
export class ProductosService {
  productos: Producto[] = [];

  cargando: boolean = true;

  constructor(public http: HttpClient) {
    this.cargar_productos();
  }

  cargar_productos() {
    this.cargando = true;

    this.http
      .get("https://prueba-17547.firebaseio.com/portafolio/productos_idx.json")
      .subscribe((resp: Producto[]) => {
        this.productos = resp;

        this.cargando = false;

        console.log(resp);
      });
  }
}

export interface Producto {
  categoria?: string;
  cod?: string;
  titulo?: string;
  url?: string;
}
