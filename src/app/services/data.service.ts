import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Message } from 'src/modules/Message';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private uriNow = environment.uriNow
  private uriAvg = environment.uriAvg;
  private uriAllZone = environment.uriAllZone;
  private uriPriceMax = environment.uriPriceMax;
  private uriPriceMin = environment.uriPriceMin;
  private uriHappyHour =environment.uriHappyHour;

  constructor(private http: HttpClient) {}


  public getNow(): Observable <Message[]> {
    const options = {
      headers: new HttpHeaders({
        // "Accept":" application/json",
        // "Content-Type": "application/json",
        // "Host": "api.preciodelaluz.org",
        'Access-Control-Allow-Origin': '*',
    }),
    };
    return this.http.get<Message[]>(this.uriNow, options);

  }

  public getAvg(): Observable <Message[]> {
    const options = {
      headers: new HttpHeaders({
        // "Accept":" application/json",
        // "Content-Type": "application/json",
        // "Host": "api.preciodelaluz.org",
        'Access-Control-Allow-Origin': '*',
    }),
    };
    return this.http.get<Message[]>(this.uriAvg, options);

  }

  public getAllZone(): Observable <Message[]> {
    const options = {
      headers: new HttpHeaders({
        // "Accept":" application/json",
        // "Content-Type": "application/json",
        // "Host": "api.preciodelaluz.org",
        'Access-Control-Allow-Origin': '*',
    }),
    };
    return this.http.get<Message[]>(this.uriAllZone, options);

  }

  public getPriceMax(): Observable <Message[]> {
    const options = {
      headers: new HttpHeaders({
        // "Accept":" application/json",
        // "Content-Type": "application/json",
        // "Host": "api.preciodelaluz.org",
        'Access-Control-Allow-Origin': '*',
    }),
    };
    return this.http.get<Message[]>(this.uriPriceMax, options);

  }
  public getPriceMin(): Observable <Message[]> {
    const options = {
      headers: new HttpHeaders({
        // "Accept":" application/json",
        // "Content-Type": "application/json",
        // "Host": "api.preciodelaluz.org",
        'Access-Control-Allow-Origin': '*',
    }),
    };
    return this.http.get<Message[]>(this.uriPriceMin, options);

  }
  public getHappyHour(): Observable <Message[]> {
    const options = {
      headers: new HttpHeaders({
        // "Accept":" application/json",
        // "Content-Type": "application/json",
        // "Host": "api.preciodelaluz.org",
        'Access-Control-Allow-Origin': '*',
    }),
    };
    return this.http.get<Message[]>(this.uriHappyHour, options);

  }

  public getAllZoneApi2(): Observable <any> {
    const options = {
      headers: new HttpHeaders({
        "Accept":" application/json",
        "Content-Type": "application/json",
        // "Host": "apidatos.ree.es",
        'Access-Control-Allow-Origin': '*',
    }),
    };
    return this.http.get<any>('https://apidatos.ree.es/es/datos/mercados/precios-mercados-tiempo-real?start_date=2023-04-30T00:00&end_date=2023-04-30T23:59&time_trunc=hour', options);

  }

}
