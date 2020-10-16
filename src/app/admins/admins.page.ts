import { Component, OnInit } from '@angular/core';
import { AlertController, IonItemSliding, ModalController, ToastController } from '@ionic/angular';
import { Admin } from './admin';
import { AdminsService } from './admins.service';
import { Router } from '@angular/router';
import { stringify } from 'querystring';

@Component({
  selector: 'app-admins',
  templateUrl: './admins.page.html',
  styleUrls: ['./admins.page.scss'],
})
export class AdminsPage implements OnInit {
  loadedAdmin: Admin;
  admins: Admin[];
  constructor(
    private router: Router,
    private alertCtrl: AlertController,
    private toastCtrl: ToastController,
    private adminsService: AdminsService,
    private modalCtrl: ModalController) { }

  ngOnInit() {
    this.admins = this.adminsService.getAllAdmins();
  }

  ionViewWillEnter(){
    this.admins = this.adminsService.getAllAdmins();
  }

  onFilterUpdate(event: CustomEvent){
    console.log(event.detail);
  }

  ubah(admin: Admin, slidingItem: IonItemSliding){
    slidingItem.close();
    //console.log(barang.merek, barang.model, 'berhasil diedit')
  }



  deleteAdmin(adminId : string){
    this.adminsService.deleteAdmin(adminId);
    this.ionViewWillEnter();
    this.router.navigate(['/admins']);
    this.presentToast();
  }

  async presentAlert(adminId : string){
    const alert = await this.alertCtrl.create({
      header:'Hapus Kontak',
      message:'Apakah yaking ingin menghapus? Jika sudah dihapus, tidak bisa dikembalikan lagi.',
      buttons:[
        {
          text: 'Batal',
          role: 'cancel'
        },
        {
          text: 'Hapus',
          handler: () => this.deleteAdmin(adminId)
        }
      ]
    });
    await alert.present();
  }
  

  async presentToast(){
    const toast = await this.toastCtrl.create({
      message: 'Delete data completely',
      duration: 3000,
      position: 'bottom'
    });
    toast.present();
  }
}
