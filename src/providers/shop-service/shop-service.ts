import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import {
  NavController,
  LoadingController,
  ToastController
} from "ionic-angular";
import {
  FileTransfer,
  FileUploadOptions,
  FileTransferObject
} from "@ionic-native/file-transfer";
/*
  Generated class for the ShopServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ShopServiceProvider {
  private apiUrl;
  private imageURI;
  private uploadedImgUrl;
  constructor(
    public http: HttpClient,
    public toastCtrl: ToastController,
    private transfer: FileTransfer
  ) {
    console.log("Hello ShopServiceProvider Provider");
    this.apiUrl = "http://10.13.10.51:8080/";
  }
  saveImg(imgUri) {
    const fileTransfer: FileTransferObject = this.transfer.create();

    let options: FileUploadOptions = {
      fileKey: "ionicfile",
      fileName: "ionicfile",
      chunkedMode: false,
      mimeType: "image/jpeg",
      headers: {}
    };
    fileTransfer.upload(imgUri, "${this.apiUrl}uploadImgApi", options).then(
      data => {
        console.log(data + " url of uploaded img");
        this.uploadedImgUrl = data;
        /*   loader.dismiss();
      this.presentToast("Image uploaded successfully");*/
        this.imageURI = data;
      },
      err => {
        console.log(err);
        /*loader.dismiss();
      this.presentToast(err);*/
        this.imageURI = "-1";
      }
    );
    return this.imageURI;
  }
}
