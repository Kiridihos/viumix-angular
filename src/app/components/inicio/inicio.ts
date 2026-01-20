import { Component } from '@angular/core';

@Component({
  selector: 'app-inicio',
  imports: [],
  templateUrl: './inicio.html',
  styleUrl: './inicio.css',
})
export class Inicio {
  public titulo: string;
  public pulsaciones:number = 0;
  constructor() {
    this.titulo = 'Universiddad Internacional de Valencia';
  }
  public pulsar():void{
    this.pulsaciones ++;
    console.log(`Pulsaciones: ${this.pulsaciones}`);
  }
}
