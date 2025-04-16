import { Component, } from '@angular/core';
import { User } from '../../model/user';
import { PasswordValidatorDirective } from '../../validators/password-validator.directive';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss',
  standalone: true,
  imports: [PasswordValidatorDirective, FormsModule, CommonModule]
})
export class UserComponent {
  userM: User = new User();
  slogan:string = "abc";
  
  createUser(e:SubmitEvent) {
    console.log(this.userM, e)
  }
}
