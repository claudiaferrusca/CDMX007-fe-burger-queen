import { Component, OnInit } from '@angular/core';
import {HamburguerService, Hamburguer} from '../../servicios/hamburguer.service';
import {FacturaService} from '../../servicios/factura.service'
@Component({
  selector: 'app-hamburger',
  templateUrl: './hamburger.component.html',
  styleUrls: ['./hamburger.component.css']
})
export class HamburgerComponent implements OnInit {
 
  hamburguer:any[]=[];
  constructor(private _hamburguerService:HamburguerService,
              private _facturaService:FacturaService) {
    
   }
 component:object;
  ngOnInit() {
    this.hamburguer = this._hamburguerService.getHamburguer();
    ;
  }

  public searchComponent (index) {
    this.hamburguer.forEach(ingrediente=>{
if(this.hamburguer.indexOf(ingrediente)== index){
  this.component=ingrediente;
  console.log(this._facturaService.orderSum(this.component))

  
}


    })
  }
}
