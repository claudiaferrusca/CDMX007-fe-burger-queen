import { Component, OnInit } from '@angular/core';
import {BreakfastService, Breakfast} from '../../servicios/breakfast.service';
import {FacturaService} from '../../servicios/factura.service';
@Component({
  selector: 'app-breakfast',
  templateUrl: './breakfast.component.html',
  styleUrls: ['./breakfast.component.css']
})
export class BreakfastComponent implements OnInit {
  breakfast: Breakfast []=[];

  constructor
  (private _breakfastService:BreakfastService, 
   private _facturaService:FacturaService) { 
    
  }
   component: object;

  ngOnInit() {
  this.breakfast=this._breakfastService.getBreakfast();
console.log(this.breakfast)  
}
 public searchComponent(index){
   this.breakfast.forEach(ingrediente =>{
     if (this.breakfast.indexOf(ingrediente)==index){
       this.component=ingrediente; 
       console.log(this._facturaService.orderSum(this.component))
     }
   })
 }

}
