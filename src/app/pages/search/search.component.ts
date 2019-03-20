import { Component, OnInit } from '@angular/core';

/*import entities*/
import { Doctor } from '../../entity/doctor';
import { Specialty } from '../../entity/specialty';
import { City } from '../../entity/city';

import { SearchService } from '../../services/search.service';
import { SpecialtysService } from '../../services/specialtys.service';
import { CitiesService } from '../../services/cities.service';



@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
})
export class SearchComponent implements OnInit {

  doctors: Doctor[];
  specialtys: Specialty[];
  cities: City[];

  constructor( private _searchService: SearchService,
                private _specialtysService: SpecialtysService,
                private _citiesService: CitiesService) { }

  ngOnInit() {
    this._specialtysService.getSpecialtys().subscribe(
      specialtys => this.specialtys = specialtys
    );

    this._citiesService.getCities().subscribe(
      cities => this.cities = cities
    );

    this._searchService.getDoctors().subscribe(
      doctors => this.doctors = doctors
    );
    console.log(this.doctors);
  }

  buttonSearch(){

  }



}
