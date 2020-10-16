import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
import { Admin } from 'src/app/admins/admin';
import { AdminsService } from 'src/app/admins/admins.service';

@Component({
  selector: 'app-home-detail',
  templateUrl: './home-detail.page.html',
  styleUrls: ['./home-detail.page.scss'],
})
export class HomeDetailPage implements OnInit {
  loadedAdmin: Admin;
  constructor(
    private activatedRoute: ActivatedRoute,
    private adminsService: AdminsService,
    private router: Router,
    private alertCtrl: AlertController,
    private toastCtrl: ToastController
  ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if (!paramMap.has('adminId')) { return; }
      const adminId = paramMap.get('adminId');
      this.loadedAdmin = this.adminsService.getAdmins(adminId);
    });
  }
}
