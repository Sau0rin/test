import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { MainComponent } from './components/main/main.component';
import { DoctorsComponent } from './components/doctors/doctors.component';
import { SpetializationsComponent } from './components/spetializations/spetializations.component';
import { ClinicsComponent } from './components/clinics/clinics.component';
import { FormsModule } from '@angular/forms';
import { SearchPipe } from './components/spetializations/search.pipe';



@NgModule({
  declarations: [
    MainComponent,
    DoctorsComponent,
    SpetializationsComponent,
    ClinicsComponent,
    SearchPipe,

  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule
  ]
})
export class AdminModule { }
