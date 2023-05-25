import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  //esto es para el titulo de la pag
  constructor(private titulo:Title){
    titulo.setTitle('BloGame')
  }
}
