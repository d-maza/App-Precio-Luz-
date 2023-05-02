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
  bombilla : string = '💡'

  d = new Date();
  horas = this.d.getHours();
  minutos = this.d.getMinutes();
  horaActual = this.horas + ":" + this.minutos;

  datosFull2: any;
  preiosHoy: any[] = []
 
  newDay = this.data.getfechaActual();
  
  newColor='red'
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
      console.log('Precio máximo: '+ this.PriceMax);
      console.log('Precio mínimo: '+ this.PriceMin);
    });
  }


  toggleDarkMode() {
    let body = document.getElementById('body');
    (this.bombilla === '💡') ? this.bombilla = `` : this.bombilla = '💡';
    body?.classList.toggle('dark-mode');
  }
}

