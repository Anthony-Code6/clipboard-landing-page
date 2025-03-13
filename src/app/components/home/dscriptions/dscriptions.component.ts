import { Component, input } from '@angular/core';
import { Contenido } from '../../../core/models/contenido';

@Component({
  selector: 'app-dscriptions',
  imports: [],
  templateUrl: './dscriptions.component.html',
  styleUrl: './dscriptions.component.scss'
})
export class DscriptionsComponent {
  contenido = input<Contenido>()
}
