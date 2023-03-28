import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { specialization } from 'src/models/specializations';

@Injectable({
  providedIn: 'root'
})
export class SpecializationCityService {
 private url="Specializations";
  constructor(

    private http:HttpClient,

  ) { }

  public getspetialization(): Observable<specialization[]> {
    return this.http.get<specialization[]>(`${environment.apiUrl}/${this.url}`);
  }

  public updatespetialization(spetialization: specialization): Observable<specialization[]> {
    return this.http.put<specialization[]>(
      `${environment.apiUrl}/${this.url}`,
      spetialization
    );
  }

  public createspetialization(spetialization: specialization): Observable<specialization[]> {
    return this.http.post<specialization[]>(
      `${environment.apiUrl}/${this.url}`,
      spetialization
    );
  }

  public deletespetialization(spetialization: specialization): Observable<specialization[]> {
    return this.http.delete<specialization[]>(
      `${environment.apiUrl}/${this.url}/${spetialization.name}`
    );
  }
}
