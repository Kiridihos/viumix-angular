import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { faker } from '@faker-js/faker';

@Component({
  selector: 'app-musica',
  imports: [CommonModule],
  templateUrl: './musica.html',
  styleUrl: './musica.css',
})
export class Musica {
  public records: Array<any> = [];
  constructor() {
    this.records = [
      {
        title: faker.music.songName(),
        artist: faker.music.artist(),
        album: faker.music.album(),
        year: faker.number.int({ min: 1990, max: 2023 }),
        cover: 'https://picsum.photos/200/300?random=1'
      },      {
        title: faker.music.songName(),
        artist: faker.music.artist(),
        album: faker.music.album(),
        year: faker.number.int({ min: 1990, max: 2024 }),
        cover: 'https://picsum.photos/200/300?random=2'
      },      {
        title: faker.music.songName(),
        artist: faker.music.artist(),
        album: faker.music.album(),
        year: faker.number.int({ min: 1990, max: 2024 }),
        cover: 'https://picsum.photos/200/300?random=3'
      },      {
        title: faker.music.songName(),
        artist: faker.music.artist(),
        album: faker.music.album(),
        year: faker.number.int({ min: 1990, max: 2024 }),
        cover: 'https://picsum.photos/200/300?random=4'
      },      {
        title: faker.music.songName(),
        artist: faker.music.artist(),
        album: faker.music.album(),
        year: faker.number.int({ min: 1990, max: 2024 }),
        cover: 'https://picsum.photos/200/300?random=5'
      },      {
        title: faker.music.songName(),
        artist: faker.music.artist(),
        album: faker.music.album(),
        year: faker.number.int({ min: 1990, max: 2024 }),
        cover: 'https://picsum.photos/200/300?random=6'
      },      {
        title: faker.music.songName(),
        artist: faker.music.artist(),
        album: faker.music.album(),
        year: faker.number.int({ min: 1990, max: 2024 }),
        cover: 'https://picsum.photos/200/300?random=7'
      },      {
        title: faker.music.songName(),
        artist: faker.music.artist(),
        album: faker.music.album(),
        year: faker.number.int({ min: 1990, max: 2024 }),
        cover: 'https://picsum.photos/200/300?random=8'
      },      {
        title: faker.music.songName(),
        artist: faker.music.artist(),
        album: faker.music.album(),
        year: faker.number.int({ min: 1990, max: 2024 }),
        cover: 'https://picsum.photos/200/300?random=3'
      },      {
        title: faker.music.songName(),
        artist: faker.music.artist(),
        album: faker.music.album(),
        year: faker.number.int({ min: 1990, max: 2024 }),
        cover: 'https://picsum.photos/200/300?random=4'
      },      {
        title: faker.music.songName(),
        artist: faker.music.artist(),
        album: faker.music.album(),
        year: faker.number.int({ min: 1990, max: 2024 }),
        cover: 'https://picsum.photos/200/300?random=5'
      },      {
        title: faker.music.songName(),
        artist: faker.music.artist(),
        album: faker.music.album(),
        year: faker.number.int({ min: 1990, max: 2024 }),
        cover: 'https://picsum.photos/200/300?random=6'
      },      {
        title: faker.music.songName(),
        artist: faker.music.artist(),
        album: faker.music.album(),
        year: faker.number.int({ min: 1990, max: 2024 }),
        cover: 'https://picsum.photos/200/300?random=7'
      },      {
        title: faker.music.songName(),
        artist: faker.music.artist(),
        album: faker.music.album(),
        year: faker.number.int({ min: 1990, max: 2024 }),
        cover: 'https://picsum.photos/200/300?random=8'
      },      {
        title: faker.music.songName(),
        artist: faker.music.artist(),
        album: faker.music.album(),
        year: faker.number.int({ min: 1990, max: 2024 }),
        cover: 'https://picsum.photos/200/300?random=9'
      }];
  }
}
