import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DoctorQuantityComponent } from './doctor-quantity/doctor-quantity.component';
import { SearchPipe } from './doctor-quantity/search.pipe';
import { DoctorsComponent } from './doctors/doctors.component';
import { AppRoutingModule } from './app-routing.module';
import { DoctorFullComponent } from './doctor-full/doctor-full.component';
import { AncetaComponent } from './anceta/anceta.component';
import { DocSpecPipe } from './doctors/doc-spec.pipe';
import { DocFullPipe } from './doctor-full/doc-full.pipe';
import { ClinicsComponent } from './clinics/clinics.component';
import { LKComponent } from './lk/lk.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { AnketaPipe } from './lk/anketa.pipe';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { DocAllComponent } from './doc-all/doc-all.component';







@NgModule({
  declarations: [
    AppComponent,
    DoctorQuantityComponent,
    SearchPipe,
    DoctorsComponent,
    DoctorFullComponent,
    AncetaComponent,
    DocSpecPipe,
    DocFullPipe,
    ClinicsComponent,
    LKComponent,
    SignupComponent,
    LoginComponent,
    AdminComponent,
    AnketaPipe,
    FileUploadComponent,
    DocAllComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
