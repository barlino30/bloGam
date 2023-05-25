import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AngularFireModule } from '@angular/fire/compat';
import { environment } from '../environments/environment';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CarruselComponent,
    CardComponent,
    FootComponent,
    PagComponent,
    HxboxComponent,
    ListXboxComponent,
    HplayComponent,
    HnintendoComponent,
    ListNintendoComponent,
    ListPlayComponent,
    HfxboxComponent,
    PersonasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    NgbModalModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
