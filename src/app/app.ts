import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { Inicio } from './components/inicio/inicio';
import { Cabecera } from './components/cabecera/cabecera';
import { Navegacion } from './components/navegacion/navegacion';
import { Footer } from './components/footer/footer';
import { Error } from './components/error/error';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Inicio, Cabecera, Navegacion, Footer, Error, RouterLink, RouterLinkActive],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('viumix');
}
