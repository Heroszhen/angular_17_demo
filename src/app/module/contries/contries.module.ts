import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { CountryComponent } from './country/country.component';
import { CountryApiService } from './services/country-api.service';


@NgModule({
  declarations: [CountryComponent],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [CountryApiService],
  exports: [CountryComponent]
})
export class CountriesModule { }
