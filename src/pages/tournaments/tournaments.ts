import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TeamsPage } from '../teams/teams';
import { GameEventApiProvider } from '../../providers/game-event-api/game-event-api';

/**
 * Generated class for the TournamentsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tournaments',
  templateUrl: 'tournaments.html',
})
export class TournamentsPage {
  public tournaments: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              private gameEventApi: GameEventApiProvider
              ) {
  }

  ionViewDidLoad() {
    console.log('calling api metho getTournaments');
    this.gameEventApi.getTournaments().then(data => this.tournaments=data);
  }
  itemTapped($event,tourney){
    this.navCtrl.push(TeamsPage,tourney);
  }

}
