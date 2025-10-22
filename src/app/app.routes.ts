import { Routes } from '@angular/router';
import { Home } from './home/home';
import { NotFound } from './not-found/not-found';
import { Profile } from './profile/profile';
import { Cart } from './cart/cart';
import { MangaComponent } from './manga/manga-component/manga-component';
import { MangaDetails } from './manga/manga-details/manga-details';
import { Register } from './register/register';

export const routes: Routes = [
    {path: 'home', component: Home},
    {path: 'manga', component: MangaComponent},
    {path: 'cart', component: Cart},
    {path: 'profile', component: Profile},
    {path : 'manga/:id', component: MangaDetails},
    {path : 'register', component: Register},
    {path: '**', component: NotFound}
];
