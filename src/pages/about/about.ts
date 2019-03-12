import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { MyPage } from '../my/my';

/**
 * Generated class for the AboutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
})
export class AboutPage {

  user:string;
  data: any;
  dateCourse: any;
  cursos: string[] = ['Ionic', 'Docker',
                      'Java', 'Angular',
                      'Net', 'Liquibase']

  colorLabel: string = 'secondary'

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.data = this.navParams.data;
    console.log('Todo el objbeto', this.data);
    this.user = this.navParams.get('user');
    console.log('usuario', this.data.user);
    this.dateCourse = this.navParams.get('date');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AboutPage');
  }

  goMy() {
    console.log('Primer Click');
    this.navCtrl.push(MyPage);
    setTimeout ( () => {
      this.colorLabel = 'danger'
    })
  }

  gobackHome(){
    this.navCtrl.popToRoot();
  }

  goback(){
    this.navCtrl.pop();
  }

}
