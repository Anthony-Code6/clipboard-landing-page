import { Component, input } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
@Component({
  selector: 'app-imagen',
  imports: [NgOptimizedImage],
  templateUrl: './imagen.component.html',
  styleUrl: './imagen.component.scss',
})
export class ImagenComponent {
  imgUrl = input<string>()
  altImg = input<string>()
  imgWidth= input<number>(120)
  imgHeight= input<number>(120)
}
