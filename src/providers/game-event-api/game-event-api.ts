import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
/*
  Generated class for the GameEventApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GameEventApiProvider {
private baseUrl ='https://gameeventionic.firebaseio.com';
private tourneyData = {};
currentTourney: any = {};
  constructor(public http: Http) {
    console.log('Hello GameEventApiProvider Provider');
  }
  getTournaments(){
    console.log('inside provider getTournaments method called')
    return new Promise(resolve => {
      this.http.get(`${this.baseUrl}/tournaments.json`).subscribe(res=>resolve(res.json()));
    })
  }
  getTournamentData(tourneyId): Observable<any> {
  
    return this.http.get(`${this.baseUrl}/tournaments-data/${tourneyId}.json`)
    .map(response => {
      this.tourneyData[tourneyId] = response.json();
      this.currentTourney = this.tourneyData[tourneyId];
      return this.currentTourney;
    });
  }

}
