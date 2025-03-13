import { Component } from '@angular/core';
import { ImagenComponent } from "../../shared/components/imagen/imagen.component";
import { BottonComponent } from "../../shared/components/botton/botton.component";
import { FooterComponent } from "../../shared/layouts/footer/footer.component";
import { AsociadosComponent } from "../../components/home/asociados/asociados.component";

@Component({
  selector: 'app-home',
  imports: [ImagenComponent, BottonComponent, FooterComponent, AsociadosComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
