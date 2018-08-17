import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { PortafolioComponent } from './pages/portafolio/portafolio.component';
import { AboutComponent } from './pages/about/about.component';
import { ItemComponent } from './pages/item/item.component';

import { AppRoutingModule } from './app-routing.module';
import { InfoPaginaService } from './services/info-pagina.service';

import { HttpClientModule } from '@angular/common/http'
import { ProductosService } from './services/productos.service';
import { BuscarComponent } from './pages/buscar/buscar.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PortafolioComponent,
    AboutComponent,
    ItemComponent,
    BuscarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ InfoPaginaService, ProductosService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
