import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CancionModel } from '../../models/cancion.model';

@Component({
  selector: 'app-cancion',
  imports: [],
  templateUrl: './cancion.html',
  styleUrl: './cancion.css',
})
export class Cancion {
  @Input() public song: CancionModel = new CancionModel(0, '', '', '', 0, '', 0);
  @Output() public songToPlay = new EventEmitter<CancionModel>();

  public playSong() {
    this.songToPlay.emit(this.song);
  }
}
