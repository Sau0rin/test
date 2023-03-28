import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Clinic } from 'src/models/clinic';

@Injectable({
  providedIn: 'root'
})
export class ClinicsService {
  private url="Clinics";
  constructor(

    private http:HttpClient,

  ) { }

  public getClinics(): Observable<Clinic[]> {
   
    return this.http.get<Clinic[]>(`${environment.apiUrl}/${this.url}`)
  }
  public updatespetialization(Clinic: Clinic): Observable<Clinic[]> {
    return this.http.put<Clinic[]>(
      `${environment.apiUrl}/${this.url}`,
      Clinic
    );
  }

  public createspetialization(Clinic: Clinic): Observable<Clinic[]> {
    return this.http.post<Clinic[]>(
      `${environment.apiUrl}/${this.url}`,
      Clinic
    );
  }

  public deletespetialization(Clinic: Clinic): Observable<Clinic[]> {
    return this.http.delete<Clinic[]>(
      `${environment.apiUrl}/${this.url}/${Clinic.name}`
    );
  }

}
