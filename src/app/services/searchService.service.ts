import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pollution } from '../models/pollution.model';
import { City } from '../models/city.model';
import { State } from '../models/state.model';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { timestamp } from 'rxjs/operators';

@Injectable({
    providedIn: 'root',
})


export class searchService {
    private URL = 'http://localhost:54810/api';

    public Cities: City[];
    public States: State[];
    public newPollution: Pollution;
    public check: boolean = false;
    public checkStatesAndCities: boolean = false;
    public showComponent: boolean = false;

    constructor(private http: HttpClient) { }

    getAllCities(): void {
        this.http.get<City>(`${this.URL}/cities`).subscribe(res => {
            this.Cities = res as unknown as City[]

        })

    }
    getAllStates(): void {
        this.http.get<State>(`${this.URL}/states`).subscribe(res => {
            this.States = res as unknown as State[]
            this.checkStatesAndCities = true;
        })

    }

    // --------------------------------------

    getDetailsAboutCity(stateId: string, cityId: string)
        : Observable<Pollution> {

        const options = {
            header: new HttpHeaders({
                "Content-Type": "application/json",
                Accept: "application/json",
                "Access-Control-Allow-Headers": "Content-Type"
            }),
            params: {
                stateId: '' + stateId,
                cityId: '' + cityId
            }
        }

        return this.http.get<Pollution>(`${this.URL}/pollution`, options);
    }

    get5MostPolluted(): Observable<Pollution[]> {
        return this.http.get<Pollution[]>(`${this.URL}/mostPolluted`);
    }


    getAllTimeStamps(cityID: string): Observable<Pollution[]> {

        const options = {
            header: new HttpHeaders({
                "Content-Type": "application/json",
                Accept: "application/json",
                "Access-Control-Allow-Headers": "Content-Type"
            }),
            params: {
                cityId: '' + cityID
            }
        }
        return this.http.get<Pollution[]>(`${this.URL}/history`, options);
    }

    deleteTimestamp(id: string): void {
        console.log("AJDEEEEE", id);
        const options = {
            header: new HttpHeaders({
                "Content-Type": "application/json",
                Accept: "application/json",
                "Access-Control-Allow-Headers": "Content-Type"
            }),
            params: {
                Id: '' + id
            }
        }
        this.http.delete(`${this.URL}/deleteHistory`, options).subscribe(res => {
            console.log(res);
        });
    }

    filterNames(id: string) {
        let name = this.Cities.filter(item => {
            if (item.id === id)
                return item;
        }).map(item => {
            return item.city;
        })
        return name;
    }

    filterStates(id: string) {
        let name = this.States.filter(item => {
            if (item.id === id)
                return item;
        }).map(item => {
            return item.state;
        })
        return name;
    }

    getCityId(name: string) {
        let id: string = this.Cities.filter(item => {
            if (item.city === name)
                return item;
        }).map(item => {
            return item.id;
        })[0]
        return id;
    }

    getStateId(name: string): string {
        console.log(this.States,"testnovi",this.Cities)
        let id: string = this.Cities.filter(item => {
            if (item.city === name)
                return item;
        }).map(item => {
            return item.stateId;
        })[0]
        return id;
    }



    getDataFromApi(cityId: string, stateId: string) {

        

        let URL_API = `http://api.airvisual.com/v2/city?city=${this.filterNames(cityId)}&state=${this.filterStates(stateId)}&country=Serbia&key=02b8ab70-76d2-4836-ab02-abf4fb94a5f4`;
        this.http.get(URL_API).subscribe(res => {
            let p: Pollution = res["data"] as Pollution;
            // console.log("DATA FROM API ", res["data"], p);
            this.newPollution = {
                cityId: this.getCityId(res["data"]["city"]),
                stateId: this.getStateId(res["data"]["city"]),
                current: {
                    weather: {
                        timestamp: res["data"]["current"]["weather"]["ts"],
                        temperature: res["data"]["current"]["weather"]["tp"],
                        pressure: res["data"]["current"]["weather"]["pr"],
                        humidity: res["data"]["current"]["weather"]["hu"],
                    },
                    pollution: {
                        timestamp: res["data"]["current"]["pollution"]["ts"],
                        aqius: parseInt(res["data"]["current"]["pollution"]["aqius"])
                    }

                }
            }
            this.check=true;
            console.log(this.newPollution,"testttttttttttt");
            this.postDataFromApi(this.newPollution);
        });
       
    }

    postDataFromApi(obj: Pollution): void {
        this.http.post<Pollution>(`${this.URL}/add`, obj).subscribe(res => {
            console.log(res);
        });
    }
}