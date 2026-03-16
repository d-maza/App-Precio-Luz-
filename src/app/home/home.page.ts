import { ChangeDetectionStrategy, Component, inject, OnInit} from '@angular/core';
import { RefresherCustomEvent } from '@ionic/angular';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomePage implements OnInit {
  readonly darkModeImage = 'assets/hero-bulb.svg';
  readonly lightModeImage = 'assets/hero-bulb-light.svg';

  datos: any;
  preciosHoy: number[] = []
  priceMin: number = 0
  priceMax: number = 0
  percioMedio: number = 0
  isDarkMode = false;

 
  d = new Date();
  horas = this.d.getHours();
  minutos = this.d.getMinutes();
  horaActual = this.horas + ":" + this.minutos;

  readonly data = inject(DataService);

  newDay = this.data.getfechaActual();



  constructor() { }

  get image(): string {
    return this.isDarkMode ? this.darkModeImage : this.lightModeImage;
  }

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
      const series = this.datos?.included ?? [];
      const hourlySeries = series.find((item: any) => (item?.attributes?.values?.length ?? 0) === 24);
      const fallbackSeries = series.find((item: any) => (item?.attributes?.values?.length ?? 0) > 0);
      const values = (hourlySeries ?? fallbackSeries)?.attributes?.values ?? [];

      this.preciosHoy = values
        .map((entry: any) => Number(entry?.value))
        .filter((value: number) => Number.isFinite(value));

      if (!this.preciosHoy.length) {
        this.priceMin = 0;
        this.priceMax = 0;
        this.percioMedio = 0;
        return;
      }

      this.priceMin = Math.min(...this.preciosHoy);
      this.priceMax = Math.max(...this.preciosHoy);
      const suma = this.preciosHoy.reduce((acc, cur) => acc + cur, 0);
      this.percioMedio = Math.round(suma / this.preciosHoy.length);
    });
  }

  toggleDarkMode(isDarkMode: boolean) {
    this.isDarkMode = isDarkMode;
  }

  horaCara() {
    return this.preciosHoy.indexOf(this.priceMax);
  }
  
  horaBarata() {
    return this.preciosHoy.indexOf(this.priceMin);
  }

  precioActual() {
   if (!this.preciosHoy.length) {
    return 0;
   }

   const i = Math.min(this.horas, this.preciosHoy.length - 1);
   return this.preciosHoy[i];
  }

}
 
    
    

 
  



