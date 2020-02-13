import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from "rxjs/operators"
import { pipe } from "rxjs"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private http: HttpClient) { }

  ngOnInit(): void {


    // let countries = this.http.get<any>("http://api.airvisual.com/v2/countries?key=02b8ab70-76d2-4836-ab02-abf4fb94a5f4").subscribe(response => {
    //   console.log("OVAJ JE: ", response)
    //   return response
    // });
    // console.log(countries);
  }
  title = 'air-pollution';

}
