import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
import { Admin } from '../admins/admin';
import { AdminsService } from '../admins/admins.service';

@Component({
  selector: 'app-homes',
  templateUrl: './homes.page.html',
  styleUrls: ['./homes.page.scss'],
})
export class HomesPage implements OnInit {
  admins: Admin[];
  cek: boolean;
  constructor(
    private adminService: AdminsService
  ) { }

  ngOnInit(){
    this.admins = this.adminService.getAllAdmins();
  }

  ionViewWillEnter(){
    this.admins = this.adminService.getAllAdmins();
  }

  toggleLayout(){
    this.cek = !this.cek;
  }

}
