import { Component } from '@angular/core';
import { NavController, LoadingController, ToastController,MenuController  } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { ManageShopPage } from '../manage-shop/manage-shop';
import { RegisterOwnerPage } from '../register-owner/register-owner';


@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  loading: any;
  loginData = { userName:'', password:'' };
  data: any;
  errorMessage='';
  constructor(public navCtrl: NavController, public menu:MenuController,public authService: AuthServiceProvider, public loadingCtrl: LoadingController, private toastCtrl: ToastController) {
    
  }
  ionViewDidEnter(){
    this.menu.swipeEnable(false);
  }
  ionViewWillLeave(){
    this.menu.swipeEnable(true);
  }
  ionViewDidLoad(){
    console.log('page did enter');
    let token=localStorage.getItem('token');
    if(token != null && token != "" && token != 'invalid' && token!='internalError'){
      console.log('already loged in ');
      this.navCtrl.setRoot(ManageShopPage);
    //  this.navCtrl.popToRoot();
    }
  
    }
  doLogin() {
    console.log('do login called');
    this.showLoader();
    this.authService.login(this.loginData).subscribe((result) => {
      this.loading.dismiss();
      this.data = result;
      console.log('inside login api, result:'+result);
      localStorage.setItem('token', result);
      if(result!= null && result !='' && result!='invalid' && result!='internalError'){
      console.log('navigating to home');
      this.navCtrl.setRoot(ManageShopPage);
      this.navCtrl.popToRoot();
      
      }
      else{
        this.errorMessage='Invalid Login';
      }
    }, (err) => {
      this.loading.dismiss();
      this.presentToast(err);
    });
  }

  showLoader(){
    this.loading = this.loadingCtrl.create({
        content: 'Authenticating...'
    });

    this.loading.present();
  }

  presentToast(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 3000,
      position: 'bottom',
      dismissOnPageChange: true
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    toast.present();
  }
  register(){
    this.navCtrl.push(RegisterOwnerPage);
  }

}