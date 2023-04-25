import { Component, inject } from '@angular/core';
import { RefresherCustomEvent } from '@ionic/angular';
import { DataService } from '../services/data.service';
import { Message } from 'src/modules/Message';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  datos: Message[] = [];
  datosFull: Message[] = [];
  datosAvg: Message[] = [];
  datosPriceMin:Message[]=[];
  datosPriceMax: Message[] = [];
  datosHappyHour: Message[]=[];
  private data = inject(DataService);
  constructor() {}

  refresh(ev: any) {
    setTimeout(() => {
      (ev as RefresherCustomEvent).detail.complete();
    }, 3000);
  }

  ngOnInit() {
    this.getNow();
    this.getAllZone();
    this.getAvg();
    this.getPriceMin();
    this.getPriceMax();
    this.getHappyHour();
  }


  getNow() {
    this.data.getNow().subscribe((res) => {
      this.datos = (Object.values(res));
    });
  }  

  getAvg() {
    this.data.getAvg().subscribe((res) => {
      this.datosAvg = (Object.values(res));
    });
  }

  getHappyHour() {
    this.data.getHappyHour().subscribe((res) => {
      this.datosHappyHour = (Object.values(res));
      console.log(this.datosHappyHour);
    });
  }

  getPriceMax():void {
    this.data.getPriceMax().subscribe((res) => {
      this.datosPriceMax = (Object.values(res));
      
    });
  }

  getPriceMin() {
    this.data.getPriceMin().subscribe((res) => {
      this.datosPriceMin = (Object.values(res));
    });
  }
  
  getAllZone() {
    this.data.getAllZone().subscribe((res) => {
      this.datosFull = (Object.values(res));
    });
  }

  
}

