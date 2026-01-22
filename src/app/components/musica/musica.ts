import { Component } from '@angular/core';

@Component({
  selector: 'app-musica',
  imports: [],
  templateUrl: './musica.html',
  styleUrl: './musica.css',
})
export class Musica {
  public records: Array<any> = [];
  constructor() {
    this.records = [
      {
        title: 'Song One',
        artist: 'Artist A',
        album: 'Album X',
        year: 2020,
        cover: 'https://picsum.photos/200/300?random=1'
      },      {
        title: 'Song Two',
        artist: 'Artist B',
        album: 'Album Y',
        year: 2021,
        cover: 'https://picsum.photos/200/300?random=2'
      },      {
        title: 'Song Three',
        artist: 'Artist C',
        album: 'Album Z',
        year: 2022,
        cover: 'https://picsum.photos/200/300?random=3'
      }];
  }
}
