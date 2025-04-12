import { Component, EventEmitter, Input, Output } from '@angular/core';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [JsonPipe],
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss'
})
export class ChildComponent {
  age = 10;
  @Input() article!:object;
  @Input() title!:string;
  @Output() messageEvent = new EventEmitter<string>();
  getRandomInt(): void {
    this.age = Math.floor(Math.random() * 30);
  }

  sendMessageToFather(e:KeyboardEvent) {
    if (e.code === "Enter") {
      this.messageEvent.emit((e.target as HTMLInputElement)?.value)
    }
  }
}
