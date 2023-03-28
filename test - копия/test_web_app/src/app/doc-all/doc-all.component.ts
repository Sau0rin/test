import { Component, EventEmitter, Output} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { anketa } from 'src/models/anketa';
import { doctor } from 'src/models/doctor';
import { AncetaComponent } from '../anceta/anceta.component';
import { DoctorsService } from '../services/doctors.service';
import { RecordsService } from '../services/records.service';


@Component({
  selector: 'doctor-full',
  templateUrl: './doc-all.component.html'
})


export class DocAllComponent  {
 fio:string

 @Output() specUpdate = new EventEmitter<anketa[]>();
 specEdit!: anketa;
  fullInfo:doctor[]=[];
  ankets:anketa[]=[];
  constructor (
    private activ:ActivatedRoute,   private ancetaServics:RecordsService,
    private doctorFullInfo: DoctorsService
    ){this.fio = activ.snapshot.params['fio']}
  
    ngOnInit() : void{
      this.ancetaServics.getanketa().subscribe((result: anketa[])=>(this.ankets = result));
      this.doctorFullInfo.getDoctors().subscribe((result: doctor[])=>(this.fullInfo = result));
    }
    initNewspetialization() {
      this.specEdit = new anketa();
      this.specEdit.doctorname=this.fio

    }
    newanceta(anketa:anketa){
      anketa.doctorname = this.fio
      this.ancetaServics
      .createspetialization(anketa)
      .subscribe((anketa: anketa[]) => this.specUpdate.emit(anketa));
    }

    createspetialization(anketa: anketa) {
      this.ancetaServics
        .createspetialization(anketa)
        .subscribe((anketa: anketa[]) => this.specUpdate.emit(anketa));
    }

}
