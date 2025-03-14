import { Component, HostListener, signal } from '@angular/core';
import { ImagenComponent } from "../../shared/components/imagen/imagen.component";
import { BottonComponent } from "../../shared/components/botton/botton.component";
import { FooterComponent } from "../../shared/layouts/footer/footer.component";
import { Details } from '../../core/models/details';
import { Asociados } from '../../core/models/asociados';
import { DetailsComponent } from "../../components/home/details/details.component";
import { DscriptionsComponent } from "../../components/home/dscriptions/dscriptions.component";
import { Contenido } from '../../core/models/contenido';

@Component({
  selector: 'app-home',
  imports: [ImagenComponent, BottonComponent, FooterComponent, DetailsComponent, DscriptionsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  // variables
  widthImg = signal<number>(600)
  widthImg1 = signal<number>(750)

  logo = signal<string>('assets/images/logo.svg')

  contenido1 = signal<Contenido>({
    titulo: 'A history of everything you copy',
    descripcion: "Clipboard allows you to track and organize everything you copy. Instantly access your clipboard on all your devices."
  })


  contenido2 = signal<Contenido>({
    titulo: 'Keep track of your snippets',
    descripcion: "Clipboard instantly stores any item you copy in the cloud, meaning you can access your snippets immediately on all your devices. Our Mac and iOS apps will help you organize everything."
  })

  listcontent = signal<Contenido[]>([
    {
      titulo: 'Quick Search',
      descripcion: 'Easily search your snippets by content, category, web address, application, and more.'
    },
    {
      titulo: 'iCloud Sync',
      descripcion: 'Instantly saves and syncs snippets across all your devices.'
    },
    {
      titulo: 'Complete History',
      descripcion: 'Retrieve any snippets from the first moment you started using the app.'
    }
  ])

  img1 = signal<string>('assets/images/image-computer.png')

  contenido3 = signal<Contenido>({
    titulo: 'Access Clipboard anywhere',
    descripcion: "Whether you’re on the go, or at your computer, you can access all your Clipboard snippets in a few simple clicks."
  })

  img2 = signal<string>('assets/images/image-devices.png')

  contenido4 = signal<Contenido>({
    titulo: 'Supercharge your workflow',
    descripcion: "We’ve got the tools to boost your productivity."
  })

  detailsSoftware = signal<Details[]>(
    [
      {
        img: 'assets/images/icon-blacklist.svg',
        titulo: 'Create blacklists',
        descripcion: ' Ensure sensitive information never makes its way to your clipboard by excluding certain sources.'
      },
      {
        img: 'assets/images/icon-text.svg',
        titulo: 'Plain text snippets',
        descripcion: 'Remove unwanted formatting from copied text for a consistent look.'
      },
      {
        img: 'assets/images/icon-preview.svg',
        titulo: 'Sneak preview',
        descripcion: 'Quick preview of all snippets on your Clipboard for easy access.'
      }
    ]
  )

  asociados = signal<Asociados[]>(
    [
      {
        asociado: 'assets/images/logo-google.png'
      },
      {
        asociado: 'assets/images/logo-ibm.png'
      },
      {
        asociado: 'assets/images/logo-microsoft.png'
      },
      {
        asociado: 'assets/images/logo-hp.png'
      },
      {
        asociado: 'assets/images/logo-vector-graphics.png'
      }
    ]
  )

  contenido5 = signal<Contenido>({
    titulo: 'Clipboard for iOS and Mac OS',
    descripcion: "Available for free on the App Store Download for Mac or iOS, sync with iCloud and you`re ready to start adding to your clipboard."
  })


  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    const target = event.target as Window

    const width = target.innerWidth
    if (width < 1553) {
      this.widthImg1.set(width * 0.7)
    } else {
      this.widthImg1.set(750)
    }

    if (width < 830) {
      this.widthImg.set(width * 0.7)

    } else {
      this.widthImg.set(600);
    }



  }
}
