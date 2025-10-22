import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Manga } from '../../../assets/models/Manga';
import { HttpClientModule } from '@angular/common/http';
import { MangaService } from '../../manga-service';
import { NgForOf, NgIf } from "@angular/common";
import { AuthorService } from '../../author-service';
import { Author } from '../../../assets/models/Author';

@Component({
  selector: 'app-manga-details',
  imports: [HttpClientModule, NgForOf, NgIf],
  templateUrl: './manga-details.html',
  styleUrl: './manga-details.css',
  providers: [MangaService, AuthorService]
})
export class MangaDetails implements OnInit{

  manga : Manga | undefined;
  authors : Author[] = [];

  constructor(private route : ActivatedRoute, private mangaService : MangaService, private authorService : AuthorService){

  }
  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = params.get("id");

      if(id){
        this.mangaService.getMangaById(Number(id)).subscribe({
          next: data => this.manga = data,
          error: message => alert(message)
        })
      }
    })

    this.authorService.getAuthors().subscribe({
      next: data => this.authors = data,
      error: message => alert(message)
    })
    
  }
}
