import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { SearchService } from '../../services/search.service';
import { Doctor } from '../../entity/doctor';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css']
})
export class DoctorComponent implements OnInit {

  private doctor_id: number;
  private doctors: Doctor[];
  private doctor: Doctor;

  constructor( private rutaActiva: ActivatedRoute,
               private _searchService: SearchService) { }

  ngOnInit() {
    this.doctor_id = this.rutaActiva.snapshot.params.id;

    this.rutaActiva.params.subscribe(
      (params: Params) => {
        this.doctor_id = params.id;
      }
    );

    this._searchService.getDoctors().subscribe(
      doctors => this.doctors = doctors
    );

    this.doctor = this.doctors.find(x => x.id === this.doctor_id);

    console.log(this.doctor);
    console.log(this.doctor_id);
  }



}
