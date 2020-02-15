import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})



export class CityService{

    //allCountries:Country[];

    public constructor(private http:HttpClient){}

    getAllCountries():void{
        this.http.get('http://api.airvisual.com/v2/countries?key=02b8ab70-76d2-4836-ab02-abf4fb94a5f4').subscribe(res=>{
            console.log(res["data"]);
        })
    }


}