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
  PriceMin: Number = 0
  PriceMax: Number = 0
  datosHappyHour: Message[] = [];
  d = new Date();
  horas = this.d.getHours();
  minutos = this.d.getMinutes();
  horaActual = this.horas + ":" + this.minutos;
  dia = this.d.getDate();
  mes = this.d.getMonth() + 1;
  datosFull2: any;
  preiosHoy: any[] = []
 
  constructor(private data: DataService) { }

  refresh(ev: any) {
    setTimeout(() => {
      (ev as RefresherCustomEvent).detail.complete();
    }, 3000);
  }

  ngOnInit() {
    this.getApi();
  }

  getApi(): void {
    this.data.getApi().subscribe((res: any) => {
      this.datosFull2 = res;
      for (let i: number = 0; i < 24; i++) {
        const element = this.datosFull2.included[1].attributes.values[i].value;

        this.preiosHoy.push(element)
        this.PriceMin = Math.min(...this.preiosHoy)
        this.PriceMax = Math.max(...this.preiosHoy)
     
      }
      console.log(this.preiosHoy);
      console.log(this.PriceMax);
      console.log(this.PriceMin);
    });
  }
}

