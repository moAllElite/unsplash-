import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { inject } from "@vercel/analytics";
import { MenuBarComponent } from './photo/component/menu-bar/menu-bar.component';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet,MenuBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'unsplash';
}
