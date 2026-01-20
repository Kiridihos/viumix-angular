import { Routes } from '@angular/router';
import { Libros } from './components/libros/libros';
import { Component } from '@angular/core';
import { Inicio } from './components/inicio/inicio';
import { Musica } from './components/musica/musica';
import { Cine } from './components/cine/cine';
import { Contacto } from './components/contacto/contacto';
import { Podcasts } from './components/podcasts/podcasts';
import { Error } from './components/error/error';


export const routes: Routes = [
    { path: 'inicio', component: Inicio},
    { path: 'musica', component: Musica},
    { path: 'cine', component: Cine},
    { path: 'libros', component: Libros},
    { path: 'contacto', component: Contacto},
    { path: 'podcasts', component: Podcasts},
    { path: '', redirectTo: '/inicio', pathMatch: 'full' },
    { path: '**', component: Error}
];
