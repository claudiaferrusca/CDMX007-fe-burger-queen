import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { BreakfastComponent } from './components/breakfast/breakfast.component';

// routes
 import {APP_ROUTING} from './app.routes';
import { HamburgerComponent } from './components/hamburger/hamburger.component';
import { DrinksComponent } from './components/drinks/drinks.component';

import { ComplementsComponent } from './components/complements/complements.component';
import { TicketComponent } from './components/ticket/ticket.component';
import { BreakfastService } from './servicios/breakfast.service';
import { HamburguerService } from './servicios/hamburguer.service';
import { DrinksService } from './servicios/drinks.service';
import { ComplementService } from './servicios/complement.service';
import {FacturaService} from './servicios/factura.service';
// const routes :routes= [
// {path:'login', componentes:LoginPageComponent},
// ];
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    BreakfastComponent,
    HamburgerComponent,
    DrinksComponent,
    ComplementsComponent,
    TicketComponent,
    
    
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    APP_ROUTING
  ],
  providers: [BreakfastService, HamburguerService, DrinksService, ComplementService, FacturaService],
  bootstrap: [AppComponent]

})
export class AppModule { }
