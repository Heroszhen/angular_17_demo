import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Event, NavigationEnd, Router, RouterOutlet } from '@angular/router';

import { FirstComponent } from './component/first/first.component';
import { NavComponent } from './component/nav/nav.component';
import { filter, map } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FirstComponent, NavComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppComponent {
  article = {
    "title": "aa",
    "content": "bb",
  }
  title = 'angular17-demo';

  constructor(
    private readonly router: Router
  ) {
    this.routerListener();
  }

  getMessageFromChild(e:string) {
    alert(e);
  }

  routerListener() {
    this.router.events.pipe(
      filter((event:Event): event is NavigationEnd => event instanceof NavigationEnd),
      map((event: NavigationEnd) => event.url))
      .subscribe({
        next: (data:string)=>{
          console.log(data)
        }
    });
  }

}
