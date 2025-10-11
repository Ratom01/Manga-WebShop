import { Component } from '@angular/core';
import { NgForOf } from "@angular/common";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'home',
  imports: [NgForOf, RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  features = [
    { title: 'Új megjelenések', description: 'Fedezd fel a legfrissebb mangákat a webshopban.' },
    { title: 'Akciók', description: 'Ne hagyd ki a heti akcióinkat!' },
    { title: 'Top kedvencek', description: 'Nézd meg a legnépszerűbb mangákat a közösség szerint.' }
  ];
}
