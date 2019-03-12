import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AboutPage } from '../about/about';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  user: string;
  group: string;
  cursos: string[] = ['Ionic', 'Docker',
                      'Java', 'Angular',
                      'Net', 'Liquibase']
  money: number;
  constructor(public navCtrl: NavController) {

  }

  goAbout() {
    let data = {user:this.user, group:this.group,
                cursos:this.cursos, date: new Date(),
                money:this.money};
    console.log(data);
    //debugger
    this.navCtrl.push(AboutPage,data);
  }

}
