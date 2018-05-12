import {Component, ViewChild} from '@angular/core';
import {Nav, NavController, Platform} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {DebtPage} from "../pages/debt/debt";


@Component({
  templateUrl: 'app.html',

})
export class MyApp {

  private navCtrl: NavController;

  game = [];
  newGame = [];

  zero(elem){
    elem.history = '';
    elem.rate = 0;

    localStorage.setItem('game', JSON.stringify(this.game) ) ;

  }

  add(elem, r){
    if(r != ''){
      elem.history+= r+', ';
      elem.rate += +r;
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

  rec(lenGame){
    let arr = [];
    let len = lenGame;

    for (let i = 0; i < len; i++) {
      for(let j=i+1; j<len; j++) {
        arr.push({name1: this.game[i].name, name2: this.game[j].name});
      }
    }
    console.log(arr);

    this.navCtrl.push( DebtPage, {obj : arr});

  }

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
          this.game =  localStorage.getItem('game') != undefined ?  JSON.parse(localStorage.getItem('game')): [];
          platform.registerBackButtonAction(() => {
              navigator['app'].exitApp();
          });
      });
  }
}
