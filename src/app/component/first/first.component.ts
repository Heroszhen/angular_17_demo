import { Component, computed, EventEmitter, Input, Output, Signal, signal, WritableSignal } from '@angular/core';
import { CommonModule } from '@angular/common';


type UserType = {
  readonly id: number;
  name: string;
  isActive: boolean;
  additionalInfo: string;
  status?: 'active' | 'inactive';
};

@Component({
  selector: 'app-first',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './first.component.html',
  styleUrl: './first.component.scss'
})
export class FirstComponent {
  age = 10;
  users: UserType[] = [
    { id: 1, name: 'Alice', isActive: true, additionalInfo: 'Others Infos', status: 'active' },
    { id: 2, name: 'Bob', isActive: false, additionalInfo: 'Nothing' },
    { id: 3, name: 'Charlie', isActive: true, additionalInfo: 'Nothing' },
    { id: 3, name: 'Charlie', isActive: true, additionalInfo: 'Nothing' }
  ];

  firstname:WritableSignal<string> = signal('zhen');
  fullname: Signal<string> = computed(() => "HERO " + this.firstname());

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
