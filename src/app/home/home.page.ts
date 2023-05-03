import { Component} from '@angular/core';
import { RefresherCustomEvent } from '@ionic/angular';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  datos: any;
  preciosHoy: any[] = []
  priceMin: number = 0
  priceMin1: number = 0
  priceMax: number = 0
  percioMedio: any
  image = 'https://energia.roams.es/images/post/es_ES_energy/1200x304/luz-precio-luz-horas.jpg'

  bombilla: string = '💡'
 
  d = new Date();
  horas = this.d.getHours();
  minutos = this.d.getMinutes();
  horaActual = this.horas + ":" + this.minutos;

  newDay = this.data.getfechaActual();
  

  constructor(private data: DataService) { }

  refresh(ev: any) {
    setTimeout(() => {
      (ev as RefresherCustomEvent).detail.complete();
    }, 3000);
  }

  ngOnInit() {
    this.getAll();
  }

  getAll(): void {
    this.data.getApi().subscribe((res: any) => {
      this.datos = res;
      for (let i: number = 0; i < 24; i++) {
        const element = this.datos.included[1].attributes.values[i].value;

        this.preciosHoy.push(element)
        this.priceMin = Math.min(...this.preciosHoy)
        this.priceMax = Math.max(...this.preciosHoy)
        this.percioMedio = this.preciosHoy.reduce((acc, cur) => {
          let result = (acc + cur / 24)
          return Math.round(result)
         }, 0);
      }
    });
  }


  toggleDarkMode() {
    let body = document.getElementById('body');
    (this.bombilla === '💡') ? this.bombilla = `` : this.bombilla = '💡';
    body?.classList.toggle('dark-mode');
  }

  horaCara() {

    for (let i = 0; i < this.preciosHoy.length; i++) {
      if (this.preciosHoy[i] == this.priceMax) {
        return i;
      }
    }
    return -1;
  }
  
  horaBarata() {

    for (let i = 0; i < this.preciosHoy.length; i++) {
      if (this.preciosHoy[i] == this.priceMin) {
        return i;
      }
    }
    return -1;
  }

  precioActual() {
   let i = this.horas;
   return this.preciosHoy[i]
  }


}
 
    
    

 
  



