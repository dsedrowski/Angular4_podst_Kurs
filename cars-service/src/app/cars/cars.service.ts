import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Car } from './models/car';
import { Http, HttpModule } from '@angular/http';
import "rxjs/add/operator/map";

@Injectable()
export class CarsService {
  private apiURL = "http://localhost:3000/api/cars";

  constructor(private http: Http) {}

  getCars(): Observable<Car[]> {
    return this.http.get(this.apiURL).map(res => res.json());
  }

  getCar(ID: number): Observable<Car> {
    return this.http.get(`${this.apiURL}/${ID}`).map(res => res.json());
  }
}
