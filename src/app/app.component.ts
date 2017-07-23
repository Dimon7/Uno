import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


@Component({
  templateUrl: 'app.html',
  
})
export class MyApp {

  game = [
    {name : 'Dimon',  rate: 0,  history : '' },
    {name : 'Taras',  rate: 0,  history : '' },
    {name : 'Ruslan', rate: 0,  history : '' },

  ];

  zero(elem){
    elem.history = '';
    elem.rate = 0;
  }
  add(elem, r){
    if(r != ''){    

      elem.history+= r+', ';
      elem.rate += +r;

      if(elem.rate >= 150){
        this.zero(elem);
      }
    }
    
    
  }

  add_person(val){

    if(val != ''){
      this.game.push(
        {name : val, rate: 0, history : '' }
      );
    }
  }

  del_person(id){

    this.game.splice(id,1);
  }

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
            platform.registerBackButtonAction(() => {
                navigator['app'].exitApp();                
            });
        });
  }
}



