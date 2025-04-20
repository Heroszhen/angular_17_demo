import { Component, } from '@angular/core';
import { User } from '../../model/user';
import { PasswordValidatorDirective } from '../../validators/password-validator.directive';
import { FormsModule, ReactiveFormsModule, FormControl, FormGroup, Validators, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss',
  standalone: true,
  imports: [PasswordValidatorDirective, FormsModule, CommonModule, ReactiveFormsModule]
})
export class UserComponent {
  userM: User = new User();
  slogan:string = "abc";
  
  userM2 = new User();
  formGroups = new FormGroup({
    civility2: new FormControl(this.userM2.civility),
    lastname2: new FormControl(this.userM2.lastname),
    firstname2: new FormControl(this.userM2.firstname, [Validators.required, Validators.minLength(3), Validators.pattern('[a-zA-Z]*')]),
    email2: new FormControl(this.userM2.email, [Validators.required, Validators.email]),
    password2: new FormControl(this.userM2.password, [Validators.required]),
    roles2: new FormControl(this.userM2.roles),
    activated2: new FormControl(this.userM2.activated)
  });

  createUser(e:SubmitEvent) {
    console.log(this.userM, e)
  }

  createUserByReativeForm(e:SubmitEvent) {

  }
}
