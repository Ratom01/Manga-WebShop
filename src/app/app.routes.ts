import { Routes } from '@angular/router';
import { Home } from './home/home';
import { NotFound } from './not-found/not-found';
import { Profile } from './profile/profile';
import { Cart } from './cart/cart';
import { MangaComponent } from './manga-component/manga-component';

export const routes: Routes = [
    {path: 'home', component: Home},
    {path: 'manga', component: MangaComponent},
    {path: 'cart', component: Cart},
    {path: 'profile', component: Profile},
    {path: '**', component: NotFound}
];
