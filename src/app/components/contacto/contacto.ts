import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contacto',
  imports: [FormsModule],
  templateUrl: './contacto.html',
  styleUrl: './contacto.css',
})
export class Contacto {
  public solicitud: any = {
    nombre : '',
    correo : '',
    valoracion : '',
    consulta : ''
  }

  onSubmit() {
    console.log(this.solicitud);
  }

}
