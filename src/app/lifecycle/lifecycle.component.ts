import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  standalone: true,
  imports: [],
  templateUrl: './lifecycle.component.html',
  styleUrl: './lifecycle.component.scss'
})
export class LifecycleComponent implements OnInit {
  constructor() {
    console.log("constructor")
  }

  ngOnInit(): void {
    console.log("ngOnInit")
  }
}
