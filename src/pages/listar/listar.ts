import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ServiceProvider } from '../../providers/service/service';


@IonicPage({})
@Component({
  selector: 'page-listar',
  templateUrl: 'listar.html',
})
export class ListarPage {

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private service: ServiceProvider) {
  }

  ionViewDidLoad() {
    this.service.buscarTodos().subscribe(response =>{

      console.log(response);
    },
    error =>{
      console.log(error);
    })
  }

}
