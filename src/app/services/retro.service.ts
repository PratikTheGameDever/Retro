import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class RetroService{

    constructor(private _http: Http){

    }

    sendData(data: String): Observable<any> {
        return this._http.get('https://rentoserver.firebaseapp.com/add?'+data)
        .map(data => data).catch(error => error);
    }

    getData(): Observable<any> {
        return this._http.get('https://rentoserver.firebaseapp.com/getAll')
            .map(data => data).catch(error => error);
    }
    deleteData(data: String): Observable<any> {
        return this._http.get('https://rentoserver.firebaseapp.com/delete?'+data)
        .map(data => data).catch(error => error);
    }
}