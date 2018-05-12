import {Component, Input} from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';



@Component({
  selector: 'page-debt',
  templateUrl: 'debt.html',
})
export class DebtPage {

  obj:any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.obj = this.navParams.get('obj');


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DebtPage');
  }

}
