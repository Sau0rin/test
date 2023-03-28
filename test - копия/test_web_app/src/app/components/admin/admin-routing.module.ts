import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClinicsComponent } from './components/clinics/clinics.component';
import { DoctorsComponent } from './components/doctors/doctors.component';
import { MainComponent } from './components/main/main.component';
import { SpetializationsComponent } from './components/spetializations/spetializations.component';

const routes: Routes = [
  {path:'', component:MainComponent,
    children:[
      {path:'clinics', component: ClinicsComponent},
      {path:'doctors', component:DoctorsComponent},
      {path:'spetializations', component: SpetializationsComponent},
],
}
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
