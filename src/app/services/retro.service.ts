import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Observable';
import {environment} from '../../environments/environment';
const BASE_URL = `${environment.baseUrl}`

@Injectable()
export class RetroService{
    
    teamName = '';

    constructor(private _http: Http){

    }

    getTeams(): Observable<any> {
      return this._http.get(BASE_URL + '/getTeams');
    }
    
    sendData(data: String): Observable<any> {
        return this._http.get(BASE_URL + '/add?' + data + '&team=' + this.teamName)
        .map(data => data).catch(error => error); //we can remove
    }

    getData(): Observable<any> {
        return this._http.get(BASE_URL + '/getAll?team=' + this.teamName)
            .map(data => data).catch(error => error);
    }

    setTeamName(val: string): Observable<any> {
        this.teamName = val;
        return this._http.get(BASE_URL + '/addNewTeam?name=' + val);
    }

    deleteData(data: String): Observable<any> {
         return this._http.get(BASE_URL + '/delete' + data + '&team=' + this.teamName)
         .map(data => data).catch(error => error);
    }
}