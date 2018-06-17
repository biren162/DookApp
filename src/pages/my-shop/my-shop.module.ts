import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyShopPage } from './my-shop';

@NgModule({
  declarations: [
    MyShopPage,
  ],
  imports: [
    IonicPageModule.forChild(MyShopPage),
  ],
})
export class MyShopPageModule {}
