import { Injectable } from '@angular/core';
import { CITIES } from '../data/city.json';
import { City } from '../entity/city';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class CitiesService {

  constructor() { }

  getCities(): Observable<City[]> {
    return of(CITIES);
    //return this.http.get<Specialty[]>(this.urlEndPoint + '/doctor/1/1');
  }
}
