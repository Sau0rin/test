import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { anketa } from 'src/models/anketa';

@Injectable({
  providedIn: 'root'
})
export class RecordsService {

  constructor(private http:HttpClient,) { }
  private url="anketa";
  private url2="records";

  public getanketa(): Observable<anketa[]> {
   
    return this.http.get<anketa[]>(`${environment.apiUrl}/${this.url}`)
  }
  public getspetialization(): Observable<anketa[]> {
    return this.http.get<anketa[]>(`${environment.apiUrl}/${this.url}`);
  }

  public updatespetialization(docanketator: anketa): Observable<anketa[]> {
    return this.http.put<anketa[]>(
      `${environment.apiUrl}/${this.url}`,
      anketa
    );
  }

  public createspetialization(anketa: anketa): Observable<anketa[]> {
    return this.http.post<anketa[]>(
      `${environment.apiUrl}/${this.url2}`,
      anketa
    );
  }

  public deletespetialization(anketa: anketa): Observable<anketa[]> {
    return this.http.delete<anketa[]>(
      `${environment.apiUrl}/${this.url}/${anketa.fio}`
    );
  }
}
