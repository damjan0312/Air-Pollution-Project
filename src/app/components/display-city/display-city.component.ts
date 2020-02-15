import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pollution } from 'src/app/models/pollution.model';
import { searchService } from 'src/app/services/searchService.service';

@Component({
  selector: 'app-display-city',
  templateUrl: './display-city.component.html',
  styleUrls: ['./display-city.component.scss']
})
export class DisplayCityComponent implements OnInit {

  timestamps: Pollution[];
  //pollution: Pollution;
  cityName: string;
  //showComponent: boolean = false;


  @Input() pollution: Pollution;
  @Input() check: boolean;

  constructor(private http: HttpClient, private service: searchService) { }



  ngOnInit() {
    // this.pollution = this.service.newPollution;
    console.log("OVO JE POLLUTION", this.pollution, this.service.newPollution)

  }
  sendRequest() {
    console.log(this.pollution.cityId);
    this.service.getAllTimeStamps(this.pollution.cityId).subscribe(res => {
      this.timestamps = res as unknown as Pollution[];
      console.log("ovo je timestamps", this.timestamps)
      this.service.showComponent = true;
    });


  }

  filterNames(id: string) {
    let name = this.service.Cities.filter(item => {
      if (item.id === id)
        return item;
    }).map(item => {
      return item.city;
    })
    return name;
  }

  filterStates(id: string) {
    let name = this.service.States.filter(item => {
      if (item.id === id)
        return item;
    }).map(item => {
      return item.state;
    })
    return name;
  }

}
