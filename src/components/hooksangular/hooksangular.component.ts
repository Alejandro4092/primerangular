import { Component, OnInit } from "@angular/core";
@Component({

selector: 'hooks-angular',
standalone: false,  
templateUrl:"./hooksangular.component.html"
})

export class HooksAngularComponent implements OnInit{
constructor(){
    console.log("constructor: primer metodo de inicio de component")
}
ngOnInit(): void {
    console.log("Soy OnInit,despues de constructor!!!!");
}
ngDoCheck():void{
    console.log("NgCheck cambiadno algo en Render!!!");
}
}
