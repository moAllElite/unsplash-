import { Component, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PhotosService } from '../../service/photos.service';
import { rxResource, toSignal } from '@angular/core/rxjs-interop';
import { environment } from '../../../../environments/environment.development';
import { ImageModule } from 'primeng/image';
import { LoadingSpinnerComponent } from "../../../shared/components/loading-spinner/loading-spinner.component";

@Component({
  selector: 'app-photo-details',
  imports: [ImageModule, LoadingSpinnerComponent],
  templateUrl: './photo-details.component.html',
  styleUrl: './photo-details.component.scss'
})
export class PhotoDetailsComponent implements OnInit {
  photoId: string='';

  //inject resources & services
  route:ActivatedRoute = inject(ActivatedRoute);
  photoService: PhotosService = inject(PhotosService);
  client_id:string = environment.clientId;

  ngOnInit(): void {
    this.photoId = this.route.snapshot.paramMap.get('id')!;

  }

  photoResource = rxResource({
    request:()=> this.photoId,
    loader:({request: photoId})=>this.photoService.getPhotoById(this.photoId, this.client_id)});


  //loading spinner parameters
  animationDuration = '0.8s';
  strokeWidth = '10';
}
