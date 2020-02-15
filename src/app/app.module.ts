import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CitiesComponent } from './components/cities/cities.component';

import { MaterialModule } from './material';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DisplayCityComponent } from './components/display-city/display-city.component';
import { searchService } from './services/searchService.service';

import { CommonModule } from '@angular/common';
import { MostPollutedComponent } from './components/most-polluted/most-polluted.component';
import { AllTimeStampsComponent } from './components/all-time-stamps/all-time-stamps.component';

@NgModule({
  declarations: [
    AppComponent,
    CitiesComponent,
    DisplayCityComponent,
    MostPollutedComponent,
    AllTimeStampsComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule
  ],
  providers: [searchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
