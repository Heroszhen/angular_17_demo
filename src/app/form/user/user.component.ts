import { Component } from '@angular/core';
import { User } from '../../model/user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {
  userM: User = new User();
  slogan:string = "abc";
  createUser(e:SubmitEvent) {
    console.log(this.userM, e)
  }
}
