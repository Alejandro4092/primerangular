import { Component } from "@angular/core";
import { ViewChild,ElementRef } from "@angular/core";

@Component({
selector:"app-sumar-numeros",
templateUrl:"./sumarnumeros.component.html",
standalone:false
})
export class  SumarNumerosComponent{
    @ViewChild("cajanumero1") cajaNumero1Ref!:ElementRef;
     @ViewChild("cajanumero2") cajaNumero2Ref!:ElementRef;

public suma:number;

    constructor(){
        this.suma=0;
        

    }
    sumarNumeros():void{
        let num1=this.cajaNumero1Ref.nativeElement.value;
        let num2=this.cajaNumero2Ref.nativeElement.value;
        this.suma=parseInt(num1)+parseInt(num2)
        

    }
}