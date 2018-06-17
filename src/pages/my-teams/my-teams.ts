import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { TournamentsPage } from '../tournaments/tournaments';

/**
 * Generated class for the MyTeamsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-my-teams',
  templateUrl: 'my-teams.html',
})
export class MyTeamsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
  }
  goTotournamentPage(){
    this.navCtrl.push(TournamentsPage);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad MyTeamsPage');
  }

}
