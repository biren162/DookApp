import { BrowserModule } from "@angular/platform-browser";
import { ErrorHandler, NgModule } from "@angular/core";
import { IonicApp, IonicErrorHandler, IonicModule } from "ionic-angular";

import { MyApp } from "./app.component";

import { StatusBar } from "@ionic-native/status-bar";

import { SplashScreen } from "@ionic-native/splash-screen";
import { MyTeamsPage } from "../pages/my-teams/my-teams";
import { TournamentsPage } from "../pages/tournaments/tournaments";
import { GamePage } from "../pages/game/game";
import { TeamDetailPage } from "../pages/team-detail/team-detail";
import { TeamsPage } from "../pages/teams/teams";
import { TeamHomePage } from "../pages/team-home/team-home";
import { StandingsPage } from "../pages/standings/standings";
import { GameEventApiProvider } from "../providers/game-event-api/game-event-api";
import { HttpModule } from "@angular/http";
import { AddProductPage } from "../pages/add-product/add-product";
import { ManageShopPage } from "../pages/manage-shop/manage-shop";
import { MyShopPage } from "../pages/my-shop/my-shop";
import { AuthServiceProvider } from "../providers/auth-service/auth-service";
import { LoginPage } from "../pages/login/login";
import { HttpClientModule } from "@angular/common/http";
import { RegisterOwnerPage } from "../pages/register-owner/register-owner";
import { ShopServiceProvider } from "../providers/shop-service/shop-service";
import { AddShopPage } from "../pages/add-shop/add-shop";
import { Camera } from "@ionic-native/camera";
import {
  FileTransfer,
  FileUploadOptions,
  FileTransferObject
} from "@ionic-native/file-transfer";

@NgModule({
  declarations: [
    MyApp,
    MyTeamsPage,
    TournamentsPage,
    GamePage,
    TeamDetailPage,
    TeamsPage,
    TeamHomePage,
    StandingsPage,
    AddProductPage,
    ManageShopPage,
    MyShopPage,
    LoginPage,
    RegisterOwnerPage,
    AddShopPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    HttpClientModule
  ],
  exports: [LoginPage],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    MyTeamsPage,
    TournamentsPage,
    GamePage,
    TeamDetailPage,
    TeamsPage,
    TeamHomePage,
    StandingsPage,
    AddProductPage,
    ManageShopPage,
    MyShopPage,
    LoginPage,
    RegisterOwnerPage,
    AddShopPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    GameEventApiProvider,
    AuthServiceProvider,
    ShopServiceProvider,
    Camera,
    FileTransfer
  ]
})
export class AppModule {}
