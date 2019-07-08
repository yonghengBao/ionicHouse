import { Component,OnInit } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
@Component({
  templateUrl: 'app.html'
})
export class MyApp implements OnInit{
  rootPage:any = HomePage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    this.setDeviceWidth();
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
  ngOnInit(){

    window.onresize = () => {
      return (() => {
        this.setDeviceWidth();
      })();
    };
  }
  //修改html的字体大小
  setDeviceWidth(){
    let deviceWidth= document.documentElement.clientWidth;
    document.documentElement.style.fontSize = (deviceWidth/3.75) + 'px';
  }
}

