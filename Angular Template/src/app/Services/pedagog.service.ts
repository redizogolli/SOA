import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IOrariPedagog } from '../Interfaces/IOrariPedagog';

@Injectable({
  providedIn: 'root'
})
export class PedagogService {

  baseUrl:string = "https://localhost:44326";

  constructor(private httpClient : HttpClient) { }

  get_PedagogNames(): Observable<string[]>{
    return this.httpClient.get<string[]>(this.baseUrl + '/api/Pedagog');
  }

  get_PedagogOrari(name:string): Observable<IOrariPedagog[]>{
    return this.httpClient.get<IOrariPedagog[]>(this.baseUrl + '/api/Pedagog/'+name+'/orari');
  }
}

