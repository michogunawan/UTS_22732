import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
import { Admin } from '../admin';
import { AdminsService } from '../admins.service';

@Component({
  selector: 'app-add-admin',
  templateUrl: './add-admin.page.html',
  styleUrls: ['./add-admin.page.scss'],
})
export class AddAdminPage implements OnInit {
  tambahAdmin: FormGroup;
  admin: Admin[];
  lastId: string = null;
  tempId: number;
  tipe: string = null;
  constructor(
    private router: Router,
    private barangService: AdminsService,
    private toastController: ToastController,
    private alertController: AlertController
  ) { }

  ngOnInit() {
    {
      this.tempId = this.barangService.getAllAdmins().length;
      this.tambahAdmin = new FormGroup({
        
        image: new FormControl(null, {
          updateOn: 'blur',
          validators: [Validators.required],
        }),
        type: new FormControl(null, {
          updateOn: 'change',
          validators: [Validators.required],
        }),
        merk: new FormControl(null, {
          updateOn: 'blur',
          validators: [Validators.required],
        }),
        model: new FormControl(null, {
          updateOn: 'blur',
          validators: [Validators.required],
        }),
        price: new FormControl(null, {
          updateOn: 'blur',
          validators: [Validators.required],
        }),
        stock: new FormControl(null, {
          updateOn: 'blur',
          validators: [Validators.required],
        }),
        baseClock: new FormControl(null, {
          updateOn: 'change',
        }),
        boostClock: new FormControl(null, {
          updateOn: 'change',
        }),
        core: new FormControl(null, {
          updateOn: 'change',
        }),
        thread: new FormControl(null, {
          updateOn: 'change',
        }),
        speed: new FormControl(null, {
          updateOn: 'change',
        }),
        size: new FormControl(null, {
          updateOn: 'change',
        }),
        chipset: new FormControl(null, {
          updateOn: 'change',
        }),
        compatible: new FormControl(null, {
          updateOn: 'change',
        }),
      });
      console.log(this.lastId)
    }
  }
  async tambah() {
    const alert = await this.alertController.create({
      header: 'Tambah barang baru',
      message: 'Apakah anda yakin ingin menambahak barang baru?',
      buttons: [
        {
          text: 'Tidak',
          role: 'cancel',
        },
        {
          text: 'Ya, Tambahkan',
          handler: () => this.addData()
        }
      ]
    });

    await alert.present();
  }

  ionViewWillEnter(){
    this.admin = this.barangService.getAllAdmins();
  }

  addData(){
    this.barangService.addAdmin(
      this.tempId,
      this.tambahAdmin.value,
      this.lastId,
      );
    this.router.navigate(['/admins']);
    console.log(this.tambahAdmin.value);
    this.presentToast();
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Barang berhasil ditambahkan',
      color: "primary",
      duration: 2500
    });
    toast.present();
  }

}
