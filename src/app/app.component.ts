import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from "rxjs/operators"
import { pipe } from "rxjs"
import { CityService } from './services/cityService/cityService.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  constructor(private http: HttpClient,private cityService:CityService) { }

  ngOnInit(): void {
    this.cityService.getAllCountries();

  }
  title = 'air-pollution';

}
