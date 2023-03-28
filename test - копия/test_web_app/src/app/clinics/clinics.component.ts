import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Clinic } from 'src/models/clinic';
import { ClinicsService } from '../services/clinics.service';

@Component({
  selector: 'app-clinics',
  templateUrl: './clinics.component.html',
})
export class ClinicsComponent  {

  clinics:Clinic[]=[];
  constructor (
    private activ:ActivatedRoute,
    private clinicsService: ClinicsService
    ){}

  ngOnInit(): void {
    this.clinicsService.getClinics().subscribe((result: Clinic[])=>(this.clinics = result));
  }

}
