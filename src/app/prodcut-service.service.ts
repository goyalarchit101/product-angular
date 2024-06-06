import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProdcutServiceService {

  private apiUrl = 'https://api.spacexdata.com/v3/missions';
  name = "archit";

  constructor(private http: HttpClient) { }

  getMissions(): Observable<any>{
    return this.http.get<any>(this.apiUrl);
  }

  // delete missions api url
  deleteMissions(id: number): Observable<any>{
    return this.http.delete<any>(this.apiUrl + '/' + id);
  }

  //api call for product detail page
  getmissionDetails(id:number) :Observable<any>{
    return this.http.get<any>(this.apiUrl + '/' + id);
  }


}
