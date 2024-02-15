import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CabecalhoComponent } from './componentes/cabecalho/cabecalho.component';
import { PensamentosComponent } from './componentes/pensamentos/pensamentos.component';
import { RodapeComponent } from './componentes/rodape/rodape.component';

@NgModule({
  declarations: [
    AppComponent,
    CabecalhoComponent,
    PensamentosComponent,
    RodapeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
