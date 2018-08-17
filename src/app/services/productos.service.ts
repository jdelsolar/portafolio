import { Injectable } from "@angular/core";

import { HttpClient } from "@angular/common/http";

@Injectable()
export class ProductosService { 
  productos: Producto[] = [];

  productosFiltrado: Producto[] = [];

  cargando: boolean = true;

  constructor(public http: HttpClient) {
    this.cargar_productos();
  }

  buscarProducto(termino: string) {

    if ( this.productos.length === 0 ) {
      this.cargar_productos().then( () => {
        // ahora si estan cargados
        // filtrar
        this.filtrarProductos(termino);
      });
    } else {
      // filtrar 
      this.filtrarProductos(termino);
    }

    
  }

  private filtrarProductos( termino: string ) {
    
    this.productosFiltrado = [];
    
    this.productos.forEach( prod => {

      let tituloLower = prod.titulo.toLowerCase();
      if( prod.categoria.indexOf( termino ) >= 0 || tituloLower.indexOf( termino ) >= 0 ) {
        this.productosFiltrado.push( prod );
      }
    })

    
  }

  cargar_productos() {
    this.cargando = true;

    let promesa = new Promise( (resolve, reject) => {

      this.http
      .get("https://prueba-17547.firebaseio.com/portafolio/productos_idx.json")
      .subscribe((resp: Producto[]) => {
        this.productos = resp;

        this.cargando = false;

        resolve();
        
      });

    });

    return promesa;

    
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
