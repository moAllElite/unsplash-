import { Routes } from '@angular/router';

export const routes: Routes = [
  /*{
    path: '',
    loadComponent: () => import('./photo/component/image-list/image-list.component').then(m => m.ImageListComponent),
  }
    {
      path:'',redirectTo:'photos/all',pathMatch:'full'
    },*/
    {
      path:'photos',
      children:[
        {
          path:'',loadChildren:()=> import('./photo/photo.module').then(m=>m.PhotoModule)
        },
      /*  {
          path:':id',
          loadComponent:()=> import('./photo/component/photo-details/photo-details.component').then(m=>m.PhotoDetailsComponent)
        },*/

      ]
    }
];
