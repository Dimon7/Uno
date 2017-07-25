import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


@Component({
  templateUrl: 'app.html',
  
})
export class MyApp {
  
  game = [];

  zero(elem){
    elem.history = '';
    elem.rate = 0;
    localStorage.setItem('game', JSON.stringify(this.game) ) ;
    
  }
  add(elem, r){
    if(r != ''){    

      elem.history+= r+', ';
      elem.rate += +r;

      if(elem.rate >= 150){
        this.zero(elem);
      }
    }
    localStorage.setItem('game', JSON.stringify(this.game) ) ;
    
    
  }

  add_person(val){

    if(val != ''){
      this.game.push(
        {name : val, rate: 0, history : '' }
      );
    }

    localStorage.setItem('game', JSON.stringify(this.game) ) ;
    
    
  }

  del_person(id){

    this.game.splice(id,1);
    localStorage.setItem('game', JSON.stringify(this.game) ) ;
    
    
  }

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      
          this.game = JSON.parse( localStorage.getItem('game') );
          console.log(this.game);
          
          platform.registerBackButtonAction(() => {
              navigator['app'].exitApp();                
          });
      });
  }
}