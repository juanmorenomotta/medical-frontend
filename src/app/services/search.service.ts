import { Injectable } from '@angular/core';
import { DOCTORS } from '../data/doctors.json';
import { Doctor } from '../entity/doctor';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { HttpClient } from '@angular/common/http';
import { Configuration } from '../setting/configuration';


@Injectable()
export class SearchService {
  private urlEndPoint: String = Configuration.urlEndPoint;

  constructor(public http: HttpClient) { }

  getDoctors(): Observable<Doctor[]> {
    return of(DOCTORS);
    //return this.http.get<Doctor[]>(this.urlEndPoint + '/doctor/1/1');
  }

}
