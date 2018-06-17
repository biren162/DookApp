import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddShopPage } from './add-shop';

@NgModule({
  declarations: [
    AddShopPage,
  ],
  imports: [
    IonicPageModule.forChild(AddShopPage),
  ],
})
export class AddShopPageModule {}
