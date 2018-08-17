import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService, Descripcion } from '../../services/productos.service';
import { APP_BASE_HREF } from '../../../../node_modules/@angular/common';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  desc: Descripcion = {};

  id: string = "";

  constructor( private route: ActivatedRoute, public _producto: ProductosService) { }

  ngOnInit() {

    this.route.params.subscribe( param => {

      this.id = param['id'];

      this._producto.getProducto(param['id']).subscribe( (resp:Descripcion) => {

        this.desc = resp;

        console.log(resp);
        
      });
      
    });
  }

}
