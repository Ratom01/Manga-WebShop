import { Component, OnInit } from '@angular/core';
import { NgForOf } from "@angular/common";
import { Manga } from '../../../assets/models/Manga';
import { RouterLink } from "@angular/router";
import { MangaService } from '../../manga-service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'manga-component',
  imports: [NgForOf, RouterLink, HttpClientModule],
  templateUrl: './manga-component.html',
  styleUrl: './manga-component.css',
  providers: [MangaService]
})
export class MangaComponent implements OnInit{

  mangas : Manga[] = [];

  constructor(private mangaService : MangaService){
    
  }
  ngOnInit(): void {
    this.mangaService.getMangas().subscribe({
      next: data => {this.mangas = data; console.log(data)},
      error: message => alert(message)
    });
  }

}
