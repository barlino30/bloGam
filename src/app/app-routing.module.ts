import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './Home/navbar/navbar.component';
import { CarruselComponent } from './Home/carrusel/carrusel.component';
import { CardComponent } from './Home/card/card.component';
import { FootComponent } from './Home/foot/foot.component';
import { PagComponent } from './Home/pag/pag.component';
import { HxboxComponent } from './Xbox/hxbox/hxbox.component';
import { ListXboxComponent } from './Xbox/list-xbox/list-xbox.component';
import { HplayComponent } from './PlayStation/hplay/hplay.component';
import { HnintendoComponent } from './Nintendo/hnintendo/hnintendo.component';
import { ListNintendoComponent } from './Nintendo/list-nintendo/list-nintendo.component';
import { ListPlayComponent } from './PlayStation/list-play/list-play.component';
import { HfxboxComponent } from './Xbox/hfxbox/hfxbox.component';
import { PersonasComponent } from './personas/personas.component';


const routes: Routes = [
  { path: 'navi', component: NavbarComponent },
  { path: 'carrusel', component: CarruselComponent },
  { path: 'card', component: CardComponent },
  { path: 'foot', component: FootComponent },
  { path: 'home', component: PagComponent },
  { path: 'hxbox', component: HxboxComponent },
  { path: 'listXbox', component: ListXboxComponent },
  { path: 'hplay', component: HplayComponent },
  { path: 'listplay', component: ListPlayComponent },
  { path: 'hnin', component: HnintendoComponent },
  { path: 'listnin', component: ListNintendoComponent },
  { path: 'hfxbox', component: HfxboxComponent},
  { path: '', component: PersonasComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
