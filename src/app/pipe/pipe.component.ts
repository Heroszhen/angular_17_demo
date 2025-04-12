import { Component } from '@angular/core';
import { DatePipe, JsonPipe } from '@angular/common';
import { SafePipe } from '../pipes/safe.pipe';

@Component({
  selector: 'app-pipe',
  standalone: true,
  imports: [DatePipe, JsonPipe, SafePipe],
  templateUrl: './pipe.component.html',
  styleUrl: './pipe.component.scss'
})
export class PipeComponent {
  myDate = "2001-12-19T03:01:55";
  users = [
    {id:1, name:"aaa"},
    {id:2, name:"bbb"},
  ];
  videoUrl = "https://www.youtube.com/embed/gQQvR4aelNw?si=LFs60vnYp8VcC1ob";
}
