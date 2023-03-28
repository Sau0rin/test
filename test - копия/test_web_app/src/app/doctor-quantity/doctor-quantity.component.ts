
import { HttpClient, HttpEventType, HttpRequest } from '@angular/common/http';
import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { Quantity } from 'src/models/quantity';
import { specialization } from 'src/models/specializations';
import { SpecializationCityService } from '../services/specialization-city.service';

@Component({
  selector: 'doctor-quantity',
  templateUrl: './doctor-quantity.component.html',
})
export class DoctorQuantityComponent  {
  spec: specialization[] =[];
  public progress: number | undefined;
  public message: string | undefined;

constructor (

  private specializationsCity: SpecializationCityService,private http: HttpClient
  ){}
  upload(files:any) {
    if (files.length === 0)
      return;

    const formData = new FormData();

    for (let file of files)
      formData.append(file.name, file);

    const uploadReq = new HttpRequest('POST', `api/upload`, formData, {
      reportProgress: true,
    });

    this.http.request(uploadReq).subscribe(event => {
      if (event.type === HttpEventType.UploadProgress)
        this.progress = Math.round(100 * event.loaded );
      });}
  ngOnInit() : void{
    
    this.specializationsCity.getspetialization().subscribe((result: specialization[])=>(this.spec = result));
    
  }

 

search ="base"
  // posts:Post[] =[
  //   {name:"Дерматовенеролог",city:["Тирасполь","base"]},
  //   {name:"Психиатр",city:["Тирасполь","Бендеры","base"]},
  //   {name:"Психолог",city:["Тирасполь","Бендеры","base"]},
  //   {name:"Трихолог",city:["Рыбница","Бендеры","base"]},
  //   {name:"Гастроэнтеролог",city:["Бендеры","base"]},
  //   {name:"Гинеколог",city:["Тирасполь","base"]},
  //   {name:"Дерматолог",city:["Тирасполь","Тирасполь","base"]},
  //   {name:"Кардиолог",city:["Рыбница","Бендеры","base"]},
  //   {name:"Невролог",city:["Бендеры","base"]},
  //   {name:"ЛОР",city:["Тирасполь","base"]},
  //   {name:"Офтальмолог",city:["Тирасполь","Бендеры","base"]},
  //   {name:"Проктолог",city:["Рыбница","Бендеры","base"]},
  //   {name:"Психотерапевт",city:["Бендеры","base"]},
  //   {name:"Терапевт",city:["Рыбница","Бендеры","base"]},
  //   {name:"Уролог",city:["Бендеры","base"]},
  //   {name:"Эндокринолог",city:["Бендеры","base"]},
  //  ]
}
