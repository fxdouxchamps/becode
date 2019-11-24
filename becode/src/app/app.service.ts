
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { EndpointsService } from './endpoints';


@Injectable({
  providedIn: 'root'
})
export class AppService {
  constructor(
    private http: HttpClient,
    private endpointsService: EndpointsService
  ) { }

  getNumbers(): Observable<any> {

    const url = `${this.endpointsService.endpoints.application}`;

    return this.http
      .get<any>(url, { params: {  } });
  }

}
