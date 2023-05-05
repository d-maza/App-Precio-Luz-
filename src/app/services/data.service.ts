import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
  
export class DataService {

  fecha = new Date();
  año = this.fecha.getFullYear() 
  mes = this.fecha.getMonth() + 1;
  dia = this.fecha.getDay();
  fechaActual: string = ''
  
private uri = `${environment.urlApi}/es/datos/mercados/precios-mercados-tiempo-real?start_date=${this.getfechaActual()}T00:00&end_date=${this.getfechaActual()}T23:59&time_trunc=hour`

  constructor(private http: HttpClient) {}

  public getApi(): Observable <any> {
    const options = {
      headers: new HttpHeaders({
        "Accept":" application/json",
        "Content-Type": "application/json",
        'Access-Control-Allow-Origin': '*',
    }),
    };
    return this.http.get<any>(this.uri, options);

  }
  getfechaActual():string {

    this.fechaActual = (this.año + '-' + this.mes + '-' + this.dia)
    return this.fechaActual; 
  }
  

}


