import { Component, inject, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { PhotosService } from '../../service/photos.service';
import {rxResource, toSignal} from '@angular/core/rxjs-interop';
import { environment } from '../../../../environments/environment.development';
import { ImageModule } from 'primeng/image';
import { LoadingSpinnerComponent } from "../../../shared/components/loading-spinner/loading-spinner.component";
import { DatePipe } from '@angular/common';
import { OverlayBadgeModule } from 'primeng/overlaybadge';
import { ButtonModule } from 'primeng/button';
import { Photo } from '../../models/photo.model';
import {StaticsService} from '../../../dashboards/services/statics.service';
@Component({
  selector: 'app-photo-details',
  imports: [ImageModule, LoadingSpinnerComponent, DatePipe, ButtonModule, OverlayBadgeModule],
  templateUrl: './photo-details.component.html',
  styleUrl: './photo-details.component.scss'
})
export class PhotoDetailsComponent implements OnInit {
  photoId: string='';

  //inject resources & services

  constructor(private route: ActivatedRoute) {}

  photoService: PhotosService = inject(PhotosService);
  client_id:string = environment.clientId;

  statsService : StaticsService = inject(StaticsService);

  ngOnInit(): void {
    this.photoId = this.route.snapshot.paramMap.get('id')!;
  }

  photoResource = rxResource({
    request:()=> this.photoId,
    loader:({request: photoId})=>this.photoService.getPhotoById(this.photoId, this.client_id)});
  router:Router = inject(Router);


  //loading spinner parameters
  animationDuration = '0.8s';
  strokeWidth = '10';

    //navigation to portfolio page
  navigateToPortfolio(photo:Photo){
      if(photo) {
        const portfolioUrl = `${photo.user.portfolio_url}`;
        window.open(portfolioUrl, '_blank');
      }
    }


    //go to dashboard page
  navigateToDashboard(photo:Photo ){
        this.router.navigate(['/dashboard',photo.id]).then();
    }
}
