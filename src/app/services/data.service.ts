import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private uri = environment.uri


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
}
