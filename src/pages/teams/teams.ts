import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { TeamHomePage } from '../team-home/team-home';
import { GameEventApiProvider } from '../../providers/game-event-api/game-event-api';

/**
 * Generated class for the TeamsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-teams',
  templateUrl: 'teams.html',
})
export class TeamsPage {
  public teams=[];
  constructor(public navCtrl: NavController, public navParams: NavParams,
              private gameEventApi:GameEventApiProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TeamsPage');
    let selectedTourney=this.navParams.data;
    console.log("selected tourny:"+JSON.stringify(selectedTourney));
    this.gameEventApi.getTournamentData(selectedTourney.id).subscribe(data=>{
      this.teams=data.teams;
    })
  }
  itemTapped($event,team){
    this.navCtrl.push(TeamHomePage,team);
  }

}
