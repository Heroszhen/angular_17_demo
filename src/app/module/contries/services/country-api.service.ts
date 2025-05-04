import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ICountry } from '../country/country.component';

@Injectable({
  providedIn: 'root'
})
export class CountryApiService {
  //https://restcountries.com/v3.1/all?fields=name,capital,languages,maps,population,flags
  constructor(private readonly http: HttpClient) { }

  getCountries() {
    return this.http.get<ICountry[]>("https://restcountries.com/v3.1/all?fields=name,capital,languages,maps,population,flags");
  }
}
