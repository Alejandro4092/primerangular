import { Component } from '@angular/core';
import { ViewChild,ElementRef } from '@angular/core';

@Component({
  selector: 'app-tablamultiplicar',
  standalone: false,
  templateUrl: './tablamultiplicar.component.html',
  styleUrls: ['./tablamultiplicar.component.css'],
})
export class TablamultiplicarComponent {
 @ViewChild("cajanumero") cajaNumero!:ElementRef;
 public tabla: Array<number> = [];
 public numero: number;
 constructor(){
    this.tabla = [];
    this.numero = 0;
}
agregarTabla():void{

    this.numero=parseInt(this.cajaNumero.nativeElement.value);
    for(let i=1;i<=10;i++){
        this.tabla.push(this.numero*i);
    }
} 


}
