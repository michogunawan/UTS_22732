import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Admin } from '../admin';
import { AdminsService } from '../admins.service';

@Component({
  selector: 'app-edit-admin',
  templateUrl: './edit-admin.page.html',
  styleUrls: ['./edit-admin.page.scss'],
})
export class EditAdminPage implements OnInit {
  loadedAdmin: Admin;
  form: FormGroup;
  constructor(
    private activatedRoute: ActivatedRoute,
    private adminsService: AdminsService,
    private router: Router
  ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if (!paramMap.has('adminId')) { return; }
      const adminId = paramMap.get('adminId');
      this.loadedAdmin = this.adminsService.getAdmins(adminId);
    });
    var type = this.loadedAdmin.type;
    var image = this.loadedAdmin.image;
    var type = this.loadedAdmin.type;
    var image = this.loadedAdmin.image;
    var merk = this.loadedAdmin.merk;
    var model = this.loadedAdmin.model;
    var baseClock = this.loadedAdmin.baseClock;
    var boostClock = this.loadedAdmin.boostClock;
    var core = this.loadedAdmin.core;
    var thread = this.loadedAdmin.thread;
    var size = this.loadedAdmin.size;
    var speed = this.loadedAdmin.speed;
    var chipset = this.loadedAdmin.chipset;
    var compatible = this.loadedAdmin.compatible;
    var price = this.loadedAdmin.price;
    var stock = this.loadedAdmin.stock;

    this.form = new FormGroup({
      id: new FormControl(this.loadedAdmin.id, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      type: new FormControl(type, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      image: new FormControl(this.loadedAdmin.image, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      merk: new FormControl(merk, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      model: new FormControl(model, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      baseClock: new FormControl(baseClock, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      boostClock: new FormControl(boostClock, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      core: new FormControl(core, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      thread: new FormControl(thread, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      size: new FormControl(size, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      speed: new FormControl(speed, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      chipset: new FormControl(chipset, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      compatible: new FormControl(compatible, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      price: new FormControl(price, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      stock: new FormControl(stock, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      
    });
  }

  onSubmit(){
    // this.adminsService.editadmin(this.form.value);
    // this.router.navigate(['./admins']);
    console.log(this.form.value);
    this.adminsService.editAdmin(this.form.value);
    this.router.navigate(['./admins']);
  }

}
