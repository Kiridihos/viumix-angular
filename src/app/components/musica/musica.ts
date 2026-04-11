import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DiscoModel } from '../../models/disco.model';
import { CancionModel } from '../../models/cancion.model';
import { Cancion } from '../cancion/cancion';
import { DiscoService } from '../../services/disco.service';
import { ChangeDetectorRef } from '@angular/core';
import { CancionService } from '../../services/cancion.service';
import { signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-musica',
  imports: [CommonModule, Cancion],
  templateUrl: './musica.html',
  styleUrl: './musica.css',
})
export class Musica {
  public records: WritableSignal<Array<DiscoModel>>;
  public playing: string;
  constructor(
    private discoService: DiscoService,
    private cancionService: CancionService,
    private cdRef: ChangeDetectorRef
  ) {
    this.playing = '';
    this.records = signal<Array<DiscoModel>>([]);
    this.discoService.getDiscos().subscribe({ 
      next: (info) => {
        this.records.set(info.data);
        for(let i = 0; i < this.records().length; i++) {
          this.cancionService.getSongsById(this.records()[i].id).subscribe({
            next: (songs) => {
              this.records()[i].songs = songs.data;
              this.records.set([...this.records()]);
            },
            error: (err) => {
              console.error('Error al obtener las canciones:', err);
            }
          }); 
        }
      },
      error: (err) => {
        console.error('Error al obtener los discos:', err);
      }
    });
  }
  reproducirCancionPadre(song: CancionModel) {
    console.log('Reproduciendo canción desde el componente padre:', song);
    this.playing = `Reproduciendo: ${song.title} del artista ${song.artist}`;
    let audioPlayer = document.getElementById('audio_player') as HTMLAudioElement;
    audioPlayer?.setAttribute('src', song.path);
    audioPlayer?.play();
  }
    
}
