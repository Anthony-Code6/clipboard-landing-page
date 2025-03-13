import { Component, signal } from '@angular/core';
import { Asociados } from '../../../core/models/asociados';
import { ImagenComponent } from "../../../shared/components/imagen/imagen.component";

@Component({
  selector: 'app-asociados',
  imports: [ImagenComponent],
  templateUrl: './asociados.component.html',
  styleUrl: './asociados.component.scss'
})
export class AsociadosComponent {
asociados=signal<Asociados[]>(
  [
    {
      asociado:'assets/images/logo-google.png'
    },
    {
      asociado:'assets/images/logo-ibm.png'
    },
    {
      asociado:'assets/images/logo-microsoft.png'
    },
    {
      asociado:'assets/images/logo-hp.png'
    },
    {
      asociado:'assets/images/logo-vector-graphics.png'
    }
  ]
)
}
