import {Injectable} from "@angular/core";



Injectable()
export class FacturaService {
    totalOrder:any[]=[]
        public orderSum (componente:object){
        this.totalOrder.push(componente);
return this.totalOrder;
    }
}
