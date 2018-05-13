import {Component} from '@angular/core';

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



  constructor() {
      this.game =  localStorage.getItem('game') != undefined ?  JSON.parse(localStorage.getItem('game')): [];
  }
}
