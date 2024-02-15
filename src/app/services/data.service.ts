import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
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
    return this.http.get<any>(this.uri).pipe(catchError(this.handleError));
  }

  getfechaActual(): string {
    return new Date().toISOString().slice(0, 10);;
  }

  private handleError(error: HttpErrorResponse) {
    console.error('melón mírate la url que te paso otra vez', error.error.message);
    return throwError( ()=> new Error(`Algo salió mal ${error.message}`));
  }

}


