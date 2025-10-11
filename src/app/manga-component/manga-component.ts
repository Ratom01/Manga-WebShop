import { Component } from '@angular/core';
import { Manga, MANGAS } from '../../assets/datas/manga-data';
import { NgForOf } from "@angular/common";

@Component({
  selector: 'manga-component',
  imports: [NgForOf],
  templateUrl: './manga-component.html',
  styleUrl: './manga-component.css'
})
export class MangaComponent {

  mangas : Manga[] = MANGAS;

}
