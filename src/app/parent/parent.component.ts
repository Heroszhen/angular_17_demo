import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [ChildComponent],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.scss'
})
export class ParentComponent implements AfterViewInit {
  @ViewChild(ChildComponent) child!: ChildComponent;

  constructor() {
    
  }

  ngAfterViewInit() {
    this.child.getRandomInt();console.log(this.child.age)
  }

  article = {
    "title": "aa",
    "content": "bb",
  }
  title = 'angular17-demo';

  sayHello(name:string) {
    alert(`Hello ${name}`);
  }
  
  getMessageFromChild(e:string) {
    alert(e);
  }
}
