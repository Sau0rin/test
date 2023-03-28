import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { anketa } from 'src/models/anketa';
import { AnketaService } from '../services/anketa.service';
import { LoginService } from '../services/login.service';
import { RecordsService } from '../services/records.service';

@Component({
  selector: 'app-lk',
  templateUrl: './lk.component.html',
})
export class LKComponent implements OnInit {
  specEdit?: anketa;
  anceta:string
  fullInfo:anketa[]=[];
  @Output() specUpdate = new EventEmitter<anketa[]>();
  constructor(private loginService: LoginService,
    private ancetaServics:AnketaService,
    private activ:ActivatedRoute
    ) { this.anceta = activ.snapshot.params['fio']}

  ngOnInit(): void {
    this.ancetaServics.getanketa().subscribe((result: anketa[])=>(this.fullInfo = result));
  }

  initNewspetialization() {
    this.specEdit = new anketa();
  }

  editspetialization(anketa: anketa) {
    this.specEdit = anketa;
  }
  
  updatespetialization(anketa: anketa) {
    this.ancetaServics
      .updatespetialization(anketa)
      .subscribe((anketa: anketa[]) => this.specUpdate.emit(anketa));
  }
  
  deletespetialization(anketa: anketa) {
    this.ancetaServics
      .deletespetialization(anketa)
      .subscribe((anketa: anketa[]) => this.specUpdate.emit(anketa));
  }
  
  createspetialization(anketa: anketa) {
   anketa.userName = this.anceta
    this.ancetaServics
      .createspetialization(anketa)
      .subscribe((anketa: anketa[]) => this.specUpdate.emit(anketa));
  }

  logout(){ this.loginService.logout()}
}
