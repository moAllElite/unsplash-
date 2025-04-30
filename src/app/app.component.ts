import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ImageListComponent } from "./photo/component/image-list/image-list.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ImageListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'unsplash';
}
