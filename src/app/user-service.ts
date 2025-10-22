import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../assets/models/User';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url = 'assets/datas/users-data.json';

  constructor(private http : HttpClient){
  }

  getMangas() {
    return this.http.get<User[]>(this.url);
  }

  getMangaById(email: string) {
    return this.http.get<User[]>(this.url).pipe(
      map(users => users.find(u => u.email === email))
    );
  }

   private getStandardOptions() : any {
      return {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        })
      };
    }

  addUser(user : User){
    let options = this.getStandardOptions();

    this.http.post<User>(this.url, user, options);
  }
}
