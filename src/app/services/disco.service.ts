import { Injectable } from '@angular/core';
import { DiscoModel } from '../models/disco.model';
import { CancionModel } from '../models/cancion.model';
import { faker } from '@faker-js/faker';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export const urlRecord = 'https://apiviu.amnislabs.com/pro/api/';
@Injectable({
  providedIn: 'root',
})
export class DiscoService {
  test() {
    console.log('testing exitoso');
  }
  constructor(
    private http: HttpClient
  ) {

  }

  public getDiscos(): Observable<any> {
    return this.http.get(urlRecord + 'discs');
    
  }
  public getDiscosFake():Array<DiscoModel> {
    return [
      new DiscoModel(1, faker.music.artist(), faker.music.album(), faker.number.int({ min: 1990, max: 2023 }), 'https://picsum.photos/200/300?random=1', [
        new CancionModel(1, faker.music.songName(), faker.music.artist(), faker.music.album(), faker.number.int({ min: 1990, max: 2023 }), 'http://cdn.freesound.org/previews/842/842586_7395592-lq.mp3', 1),
        new CancionModel(2, faker.music.songName(), faker.music.artist(), faker.music.album(), faker.number.int({ min: 1990, max: 2023 }), 'http://cdn.freesound.org/previews/842/842586_7395592-lq.mp3', 1),
        new CancionModel(3, faker.music.songName(), faker.music.artist(), faker.music.album(), faker.number.int({ min: 1990, max: 2023 }), 'http://cdn.freesound.org/previews/842/842586_7395592-lq.mp3', 1),
      ]),
      new DiscoModel(2, faker.music.artist(), faker.music.album(), faker.number.int({ min: 1990, max: 2023 }), 'https://picsum.photos/200/300?random=2', [
        new CancionModel(4, faker.music.songName(), faker.music.artist(), faker.music.album(), faker.number.int({ min: 1990, max: 2023 }), 'http://cdn.freesound.org/previews/842/842586_7395592-lq.mp3', 2),
        new CancionModel(5, faker.music.songName(), faker.music.artist(), faker.music.album(), faker.number.int({ min: 1990, max: 2023 }), 'http://cdn.freesound.org/previews/842/842586_7395592-lq.mp3', 2),
        new CancionModel(6, faker.music.songName(), faker.music.artist(), faker.music.album(), faker.number.int({ min: 1990, max: 2023 }), 'http://cdn.freesound.org/previews/842/842586_7395592-lq.mp3', 2),
      ]),
      new DiscoModel(3, faker.music.artist(), faker.music.album(), faker.number.int({ min: 1990, max: 2023 }), 'https://picsum.photos/200/300?random=3', [
        new CancionModel(7, faker.music.songName(), faker.music.artist(), faker.music.album(), faker.number.int({ min: 1990, max: 2023 }), 'http://cdn.freesound.org/previews/842/842586_7395592-lq.mp3', 3),
        new CancionModel(8, faker.music.songName(), faker.music.artist(), faker.music.album(), faker.number.int({ min: 1990, max: 2023 }), 'http://cdn.freesound.org/previews/842/842586_7395592-lq.mp3', 3),
        new CancionModel(9, faker.music.songName(), faker.music.artist(), faker.music.album(), faker.number.int({ min: 1990, max: 2023 }), 'http://cdn.freesound.org/previews/842/842586_7395592-lq.mp3', 3),
      ]),
      new DiscoModel(4, faker.music.artist(), faker.music.album(), faker.number.int({ min: 1990, max: 2023 }), 'https://picsum.photos/200/300?random=4', [
        new CancionModel(10, faker.music.songName(), faker.music.artist(), faker.music.album(), faker.number.int({ min: 1990, max: 2023 }), 'http://cdn.freesound.org/previews/842/842586_7395592-lq.mp3', 4),
        new CancionModel(11, faker.music.songName(), faker.music.artist(), faker.music.album(), faker.number.int({ min: 1990, max: 2023 }), 'http://cdn.freesound.org/previews/842/842586_7395592-lq.mp3', 4),
        new CancionModel(12, faker.music.songName(), faker.music.artist(), faker.music.album(), faker.number.int({ min: 1990, max: 2023 }), 'http://cdn.freesound.org/previews/842/842586_7395592-lq.mp3', 4),
      ]),
      new DiscoModel(5, faker.music.artist(), faker.music.album(), faker.number.int({ min: 1990, max: 2023 }), 'https://picsum.photos/200/300?random=5', [
        new CancionModel(13, faker.music.songName(), faker.music.artist(), faker.music.album(), faker.number.int({ min: 1990, max: 2023 }), 'http://cdn.freesound.org/previews/842/842586_7395592-lq.mp3', 5),
        new CancionModel(14, faker.music.songName(), faker.music.artist(), faker.music.album(), faker.number.int({ min: 1990, max: 2023 }), 'http://cdn.freesound.org/previews/842/842586_7395592-lq.mp3', 5),
        new CancionModel(15, faker.music.songName(), faker.music.artist(), faker.music.album(), faker.number.int({ min: 1990, max: 2023 }), 'http://cdn.freesound.org/previews/842/842586_7395592-lq.mp3', 5),
      ]),
      new DiscoModel(6, faker.music.artist(), faker.music.album(), faker.number.int({ min: 1990, max: 2023 }), 'https://picsum.photos/200/300?random=6', [
        new CancionModel(16, faker.music.songName(), faker.music.artist(), faker.music.album(), faker.number.int({ min: 1990, max: 2023 }), 'http://cdn.freesound.org/previews/842/842586_7395592-lq.mp3', 6),
        new CancionModel(17, faker.music.songName(), faker.music.artist(), faker.music.album(), faker.number.int({ min: 1990, max: 2023 }), 'http://cdn.freesound.org/previews/842/842586_7395592-lq.mp3', 6),
        new CancionModel(18, faker.music.songName(), faker.music.artist(), faker.music.album(), faker.number.int({ min: 1990, max: 2023 }), 'http://cdn.freesound.org/previews/842/842586_7395592-lq.mp3', 6),
      ]),
      new DiscoModel(7, faker.music.artist(), faker.music.album(), faker.number.int({ min: 1990, max: 2023 }), 'https://picsum.photos/200/300?random=7', [
        new CancionModel(19, faker.music.songName(), faker.music.artist(), faker.music.album(), faker.number.int({ min: 1990, max: 2023 }), 'http://cdn.freesound.org/previews/842/842586_7395592-lq.mp3', 7),
        new CancionModel(20, faker.music.songName(), faker.music.artist(), faker.music.album(), faker.number.int({ min: 1990, max: 2023 }), 'http://cdn.freesound.org/previews/842/842586_7395592-lq.mp3', 7),
        new CancionModel(21, faker.music.songName(), faker.music.artist(), faker.music.album(), faker.number.int({ min: 1990, max: 2023 }), 'http://cdn.freesound.org/previews/842/842586_7395592-lq.mp3', 7),
      ]),
      new DiscoModel(8, faker.music.artist(), faker.music.album(), faker.number.int({ min: 1990, max: 2023 }), 'https://picsum.photos/200/300?random=8', [
        new CancionModel(22, faker.music.songName(), faker.music.artist(), faker.music.album(), faker.number.int({ min: 1990, max: 2023 }), 'http://cdn.freesound.org/previews/842/842586_7395592-lq.mp3', 8),
        new CancionModel(23, faker.music.songName(), faker.music.artist(), faker.music.album(), faker.number.int({ min: 1990, max: 2023 }), 'http://cdn.freesound.org/previews/842/842586_7395592-lq.mp3', 8),
        new CancionModel(24, faker.music.songName(), faker.music.artist(), faker.music.album(), faker.number.int({ min: 1990, max: 2023 }), 'http://cdn.freesound.org/previews/842/842586_7395592-lq.mp3', 8),
      ]),
      new DiscoModel(9, faker.music.artist(), faker.music.album(), faker.number.int({ min: 1990, max: 2023 }), 'https://picsum.photos/200/300?random=9', [
        new CancionModel(25, faker.music.songName(), faker.music.artist(), faker.music.album(), faker.number.int({ min: 1990, max: 2023 }), 'http://cdn.freesound.org/previews/842/842586_7395592-lq.mp3', 9),
        new CancionModel(26, faker.music.songName(), faker.music.artist(), faker.music.album(), faker.number.int({ min: 1990, max: 2023 }), 'http://cdn.freesound.org/previews/842/842586_7395592-lq.mp3', 9),
        new CancionModel(27, faker.music.songName(), faker.music.artist(), faker.music.album(), faker.number.int({ min: 1990, max: 2023 }), 'http://cdn.freesound.org/previews/842/842586_7395592-lq.mp3', 9),
      ]),
      new DiscoModel(10, faker.music.artist(), faker.music.album(), faker.number.int({ min: 1990, max: 2023 }), 'https://picsum.photos/200/300?random=10', [
        new CancionModel(22, faker.music.songName(), faker.music.artist(), faker.music.album(), faker.number.int({ min: 1990, max: 2023 }), 'http://cdn.freesound.org/previews/842/842586_7395592-lq.mp3', 10),
        new CancionModel(23, faker.music.songName(), faker.music.artist(), faker.music.album(), faker.number.int({ min: 1990, max: 2023 }), 'http://cdn.freesound.org/previews/842/842586_7395592-lq.mp3', 10),
        new CancionModel(24, faker.music.songName(), faker.music.artist(), faker.music.album(), faker.number.int({ min: 1990, max: 2023 }), 'http://cdn.freesound.org/previews/842/842586_7395592-lq.mp3', 10),
      ]),
      new DiscoModel(11, faker.music.artist(), faker.music.album(), faker.number.int({ min: 1990, max: 2023 }), 'https://picsum.photos/200/300?random=11', [
        new CancionModel(25, faker.music.songName(), faker.music.artist(), faker.music.album(), faker.number.int({ min: 1990, max: 2023 }), 'http://cdn.freesound.org/previews/842/842586_7395592-lq.mp3', 11),
        new CancionModel(26, faker.music.songName(), faker.music.artist(), faker.music.album(), faker.number.int({ min: 1990, max: 2023 }), 'http://cdn.freesound.org/previews/842/842586_7395592-lq.mp3', 11),
        new CancionModel(27, faker.music.songName(), faker.music.artist(), faker.music.album(), faker.number.int({ min: 1990, max: 2023 }), 'http://cdn.freesound.org/previews/842/842586_7395592-lq.mp3', 11),
      ]),
      new DiscoModel(12, faker.music.artist(), faker.music.album(), faker.number.int({ min: 1990, max: 2023 }), 'https://picsum.photos/200/300?random=12', [
        new CancionModel(28, faker.music.songName(), faker.music.artist(), faker.music.album(), faker.number.int({ min: 1990, max: 2023 }), 'http://cdn.freesound.org/previews/842/842586_7395592-lq.mp3', 12),
        new CancionModel(29, faker.music.songName(), faker.music.artist(), faker.music.album(), faker.number.int({ min: 1990, max: 2023 }), 'http://cdn.freesound.org/previews/842/842586_7395592-lq.mp3', 12),
        new CancionModel(30, faker.music.songName(), faker.music.artist(), faker.music.album(), faker.number.int({ min: 1990, max: 2023 }), 'http://cdn.freesound.org/previews/842/842586_7395592-lq.mp3', 12),
      ]),
      new DiscoModel(13, faker.music.artist(), faker.music.album(), faker.number.int({ min: 1990, max: 2023 }), 'https://picsum.photos/200/300?random=13', [
        new CancionModel(31, faker.music.songName(), faker.music.artist(), faker.music.album(), faker.number.int({ min: 1990, max: 2023 }), 'http://cdn.freesound.org/previews/842/842586_7395592-lq.mp3', 13),
        new CancionModel(32, faker.music.songName(), faker.music.artist(), faker.music.album(), faker.number.int({ min: 1990, max: 2023 }), 'http://cdn.freesound.org/previews/842/842586_7395592-lq.mp3', 13),
        new CancionModel(33, faker.music.songName(), faker.music.artist(), faker.music.album(), faker.number.int({ min: 1990, max: 2023 }), 'http://cdn.freesound.org/previews/842/842586_7395592-lq.mp3', 13),
      ]),
    ];
  }
}
