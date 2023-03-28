import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { doctor } from 'src/models/doctor';
import { DoctorsService } from '../services/doctors.service';
@Component({
  selector: 'doctors',
  templateUrl: './doctors.component.html',
})
export class DoctorsComponent  {
 
  doctors:doctor[] =[];
  specialization?: string;

  constructor(
    private activ:ActivatedRoute,
    private doctorsService: DoctorsService
  ){this.specialization = activ.snapshot.params['id']}
 ngOnInit() : void{

  this.doctorsService.getDoctors().subscribe((result: doctor[])=>(this.doctors=result))
 }

  

  // doctorInfo:doctor[] =[
//   {FIO:"Колосов Дамир Андреевич",litleInfo:"принимает в кадинете",specializations:["Психолог 3 года","Психиатр 5 лет"],foto:"assets/images/z1mfTJC_pl4.jpg"},
//   {FIO:"Филимонова Ольга Львовна",litleInfo:"принимает в кадинете",specializations:["Дерматовенеролог"],foto:"assets/images/YZf0DW1ajQ8.jpg"},
//   {FIO:"Головин Ярослав Миронович",litleInfo:"принимает в кадинете",specializations:["Трихолог","Эндокринолог"],foto:"assets/images/z1mfTJC_pl4.jpg"},
//   {FIO:"Ткачева Диана Эриковна",litleInfo:"принимает в кадинете",specializations:["Гастроэнтеролог"],foto:"assets/images/YZf0DW1ajQ8.jpg"},
//   {FIO:"Родионова Анастасия Ивановна",litleInfo:"принимает в кадинете",specializations:["Гинеколог","Уролог"],foto:"assets/images/z1mfTJC_pl4.jpg"},
//   {FIO:"Киселева Аиша Никитична",litleInfo:"принимает в кадинете",specializations:["Дерматолог","Дерматовенеролог"],foto:"assets/images/YZf0DW1ajQ8.jpg"},
//   {FIO:"Киселева Аиша Никитична",litleInfo:"принимает в кадинете",specializations:["Кардиолог"],foto:"assets/images/z1mfTJC_pl4.jpg"},
//   {FIO:"Кудрявцева Мария Семёновна",litleInfo:"принимает в кадинете",specializations:["Невролог","Психотерапевт"],foto:"assets/images/YZf0DW1ajQ8.jpg"},
//   {FIO:"Зайцева Екатерина Романовна",litleInfo:"принимает в кадинете",specializations:["Проктолог","Терапевт"],foto:"assets/images/YZf0DW1ajQ8.jpg"},
//   {FIO:"Гаврилов Игорь Маркович",litleInfo:"принимает в кадинете",specializations:["Офтальмолог","ЛОР"],foto:"assets/images/z1mfTJC_pl4.jpg"},
// ]

}
