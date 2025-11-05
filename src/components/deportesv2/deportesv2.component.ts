import { Component } from "@angular/core";
@Component({
    selector:"app-deportesv2",
    templateUrl:"./deportesv2.component.html",
    standalone:false,
    styleUrl:"./deportesv2.component.css"
})

export class DeportesV2Component{
    public sports:Array<string>;
    public numeros:Array<number>;
    constructor(){
        this.sports=["Canicas","Curling","Dardos","Petanca","Pelota Vasca"]
        this.numeros=[4,5,6,7,78,99,2]
    }

}