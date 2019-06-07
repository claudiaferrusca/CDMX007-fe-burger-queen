import { Component, OnInit } from '@angular/core';
import {DrinksService, Drinks} from '../../servicios/drinks.service';
import {FacturaService} from '../../servicios/factura.service'
@Component({
  selector: 'app-drinks',
  templateUrl: './drinks.component.html',
  styleUrls: ['./drinks.component.css']
})
export class DrinksComponent implements OnInit {
drinks: Drinks []=[];

  constructor(private _drinksService:DrinksService,
    private _facturaService:FacturaService) { 

    
  }
  
  component:object;
  ngOnInit() {
  this.drinks = this._drinksService.getDrinks();
console.log(this.drinks)  
}

public searchComponent (index) {
  this.drinks.forEach(ingrediente => {
  if ( this.drinks.indexOf(ingrediente)== index){
      this.component=ingrediente;
      console.log(this._facturaService.orderSum(this.component))
    }

  })
}
}