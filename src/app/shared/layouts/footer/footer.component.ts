import { Component, HostListener, signal } from '@angular/core';
import { Links } from '../../../core/models/links';
import { RouterLink } from '@angular/router';
import { Socials } from '../../../core/models/socials';
import { ImagenComponent } from "../../components/imagen/imagen.component";

@Component({
  selector: 'app-footer',
  imports: [RouterLink, ImagenComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  sizeImg = signal<number>(90)

  logo = signal<string>('assets/images/logo.svg')

  links = signal<Links[]>([
    {
      links: 'FAQs'
    },
    {
      links: 'Contact Us'
    },
    {
      links: 'Privacy Plicy'
    },
    {
      links: 'Press Kit'
    },
    {
      links: 'Install Guide'
    }
  ])

  socials = signal<Socials[]>([
    {
      social: 'assets/images/icon-facebook.svg'
    },
    {
      social: 'assets/images/icon-twitter.svg'
    },
    {
      social: 'assets/images/icon-instagram.svg'
    }
  ])

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    const target = event.target as Window
    const width = target.innerWidth
    if (width > 320 && width < 46) {
      this.sizeImg.set(20)
    }

  }
}
