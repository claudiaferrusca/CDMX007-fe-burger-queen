import{RouterModule, Routes, ROUTES} from '@angular/router';
import {NavbarComponent} from './components/shared/navbar/navbar.component';
import {BreakfastComponent } from './components/breakfast/breakfast.component';
import {HamburgerComponent } from './components/hamburger/hamburger.component';
import {DrinksComponent } from './components/drinks/drinks.component'; 

import { ComplementsComponent } from './components/complements/complements.component';
import { TicketComponent } from './components/ticket/ticket.component';

//service
 import { BreakfastService } from './servicios/breakfast.service';
 import { HamburguerService } from './servicios/hamburguer.service';
 import { DrinksService } from './servicios/drinks.service';
 import { ComplementService } from './servicios/complement.service';
 //
const APP_ROUTES: Routes =[
    {path : 'app',component: NavbarComponent},
    {path:'**', pathMatch: 'full', redirectTo: 'navbar'},
    {path : 'breakfast',component: BreakfastComponent},
    {path : 'hamburger',component: HamburgerComponent},
    {path : 'complements',component: ComplementsComponent},
    {path : 'drinks',component: DrinksComponent},
 {path : 'ticket',component: TicketComponent},
   
];
export const APP_ROUTING=RouterModule.forRoot (APP_ROUTES);