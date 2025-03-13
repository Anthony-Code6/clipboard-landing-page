import { Component } from '@angular/core';
import { ImagenComponent } from "../../shared/components/imagen/imagen.component";
import { BottonComponent } from "../../shared/components/botton/botton.component";

@Component({
  selector: 'app-home',
  imports: [ImagenComponent, BottonComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
