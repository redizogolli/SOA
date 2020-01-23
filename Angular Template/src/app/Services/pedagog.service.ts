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

  private handleError(error: any) {
    console.error('server error:', error);
    if (error.error instanceof Error) 
    {
        const errMessage = error.error.message;
        // tslint:disable-next-line: deprecation
        return Observable.throw(errMessage);
        // Use the following instead if using lite-server
        // return Observable.throw(err.text() || 'backend server error');
    }
        // tslint:disable-next-line: deprecation
      return Observable.throw(error || 'Node.js server error');
  }
}

