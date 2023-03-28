import { HttpClient, HttpEventType, HttpRequest } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DoctorsService } from 'src/app/services/doctors.service';
import { doctor } from 'src/models/doctor';


@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html'
})
export class DoctorsComponent implements OnInit {
  
  specEdit?: doctor;
  @Output() specUpdate = new EventEmitter<doctor[]>();
  doctors:doctor[] =[];

  constructor(
    private doctorsService: DoctorsService
  ){}


 ngOnInit() : void{

  this.doctorsService.getDoctors().subscribe((result: doctor[])=>(this.doctors=result))
 }
 updateHeroList(doctors: doctor[]) {
  this.doctors = doctors;
}

initNewspetialization() {
  this.specEdit = new doctor();
}

editspetialization(doctors: doctor) {
  this.specEdit = doctors;
}

updatespetialization(doctors: doctor) {
  this.doctorsService
    .updatespetialization(doctors)
    .subscribe((doctors: doctor[]) => this.specUpdate.emit(doctors));
}

deletespetialization(doctors: doctor) {
  this.doctorsService
    .deletespetialization(doctors)
    .subscribe((doctors: doctor[]) => this.specUpdate.emit(doctors));
}

createspetialization(doctors: doctor) {
  this.doctorsService
    .createspetialization(doctors)
    .subscribe((doctors: doctor[]) => this.specUpdate.emit(doctors));
}
}
