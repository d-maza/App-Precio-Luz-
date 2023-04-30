import { Component} from '@angular/core';
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
  datosHappyHour: Message[] = [];
  d = new Date();
  horas = this.d.getHours();
  minutos = this.d.getMinutes();
  horaActual = this.horas + ":" + this.minutos;
  dia = this.d.getDate();
  mes = this.d.getMonth() + 1;
  datosFull2: any ;
  



  constructor(private data: DataService) {}

  refresh(ev: any) {
    setTimeout(() => {
      (ev as RefresherCustomEvent).detail.complete();
    }, 3000);
  }

  ngOnInit() {
    // this.getNow();
    // this.getAllZone();
    // this.getAvg();
    // this.getPriceMin();
    // this.getPriceMax();
    this.getHappyHour();
    this.getAllZoneApi2();

  
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

  getAllZoneApi2() {
    this.data.getAllZoneApi2().subscribe((res) => {
      this.datosFull2 = (Object.values(res));
        console.log('🐙'+this.datosFull2);
    });
  }
  
}

