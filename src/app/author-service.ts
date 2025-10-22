import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Author } from '../assets/models/Author';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  private url = 'assets/datas/author-data.json';

  constructor(private http : HttpClient){
  }

  getAuthors() {
    return this.http.get<Author[]>(this.url);
  }

  getMangaById(id: number) {
    return this.http.get<Author[]>(this.url).pipe(
      map(authors => authors.find(m => m.id === id))
    );
  }

}
