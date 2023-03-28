import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { specialization } from 'src/models/specializations';
import { SpecializationCityService } from '../services/specialization-city.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
})
export class AdminComponent implements OnInit { specEdit?: specialization;
  @Output() specUpdate = new EventEmitter<specialization[]>();
  spec: specialization[] =[];
 

 constructor(

  private specializationsCity: SpecializationCityService
 ) {}

  ngOnInit(): void { this.specializationsCity.getspetialization().subscribe((result: specialization[])=>(this.spec = result));}

  updateHeroList(spetializations: specialization[]) {
    this.spec = spetializations;
  }

  initNewspetialization() {
    this.specEdit = new specialization();
  }

  editspetialization(spetialization: specialization) {
    this.specEdit = spetialization;
  }

  updatespetialization(spetialization: specialization) {
    this.specializationsCity
      .updatespetialization(spetialization)
      .subscribe((spetializations: specialization[]) => this.specUpdate.emit(spetializations));
  }

  deletespetialization(spetialization: specialization) {
    this.specializationsCity
      .deletespetialization(spetialization)
      .subscribe((spetializations: specialization[]) => this.specUpdate.emit(spetializations));
  }

  createspetialization(spetialization: specialization) {
    this.specializationsCity
      .createspetialization(spetialization)
      .subscribe((spetializations: specialization[]) => this.specUpdate.emit(spetializations));
  }
  search ="base"
}
