import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { DatePipe, NgClass, NgFor, NgIf } from '@angular/common';

interface IUser {
  id: number,
  name: string,
  roles: string[],
  birthday: string|null
}

@Component({
  selector: 'app-directive',
  standalone: true,
  imports: [NgFor],
  templateUrl: './directive.component.html',
  styleUrl: './directive.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class DirectiveComponent {
  users:Array<IUser> = [
    {id:1, name: "aaa", roles: ['ROLE_USER'], birthday: null},
    {id:2, name: "bb", roles: ['ROLE_USER', 'ROLE_ADMIN'], birthday: '1999-01-01'},
    {id:2, name: "cc", roles: ['ROLE_USER'], birthday: '1000-01-01'},
  ];
  isGood = true;
}
