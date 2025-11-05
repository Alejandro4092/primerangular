import { Component } from "@angular/core";
@Component({
    selector:"app-deportes",
    templateUrl:"./deportes.component.html",
    standalone:false,
    styleUrl:"./deportes.component.css"
})

export class DeportesComponent{
    public sports:Array<string>;
    public numeros:Array<number>;
    constructor(){
        this.sports=["Canicas","Curling","Dardos","Petanca","Pelota Vasca"]
        this.numeros=[4,5,6,7,78,99,2]
    }

}