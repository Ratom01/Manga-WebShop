import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Manga } from '../assets/models/Manga';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MangaService {

  private url = 'assets/datas/manga-data.json';

  constructor(private http : HttpClient){
  }

  getMangas() {
    return this.http.get<Manga[]>(this.url);
  }

  getMangaById(id: number) {
    return this.http.get<Manga[]>(this.url).pipe(
      map(mangas => mangas.find(m => m.id === id))
    );
  }

}
