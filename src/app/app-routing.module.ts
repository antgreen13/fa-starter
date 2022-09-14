import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreationComponent } from './creation/creation.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'creation', component: CreationComponent },
  { path: 'creation/:name', component: CreationComponent },
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
