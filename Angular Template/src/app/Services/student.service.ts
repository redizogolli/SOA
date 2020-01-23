import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IOrariStudent } from '../Interfaces/IOrariStudent';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  baseUrl:string = "https://localhost:44326";
  constructor(private httpClient : HttpClient) { }

  getDeget(): Observable<string[]>{
    return this.httpClient.get<string[]>(this.baseUrl + '/api/Student/dege');
  }

  getVitPerDege(dege:string): Observable<number[]>{
    return this.httpClient.get<number[]>(this.baseUrl + '/api/Student/'+ dege + '/vit');
  }

  getParalelPerVitDege(dege:string,vit:number): Observable<string[]>{
    return this.httpClient.get<string[]>(this.baseUrl + '/api/Student/'+ dege + '/'+vit+'/paraleli');
  }

  getStudentOrari(dege:string,vit:number,paraleli:string): Observable<IOrariStudent[]>{
    return this.httpClient.get<IOrariStudent[]>(this.baseUrl + '/api/Student/'+ dege + '/'+vit+'/'+paraleli+'/orari');
  }

}

