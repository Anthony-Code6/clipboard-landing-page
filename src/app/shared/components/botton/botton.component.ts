import { Component, input } from '@angular/core';

@Component({
  selector: 'app-botton',
  imports: [],
  templateUrl: './botton.component.html',
  styleUrl: './botton.component.scss',
})
export class BottonComponent {
  type = input<'button' | 'submit'>();
  color = input<string>('')
}
