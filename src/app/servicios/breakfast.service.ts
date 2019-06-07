import {Injectable } from "@angular/core";
@Injectable ()
export class BreakfastService {

private breakfast:Breakfast []= [
    {
    nombre: "Sandwich de jamón y queso",
    precio: "$35",
    img:"assets/img/pan.png"
},
{
    nombre: "Jugo Natural",
    precio: "$15",
    img:"assets/img/zumo-de-naranja.png"
},
{
    nombre: "Café Americano",
    precio: "$20",
    img:"assets/img/taza-para-cafe.png"
},
{nombre: "Café con Leche",
precio: "$28",
img:"assets/img/capuchino.png"
},
]

    constructor(){
        console.log("servicios funcionando");
    }

getBreakfast():Breakfast[]{
    return this.breakfast;
}
}
 export interface Breakfast {
  nombre: string;
  precio: string;
  img: string;

 };