import { Component, OnInit } from '@angular/core';
import { City } from '../../models/city.model';
import { State } from '../../models/state.model';
import { HttpClient } from '@angular/common/http';
import { map } from "rxjs/operators"
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { searchService } from 'src/app/services/searchService.service';
import { Pollution } from 'src/app/models/pollution.model';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.scss']
})
export class CitiesComponent implements OnInit {

  pollution: Pollution;

  searchForm: FormGroup;
  selectedState: string;
  selectedCity: string;

  showComponent: boolean = false;

  cities: City[];
  states: State[];

  check: boolean = false;

  constructor(private http: HttpClient, private builder: FormBuilder, private service: searchService) {

    this.searchForm = this.builder.group({
      states: ['', Validators.required],
      cities: ['', Validators.required]
    })
  }

  ngOnInit() {
    this.service.getAllCities();
    this.service.getAllStates();

  }

  search() {
    console.log(this.selectedState);
    console.log(this.selectedCity);

    this.service.showComponent = false;

    this.service.getDataFromApi(this.selectedCity, this.selectedState);

    this.service.getDetailsAboutCity(this.selectedState, this.selectedCity).subscribe(
      res => {
        this.pollution = res;
        this.check = true;
      }
    );



    if (this.showComponent === false)
      this.showComponent = !this.showComponent;
    console.log(this.showComponent);
  }

  filterCities($event) {
    this.cities = this.service.Cities.filter(item => {
      if (item.stateId == $event.value)
        return item;

    })
  }

}
