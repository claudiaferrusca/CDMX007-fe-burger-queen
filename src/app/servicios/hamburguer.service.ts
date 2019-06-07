import {Injectable } from "@angular/core";
@Injectable ()
export class HamburguerService {

private hamburguer:Hamburguer []= [
    {
    nombre: "Sencilla de res",
    precio: "$40",
    img:"assets/img/006-hamburguesa-1.png"
},
{
    nombre: "Sencilla de pollo",
    precio: "$40",
    img:"assets/img/006-hamburguesa-1.png"
},
{
    nombre: "Sencilla vegetariana",
    precio: "$40",
    img:"assets/img/006-hamburguesa-1.png"
},
{nombre: "Extra queso",
precio: "$15",
img:"assets/img/011-queso.png"
},
{
    nombre: "Doble res",
    precio: "$55",
    img:"assets/img/006-hamburguesa-1.png"
},
{
    nombre: "Doble vegetariana",
    precio: "$55",
    img:"assets/img/006-hamburguesa-1.png"
},
{
    nombre: "Doble vegetariana",
    precio: "$55",
    img:"assets/img/006-hamburguesa-1.png"
},
{
    nombre: "Huevo",
    precio: "$15",
    img:"assets/img/001-huevo-frito.png"
},
]

    constructor(){
        console.log("servicios de Hamburguesas funcionando");
    }

getHamburguer():Hamburguer[]{
    return this.hamburguer;
}
}
 export interface Hamburguer {
  nombre: string;
  precio: string;
  img: string;

 };