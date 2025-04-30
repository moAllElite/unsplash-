import { HttpClient } from '@angular/common/http';
import { Injectable, WritableSignal } from '@angular/core';
import { Observable } from 'rxjs';
import { Photos } from '../models/photos.model';
import { Language } from '../enums/language';
import { Langue } from '../component/image-list/image-list.component';
import { Photo } from '../models/photo.model';

@Injectable({
  providedIn: 'root'
})
export class PhotosService {

  constructor(readonly http:HttpClient) { }

  getPhotos(page_number:number,client_id:string,langue:Langue ):Observable<Photos> {
    return this.http.get<Photos>(
      `https://api.unsplash.com/photos?page=${page_number}&client_id=${client_id}&lang=${langue.code??'fr'}`,
    );
  }

  getPhotoById(id:string,client_id:string):Observable<Photo> {
    return this.http.get<Photo>(`https://api.unsplash.com/photos/${id}?client_id=${client_id}`);
  }

}
