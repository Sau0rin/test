import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ClinicsService } from 'src/app/services/clinics.service';
import { Clinic } from 'src/models/clinic';

@Component({
  selector: 'app-clinics',
  templateUrl: './clinics.component.html',
})
export class ClinicsComponent implements OnInit {
  specEdit?: Clinic;
  @Output() specUpdate = new EventEmitter<Clinic[]>();
  clinic: Clinic[] =[];
  constructor(

    private clinicsServics: ClinicsService
   ) {}
  
    ngOnInit(): void { this.clinicsServics.getClinics().subscribe((result: Clinic[])=>(this.clinic = result));}
  qw(){ console.log(this.specEdit?.foto);}
    updateHeroList(clinic: Clinic[]) {
      this.clinic = clinic;
    }
  
    initNewspetialization() {
      this.specEdit = new Clinic();
    }
  
    editspetialization(clinic: Clinic) {
      this.specEdit = clinic;
    }
  
    updatespetialization(clinic: Clinic) {
      this.clinicsServics
        .updatespetialization(clinic)
        .subscribe((clinic: Clinic[]) => this.specUpdate.emit(clinic));
    }
  
    deletespetialization(clinic: Clinic) {
      this.clinicsServics
        .deletespetialization(clinic)
        .subscribe((clinic: Clinic[]) => this.specUpdate.emit(clinic));
    }
  
    createspetialization(clinic: Clinic) {
      this.clinicsServics
        .createspetialization(clinic)
        .subscribe((clinic: Clinic[]) => this.specUpdate.emit(clinic));
    }
}
