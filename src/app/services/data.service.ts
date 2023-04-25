import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Message } from 'src/modules/Message';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  private uriNow = 'https://api.preciodelaluz.org/v1/prices/now?zone=PCB';
  private uriAvg = 'https://api.preciodelaluz.org/v1/prices/avg?zone=PCB';
  private uriAllZone = 'https://api.preciodelaluz.org/v1/prices/all?zone=PCB';
  private uriPriceMax = 'https://api.preciodelaluz.org/v1/prices/max?zone=PCB';
  private uriPriceMin = 'https://api.preciodelaluz.org/v1/prices/min?zone=PCB';
  private uriHappyHour = 'https://api.preciodelaluz.org/v1/prices/cheapests?zone=PCB&n=3';

  constructor(
   private http: HttpClient
  ) { }


  public getNow(): Observable <Message[]> {
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json', 
        'Access-Control-Allow-Origin': '*',
    }),
    };
    return this.http.get<Message[]>(this.uriNow, options);

  }
  
  public getAvg(): Observable <Message[]> {
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json', 
        'Access-Control-Allow-Origin': '*',
    }),
    };
    return this.http.get<Message[]>(this.uriAvg, options);

  }
  
  public getAllZone(): Observable <Message[]> {
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json', 
        'Access-Control-Allow-Origin': '*',
    }),
    };
    return this.http.get<Message[]>(this.uriAllZone, options);

  }
  
  public getPriceMax(): Observable <Message[]> {
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json', 
        'Access-Control-Allow-Origin': '*',
    }),
    };
    return this.http.get<Message[]>(this.uriPriceMax, options);

  }
  public getPriceMin(): Observable <Message[]> {
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json', 
        'Access-Control-Allow-Origin': '*',
    }),
    };
    return this.http.get<Message[]>(this.uriPriceMin, options);

  }
  public getHappyHour(): Observable <Message[]> {
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json', 
        'Access-Control-Allow-Origin': '*',
    }),
    };
    return this.http.get<Message[]>(this.uriHappyHour, options);

    }

}
