import { Injectable } from '@angular/core';
import { SPECIALTYS } from '../data/specialty.json';
import { Specialty } from '../entity/specialty';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';


@Injectable()
export class SpecialtysService {

  constructor() { }

  getSpecialtys(): Observable<Specialty[]> {
    return of(SPECIALTYS);
    //return this.http.get<Specialty[]>(this.urlEndPoint + '/doctor/1/1');
  }
}
