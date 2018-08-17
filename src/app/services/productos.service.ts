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

  getProducto(id: string) {
    return this.http.get(
      `https://prueba-17547.firebaseio.com/portafolio/productos/${id}.json`
    );
  }
}

export interface Producto {
  categoria?: string;
  cod?: string;
  titulo?: string;
  url?: string;
}

export interface Descripcion {
  categoria?: string;
  desc1?: string;
  desc2?: string;
  producto?: string;
  resumen?: string;
  subtitulo1?: string;
  subtitulo2?: string;
}
