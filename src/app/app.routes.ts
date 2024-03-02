import { Routes } from '@angular/router';
import {HomePageComponent} from "./pages/home/home-page.component";
import {AssetsPageComponent} from "./pages/assets/assets-page.component";

export const routes: Routes = [
  { path: '', pathMatch:'full', redirectTo: 'home', },
  { path: 'home', component: HomePageComponent },
  { path: 'assets', component: AssetsPageComponent},
];
