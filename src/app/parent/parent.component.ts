import { Component } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [ChildComponent],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.scss'
})
export class ParentComponent {
  article = {
    "title": "aa",
    "content": "bb",
  }
  title = 'angular17-demo';
  
  getMessageFromChild(e:string) {
    alert(e);
  }
}
