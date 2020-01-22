import { IKlasa } from './../Interfaces/IKlasa';
import { IDita } from './../Interfaces/IDita';

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { IOrariSalle } from '../Interfaces/IOrariSalle';

@Injectable({
  providedIn: 'root'
})
export class EkstraktService {

baseUrl:string = "https://localhost:44326";

constructor(private httpClient : HttpClient) {}

get_Ditet() : Observable<IDita[]>{
	return this.httpClient.get<IDita[]>(this.baseUrl + '/api/Ekstrakte/ditet').pipe(
		catchError(this.handleError)
  );
}
get_Sallat(): Observable<IKlasa[]>{
	return this.httpClient.get<IKlasa[]>(this.baseUrl + '/api/Ekstrakte/salla');
}
get_OrariPerSalle(dita:number,salla:number): Observable<IOrariSalle[]>{
	return this.httpClient.get<IOrariSalle[]>(this.baseUrl + '/api/Ekstrakte/'+dita +"/"+salla+"/orari");
}
private handleError(error: any) {
    console.error('server error:', error);
    if (error.error instanceof Error) {
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
