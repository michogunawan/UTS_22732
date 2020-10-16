import { Injectable } from '@angular/core';
import { Admin } from './admin';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AdminsService {
  private admins: Admin[] = [
    {
    id: 'item1',
    type: 'CPU',
    image: 'https://images-na.ssl-images-amazon.com/images/I/61aMmen0cFL._AC_SL1099_.jpg',
    merk: 'intel',
    model: 'Core i9-10900K',
    baseClock: '3.7 GHz',
    boostClock: '5.3 GHz',
    core: '10',
    thread: '20',
    size: '',
    speed: '',
    chipset: '',
    compatible: '',
    price: 'Rp. 2.406.5054,00',
    stock: '20',
    },
    {
    id: 'item2',
    type: 'GPU',
    image: 'https://images-na.ssl-images-amazon.com/images/I/810e4YwzisL._AC_SL1500_.jpg',
    merk: 'Gigabyte',
    model: 'RX 580',
    baseClock: '',
    boostClock: '',
    core: '',
    thread: '',
    size: '8 GB',
    speed: '8000 MHz',
    chipset: 'AMD',
    compatible: '',
    price: '2,800,000,00',
    stock: '15',
    },
    {
      id: 'item3',
      type: 'Motherboard',
      image: 'https://images-na.ssl-images-amazon.com/images/I/71ejpWvp38L._AC_SL1200_.jpg',
      merk: 'ASRock',
      model: 'B450M PRO4 AM4',
      baseClock: '',
      boostClock: '',
      core: '',
      thread: '',
      size: '',
      speed: '',
      chipset: 'AMD Promontory',
      compatible: 'AMD Ryzen 3 - 7, Intel Core i5-i9',
      price: '1,350,000,00',
      stock: '17',
      },
      {
        id: 'item4',
        type: 'RAM',
        image: 'https://images-na.ssl-images-amazon.com/images/I/51kHiPeTSmL._AC_SL1000_.jpg',
        merk: 'Corsair',
        model: 'Vengeance LPX',
        baseClock: '',
        boostClock: '',
        core: '',
        thread: '',
        size: '2x8GB',
        speed: '3200 MHz',
        chipset: '',
        compatible: '',
        price: '770,000,00',
        stock: '22',
        },
        {
          id: 'item0',
          type: 'RAM',
          image: 'https://images-na.ssl-images-amazon.com/images/I/71Kkm5nIRKL._AC_SL1500_.jpg',
          merk: 'Corsair',
          model: 'Vengeance RGB PRO',
          baseClock: '',
          boostClock: '',
          core: '',
          thread: '',
          size: '2x8GB',
          speed: '3200 MHz',
          chipset: '',
          compatible: '',
          price: '999,000,00',
          stock: '0',
          }
  ];
  constructor() { }

  getAllAdmins(){
    return [...this.admins];
  }

  getAdmins(adminId: string){
    return {...this.admins.find(admins=>{
      return admins.id === adminId;
    })};
  }

  deleteAdmin(adminId: string){
    this.admins = this.admins.filter(admin => {
      return admin.id !== adminId;
    });
  }

  addAdmin(
    tempId: number,
    admin: Admin,
    lastId: string){
    length = this.admins.length;
    console.log(admin);
    lastId = 'item'+tempId;
    this.admins.push({
      id: lastId,      
      type: admin.type,
      image: admin.image,
      merk: admin.merk,
      model: admin.model,
      baseClock: admin.baseClock,
      boostClock: admin.boostClock,
      core: admin.core,
      thread: admin.thread,
      size: admin.size,
      speed: admin.speed,
      chipset: admin.chipset,
      compatible: admin.compatible,
      price: admin.price,
      stock: admin.stock
    });
  }

  editAdmin(admin: Admin){
    length = this.admins.length;
    console.log(admin);
    for(var i = 0; i < length; i++){
      if(this.admins[i].id == admin.id){
        console.log("check : "+ this.admins[i].id + "=" + admin.id);
        this.admins[i].type = admin.type;
        this.admins[i].image = admin.image;
        this.admins[i].merk = admin.merk;
        this.admins[i].model = admin.model;
        this.admins[i].baseClock = admin.baseClock;
        this.admins[i].boostClock = admin.boostClock;
        this.admins[i].core = admin.core;
        this.admins[i].thread = admin.thread;
        this.admins[i].size = admin.size;
        this.admins[i].speed = admin.speed;
        this.admins[i].chipset = admin.chipset;
        this.admins[i].compatible = admin.compatible;
        this.admins[i].price = admin.price;
        this.admins[i].stock = admin.stock;
      }
    }
  }
}
