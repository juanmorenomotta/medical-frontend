import { Component, OnInit } from '@angular/core';
import { Doctor } from '../../entity/doctor';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
})
export class SearchComponent implements OnInit {

  doctors: Doctor[];

  constructor( private _searchService: SearchService) { }

  ngOnInit() {
    this._searchService.getDoctors().subscribe(
      doctors => this.doctors = doctors
    );
    console.log(this.doctors);
  }

}
