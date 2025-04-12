import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserComponent } from './user/user.component';
import { ArticleComponent } from './article/article.component';

@NgModule({
  declarations: [
    UserComponent,
    ArticleComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class FormModule { }
