import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-hxbox',
  templateUrl: './hxbox.component.html',
  styleUrls: ['./hxbox.component.css']
})
export class HxboxComponent {
  constructor(private titulo:Title){
    titulo.setTitle('Hxbox')
  }
}
