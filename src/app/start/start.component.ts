import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-start',
  standalone: true,
  imports: [],
  templateUrl: './start.component.html',
  styleUrl: './start.component.scss'
})
export class StartComponent implements AfterViewInit{
  @ViewChild('divRef') divRef!: ElementRef<HTMLDivElement>;

  ngAfterViewInit () {
    console.log(this.divRef.nativeElement)
  }
}
