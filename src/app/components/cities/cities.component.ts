import { Component, OnInit } from '@angular/core';
import { City } from '../../models/city.model';
import { Country } from '../../models/country.model';
import { HttpClient } from '@angular/common/http';
import { map } from "rxjs/operators"

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.scss']
})
export class CitiesComponent implements OnInit {

  constructor(private http: HttpClient) { }

  cityBox: Array<City> = [];
  countryBox: Array<Country> = [];

  ngOnInit() {
    this.http.get<Country[]>("http://api.airvisual.com/v2/countries?key=02b8ab70-76d2-4836-ab02-abf4fb94a5f4").subscribe(response => {
      map(({ status, data }) => {
        console.log(data);
      })
      console.log(this.countryBox);

    });

  }

}
