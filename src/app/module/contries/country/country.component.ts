import { Component, OnInit } from '@angular/core';
import { CountryApiService } from '../services/country-api.service';

export interface ICountry {
  flags: {
    png:string
  },
  name: {
    common: string,
    official: string
  },
  capital: string[],
  languages: {
    [code:string]: string
  },
  maps: {
    googleMaps: string,
    openStreetMaps: string
  },
  population: number
}

@Component({
  selector: 'app-country',
  standalone: false,
  templateUrl: './country.component.html',
  styleUrl: './country.component.scss'
})
export class CountryComponent implements OnInit {
  countries: ICountry[] = [];

  constructor(
    private readonly apiService: CountryApiService
  ) {

  }

  ngOnInit() {
    this.apiService.getCountries().subscribe({
      next: (data:ICountry[]) => {
        this.countries = data;console.log(this.countries)
      }
    })
  }
}
