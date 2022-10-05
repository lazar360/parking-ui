import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; //L'import est indiqué
import { ParkingDetailComponent } from './parking-detail/parking-detail.component';
import { ParkingsComponent } from './parkings/parkings.component';

//On ajoute une route en indiquant son url dans le tableau et le component
const appRoutes: Routes = [
  { path: 'parkings', component: ParkingsComponent },
  { path: 'parking/:id', component: ParkingDetailComponent },
  { path: '**', redirectTo: '/parkings' } // création d'une page par défaut
];

//Ici, on injecte le module
@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
