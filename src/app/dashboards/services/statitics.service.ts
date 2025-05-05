import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StatsModel } from '../model/stats.model';

@Injectable({
  providedIn: 'root'
})
export class StatiticsService {

  constructor(private readonly http:HttpClient) { }

  // Get all statistics by photo id
  getAllStatisticsByPhotoId(photoId: string,client_id: string):Observable<StatsModel> {
    return this.http.get<StatsModel>(
      `https://api.unsplash.com/photos/${photoId}/statistics?client_id=${client_id}`
    );
  }
}
