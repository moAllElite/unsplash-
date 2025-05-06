import { Component, computed, DestroyRef, inject, OnInit, signal, WritableSignal } from '@angular/core';
import { MenubarModule } from 'primeng/menubar';
import { AvatarModule } from 'primeng/avatar';
import { BadgeModule } from 'primeng/badge';
import { CommonModule } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';
import { Ripple } from 'primeng/ripple';
import { Router } from '@angular/router';
import {  map, Subscription } from 'rxjs';
import { MessageService } from 'primeng/api';
import { Photo } from '../../models/photo.model';
import { Toast, ToastModule } from 'primeng/toast';
import { PhotosService } from '../../service/photos.service';
import { environment } from '../../../../environments/environment.development';import { HttpErrorResponse } from '@angular/common/http';
import { rxResource } from '@angular/core/rxjs-interop';
import { LoadingSpinnerComponent } from "../../../shared/components/loading-spinner/loading-spinner.component";
 @Component({
  selector: 'app-menu-bar',
  imports: [MenubarModule, AvatarModule, ToastModule, BadgeModule, InputTextModule, Ripple, CommonModule, LoadingSpinnerComponent],
  templateUrl: './menu-bar.component.html',
  styleUrl: './menu-bar.component.scss',
  providers:[MessageService]
})
export class MenuBarComponent implements OnInit {

  router:Router = inject(Router);
  items: MenuItem[] | undefined;
  photo : WritableSignal<Photo | undefined>= signal(undefined);
  photoService:PhotosService = inject(PhotosService); // inject the service
  client_id:string = environment.clientId; // client id for unsplash api
  photo$ !:Subscription;
  destroy = inject(DestroyRef); // inject destroy ref for unsubscribing from observables
  private messageService: MessageService = inject(MessageService);//inject messageService for toast display


  //navigate on page
  navigateTo(item: MenuItem) {
    if(item.label.includes('aléatoire')) {

      setTimeout(() => {
        this.router.navigate([item.routeLink,`${this.photoId()}`]);
      },500);
    }
    else {
      this.router.navigate([item.routeLink]);
    }

  }
  photoId :WritableSignal<string> = signal('');


  randomPhoto = rxResource({
    request:()=> this.photoId(),
    loader:({request})=> this.photoService.getRandomPhoto(this.client_id)
    .pipe(
      map((data)=>{
        this.photoId.set(data.id);
      })
    )
  });


  //fetch random photo from unsplash api
   getRandomPhoto() {
    this.photo$ = this.photoService.getRandomPhoto(this.client_id).subscribe({
      next: (data) =>{
        this.photoId.set(data.id);
      },
      error:(err:HttpErrorResponse)=> this.showError(err.error)

    }    );
    this.destroy.onDestroy(() => this.photo$.unsubscribe());
  }
  // show error toast
  showError(message:string) {

    this.messageService.add({ severity: 'error', summary: 'Error', detail: message });
}

  ngOnInit() {
    this.items = [
        {
            label: 'Home',
            icon: 'pi pi-home',
            routeLink: '/',
        },
        {
            label: 'aléatoire',
            icon: 'pi pi-ethereum',
            routeLink: '/photos',
        }
    ];
}
}

export interface MenuItem {
    label: string
    icon:string,
    routeLink?: string,

}
