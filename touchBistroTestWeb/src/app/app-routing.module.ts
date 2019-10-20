import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FindMedianPrimeComponent } from './find-median-prime/find-median-prime.component';

const routes: Routes = [{ path: '', component: FindMedianPrimeComponent, pathMatch: 'full' }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
