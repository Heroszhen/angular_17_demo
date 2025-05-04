import { Component } from '@angular/core';
import { CountriesModule } from '../contries/contries.module';

@Component({
  selector: 'app-module',
  standalone: true,
  imports: [CountriesModule],
  templateUrl: './module.component.html',
  styleUrl: './module.component.scss'
})
export class ModuleComponent {

}
