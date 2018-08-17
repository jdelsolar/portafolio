import { Component, OnInit } from '@angular/core';
import { InfoPaginaService } from '../../services/info-pagina.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor( public _infoPagina:InfoPaginaService, private router:Router) { 



  }

  ngOnInit() {
  }


  buscarProducto( valor:string ){

    //console.log( valor );

    if ( valor.length > 2 ){
      this.router.navigate( ['/buscar', valor] )
    }

  }

}
