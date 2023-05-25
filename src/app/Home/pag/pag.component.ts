import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-pag',
  templateUrl: './pag.component.html',
  styleUrls: ['./pag.component.css']
})
export class PagComponent {
//esto es para el titulo de la pag
constructor(private titulo:Title){
  titulo.setTitle('Home')
}
}
