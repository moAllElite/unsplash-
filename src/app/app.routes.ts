import { Routes } from '@angular/router';

export const routes: Routes = [
   
    {
      path:'',redirectTo:'photos',pathMatch:'full'
    },
    {
      path:'photos',
      loadChildren: () => import('./photo/photo.module').then(m => m.PhotoModule),
    }
];
