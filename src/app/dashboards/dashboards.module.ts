import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

export const routes : Routes = [
  {
    path: ':id',
    loadComponent: () => import('./components/dashboard/dashboard.component').then(m => m.DashboardComponent),
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,RouterModule.forChild(routes)
  ]
})
export class DashboardsModule { }
