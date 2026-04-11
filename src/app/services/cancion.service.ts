import { Injectable } from '@angular/core';
import { CancionModel } from '../models/cancion.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DiscoModel } from '../models/disco.model';
import { urlRecord } from './disco.service';


@Injectable({
  providedIn: 'root',
})
export class CancionService {
  constructor(
    private http: HttpClient
  ) {

  }

  public getSongsById(id: number): Observable<any> {

    return this.http.get(urlRecord + 'songs/from_disc/' + id);
    }
}
