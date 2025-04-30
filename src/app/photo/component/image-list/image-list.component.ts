import { Component, inject, signal, WritableSignal, OnInit } from '@angular/core';
import { ImageComponent } from "../image/image.component";
import { PhotosService } from '../../service/photos.service';
import { rxResource } from '@angular/core/rxjs-interop';
import { environment } from '../../../../environments/environment.development';
import { PaginatorModule, PaginatorState } from 'primeng/paginator';
import { InputNumber } from 'primeng/inputnumber';
import { FormsModule } from '@angular/forms';
import { LoadingSpinnerComponent } from "../../../shared/components/loading-spinner/loading-spinner.component";
import { Language } from '../../enums/language';
import { Select } from 'primeng/select';
import { tap } from 'rxjs/internal/operators/tap';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';

@Component({
  selector: 'app-image-list',
  imports: [ImageComponent,  PaginatorModule, FormsModule,
    FormsModule, Select,
    InputNumber, LoadingSpinnerComponent,IconFieldModule,InputIconModule],
  templateUrl: './image-list.component.html',
  styleUrl: './image-list.component.scss'
})

export class ImageListComponent implements OnInit {
  ngOnInit(): void {
    this.languages =[
      {name:'English',code:  'en' },
        {name:'Français',code:'fr'}
     ]
  }

  pageNumber: WritableSignal<number> = signal(1);
  //inject the service to get the data
  photoService = inject(PhotosService);
  client_id = environment.clientId;
  //data for the loading spinner
  animationDuration = '10s';
  strokeWidth = '8';
  selectedLanguage: Langue | undefined;
  languages :Langue[] |undefined ;
  pageSize:WritableSignal <number> = signal(10);
  total_records: WritableSignal<number> = signal(0);


  //get photos from  unsplash API
  photoRessources = rxResource({
      request:()=> this.pageNumber(),
      loader:({request:pageSize}) => {
        return this.photoService.getPhotos(
        this.pageNumber(),
        this.client_id,
        this.selectedLanguage??{code:Language.FR,name:'Français'},
      )
      },
  });



}



export interface Langue {
  name: string;
  code: string;
}
