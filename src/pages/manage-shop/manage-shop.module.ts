import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ManageShopPage } from './manage-shop';

@NgModule({
  declarations: [
    ManageShopPage,
  ],
  imports: [
    IonicPageModule.forChild(ManageShopPage),
  ],
})
export class ManageShopPageModule {}
