import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  RouterModule, Routes } from '@angular/router';

export const route:Routes = [
  {
    path:'',redirectTo:'photos',pathMatch:'full'
  },
  {
    path:'photos',
    children:[
      {
        path:'',loadComponent:()=> import('./component/image-list/image-list.component').then(m=>m.ImageListComponent)
      },
     /* {
        path:':id',
        loadComponent:()=> import('./component/photo-details/photo-details.component').then(m=>m.PhotoDetailsComponent)
      },*/

    ]
  }

];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,RouterModule.forChild(route)
  ]
})
export class PhotoModule { }
