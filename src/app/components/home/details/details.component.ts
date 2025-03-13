import { Component, input } from '@angular/core';
import { Details } from '../../../core/models/details';
import { ImagenComponent } from "../../../shared/components/imagen/imagen.component";

@Component({
  selector: 'app-details',
  imports: [ImagenComponent],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss'
})
export class DetailsComponent {
  detailsSoftware = input<Details>()
}
