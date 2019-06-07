import {Injectable } from "@angular/core";
@Injectable ()
export class DrinksService {

private drinks:Drinks[]= [
    {
    nombre: "Refresco",
    precio: "$15",
    img:"assets/img/005-cola.png"
},

{
    nombre: "Agua",
    precio: "$10",
    img:"assets/img/014-agua.png"
},
]

    constructor(){
        console.log("servicios de bedidas funcionando");
    }

getDrinks():Drinks[]{
    return this.drinks;
}
}
 export interface Drinks {
  nombre: string;
  precio: string;
  img: string;

 };