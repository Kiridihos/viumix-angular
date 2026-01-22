import { Component, inject } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-cine',
  imports: [],
  templateUrl: './cine.html',
  styleUrl: './cine.css',
})
export class Cine {
  private route = inject(ActivatedRoute);

  public genero: string;

  /** Inserted by Angular inject() migration for backwards compatibility */
  constructor(...args: unknown[]);
  constructor() {
    this.genero = '';
    this.route.params.subscribe((params: Params) => {
      this.genero = params['genero'];
      console.log("El genero es ",this.genero);
    });
  }
}
