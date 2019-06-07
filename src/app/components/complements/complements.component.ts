import { Component, OnInit } from '@angular/core';
import {ComplementService, complement} from '../../servicios/complement.service';
import {FacturaService} from '../../servicios/factura.service'

@Component({
  selector: 'app-complements',
  templateUrl: './complements.component.html',
  styleUrls: ['./complements.component.css']
})
export class ComplementsComponent implements OnInit {

complement: complement[]=[];

  constructor(private _complementService:ComplementService,
               private _facturaService:FacturaService) { 

    
  }
    component:object;

  ngOnInit() {
  this.complement = this._complementService.getComplement();
console.log(this.complement)  
}

public searchComponent(index){
  this.complement.forEach(ingrediente =>{
    if (this.complement.indexOf(ingrediente)==index){
      this.component=ingrediente;
      console.log(this._facturaService.orderSum(this.component))
    }
  })
}

}

