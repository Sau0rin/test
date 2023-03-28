import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { doctor } from 'src/models/doctor';


@Injectable({
  providedIn: 'root'
})
export class DoctorsService {

  private url="Doctors";
  constructor(

    private http:HttpClient,

  ) { }

  public getDoctors(): Observable<doctor[]> {
   
    return this.http.get<doctor[]>(`${environment.apiUrl}/${this.url}`)
  }
  public getspetialization(): Observable<doctor[]> {
    return this.http.get<doctor[]>(`${environment.apiUrl}/${this.url}`);
  }

  public updatespetialization(doctor: doctor): Observable<doctor[]> {
    return this.http.put<doctor[]>(
      `${environment.apiUrl}/${this.url}`,
      doctor
    );
  }

  public createspetialization(doctor: doctor): Observable<doctor[]> {
    return this.http.post<doctor[]>(
      `${environment.apiUrl}/${this.url}`,
      doctor
    );
  }

  public deletespetialization(doctor: doctor): Observable<doctor[]> {
    return this.http.delete<doctor[]>(
      `${environment.apiUrl}/${this.url}/${doctor.fio}`
    );
  }
}
