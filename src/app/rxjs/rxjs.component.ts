import { Component, OnDestroy, OnInit,  } from '@angular/core';
import data from '../service/data.json';
import { filter, map, Subject } from 'rxjs';

import { IUser } from '../service/interfaces';

@Component({
  selector: 'app-rxjs',
  standalone: true,
  imports: [],
  templateUrl: './rxjs.component.html',
  styleUrl: './rxjs.component.scss'
})
export class RxjsComponent implements OnInit, OnDestroy{
  subject$ = new Subject<Array<IUser>>();

  constructor() {
    console.log(data.users)
  }

  ngOnInit(): void {

    this.subject$
      .pipe(
        map(users => users.map(({ name, ...rest }) => rest))
      )
      .pipe(
        map(users => users.filter(user => user.id < 4))
      )
      .subscribe({
        next: (data) => {
          console.log(data)
        }
      });
    this.subject$.next(data.users);
  }

  ngOnDestroy(): void {
    this.subject$.unsubscribe();
  }
}
