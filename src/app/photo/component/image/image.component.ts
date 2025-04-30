import { Component, inject, input, InputSignal, WritableSignal } from '@angular/core';
import { ImageModule } from 'primeng/image';
import { Photo } from '../../models/photo.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-image',
  imports: [ImageModule],
  templateUrl: './image.component.html',
  styleUrl: './image.component.scss'
})
export class ImageComponent {
  photo :InputSignal<Photo> = input.required<Photo>();
  langue:InputSignal<string | undefined> = input();
  router:Router = inject(Router);


  //go to photo view
  navigatePhotoDetails(photoId:  string) {
    alert(photoId)
    this.router.navigateByUrl(`/photos/${photoId}`)
  }
}
