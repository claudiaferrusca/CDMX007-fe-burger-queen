import {Injectable } from "@angular/core";
import { ComplementsComponent } from '../components/complements/complements.component';
@Injectable ()
export class ComplementService {

private complement:complement []= [
    {
    nombre: "Papas fritas",
    precio: "$15",
    img:"assets/img/002-patatas-fritas.png"
},
{
    nombre: "Aros de cebolla",
    precio: "$15",
    img:"assets/img/012-aros-de-cebolla.png"
},


]

    constructor(){
        console.log("servicios de complementos funcionando");
    }

getComplement():complement[]{
    return this.complement;
}
}
 export interface complement {
  nombre: string;
  precio: string;
  img: string;

 };