import { Component, ElementRef, ViewChild, AfterViewInit, signal, computed } from '@angular/core';
@Component({
  selector: 'app-start',
  standalone: true,
  imports: [],
  templateUrl: './start.component.html',
  styleUrl: './start.component.scss'
})
export class StartComponent implements AfterViewInit{
  @ViewChild('divRef') divRef!: ElementRef<HTMLDivElement>;
  firstname = signal<string>('zhen');
  fullname = computed(() => "HERO " + this.firstname());

  ngAfterViewInit () {
    //console.log(this.divRef.nativeElement)
  }
}
