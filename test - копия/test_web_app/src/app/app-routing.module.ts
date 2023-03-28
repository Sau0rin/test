import { Component, ComponentRef, NgModule } from '@angular/core';
import { DoctorsComponent } from './doctors/doctors.component';
import { RouterModule, Routes } from '@angular/router';
import { DoctorQuantityComponent } from './doctor-quantity/doctor-quantity.component';
import { DoctorFullComponent } from './doctor-full/doctor-full.component';
import { AncetaComponent } from './anceta/anceta.component';
import { ClinicsComponent } from './clinics/clinics.component';
import { LKComponent } from './lk/lk.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { LoginGuard } from './guards/login.guard';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { DocAllComponent } from './doc-all/doc-all.component';

const routes: Routes =[
  {path:'' , component: DoctorQuantityComponent},
  {path:'Doctors/:id', component: DoctorsComponent},
  {path:'doctorfull/:fio', component:DoctorFullComponent},
  {path:'anceta', component:AncetaComponent},
  {path:'Clinics', component:ClinicsComponent},
  {path:'LK/:fio',canDeactivate:[LoginGuard], component:LKComponent},
  {path:'login', component:LoginComponent},
  {path:'signUp', component:SignupComponent},
  {path:'admin', canActivate:[LoginGuard],canDeactivate:[LoginGuard], loadChildren:()=> import('./components/admin/admin.module').then((m)=>m.AdminModule)},
  {path: 'docall', component: DocAllComponent },



];

@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule { }
