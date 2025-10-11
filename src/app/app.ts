import { Component, signal } from '@angular/core';
import { Router, RouterLink, RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('manga-webshop');

  constructor(private router : Router){}

}
