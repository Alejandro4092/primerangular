import { Component } from "@angular/core";

@Component({

selector: 'primer-component',
standalone: false,

templateUrl:"primer.component.html",
styleUrls: ["primer.component.css"]


})

export class PrimerComponent {

public titulo:string;
public descripcion:string;
public year:number;

constructor(){
 
    this.titulo="Primer Componente";
    this.descripcion="Hoy pierde el madrid";
    this.year= 2025;

}
}