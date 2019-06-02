import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@IonicPage({})
@Component({
  selector: 'page-cadastro',
  templateUrl: 'cadastro.html',
})
export class CadastroPage {

  formGroup: FormGroup;

  constructor(public navCtrl: NavController,
    public formBuilder: FormBuilder,
    public navParams: NavParams,
    public alertCtrl: AlertController
  ) {

    this.formGroup = this.formBuilder.group({
      nome: [null, [Validators.required, Validators.minLength(5), Validators.maxLength(120)]],
      email: [null, [Validators.required, Validators.minLength(5), Validators.maxLength(120)]],
      whatsapp: [null, [Validators.required, Validators.minLength(5), Validators.maxLength(120)]]
    })

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastroPage');
  }

}
