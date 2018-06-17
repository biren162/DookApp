import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { TeamDetailPage } from '../team-detail/team-detail';
import { StandingsPage } from '../standings/standings';

/**
 * Generated class for the TeamHomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-team-home',
  templateUrl: 'team-home.html',
})
export class TeamHomePage {
  public teamDetailTab=TeamDetailPage;
  public standingTab=StandingsPage;
  public team : any ={}; 
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.team =navParams;
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad TeamHomePage');
  }
  goHome(){
    this.navCtrl.popToRoot();
  }

}
