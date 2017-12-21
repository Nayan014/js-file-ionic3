import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

//Importing var and fn form js(assets/js/test.js) file

//Js variable
declare var JSvar;
//Js function
declare function JSfunction();

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
  }

  callJSfunction(){
    JSfunction();
  }

  callJSvar(){
    alert(JSvar);
  }

}
