import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IonicPage, LoadingController, NavParams,ToastController,NavController } from 'ionic-angular';
import { ShopServiceProvider } from '../../providers/shop-service/shop-service';
import { Camera, CameraOptions } from '@ionic-native/camera';

/**
 * Generated class for the AddShopPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-shop',
  templateUrl: 'add-shop.html',
})
export class AddShopPage {
  private imageURI;
  loading: any;
  url: String;
  private imageFileName;
  constructor(public navCtrl: NavController,private camera: Camera,public shopService:ShopServiceProvider, public navParams: NavParams,public http: HttpClient,public loadingCtrl:LoadingController,public toastCtrl:ToastController) {
  }
  getImage() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
    }
  
    this.camera.getPicture(options).then((imageData) => {
      this.imageURI = imageData;
    }, (err) => {
      console.log(err);
      this.presentToast(err);
    });
  }
  saveImg(){
    let loader = this.loadingCtrl.create({
      content: "Uploading..."
    });
    loader.present();

    this.showLoader();
    this.url=this.shopService.saveImg(this.imageURI);
    console.log('img url:'+this.url);
    this.loading.dismiss();
    if(this.url!=null && this.url!='' && this.url!='-1'){
      return this.url;
    }
    else{
      this.presentToast('error');
      return '-1';
    }
      
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

}
