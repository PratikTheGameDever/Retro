import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Observable';
import {  environmentobj } from '../environment.obj'

@Injectable()
export class RetroService{
    
    constructor(private _http: Http){

    }
    
    sendData(data: String): Observable<any> {
        return this._http.get(environmentobj.envObj.add+data)
        .map(data => data).catch(error => error); //we can remove
    }

    getData(): Observable<any> {
        return this._http.get(environmentobj.envObj.getAll)
            .map(data => data).catch(error => error);
    }

    deleteData(data: String): Observable<any> {
        return this._http.get(environmentobj.envObj.delete+data)
        .map(data => data).catch(error => error);
    }
}