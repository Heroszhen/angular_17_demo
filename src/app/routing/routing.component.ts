import { Component, inject, OnInit,  } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-routing',
  standalone: true,
  imports: [],
  templateUrl: './routing.component.html',
  styleUrl: './routing.component.scss'
})
export class RoutingComponent implements OnInit{
  private activatedRoute = inject(ActivatedRoute);
  private router = inject(Router);
  private id!:number;

  ngOnInit() {
    //this.router.navigate(['/routage', 22]);

    this.activatedRoute.params.subscribe(params=>{
      if (params['id'])this.id = parseInt(params['id']);
    });

    ///routage/55?q=55&title=abc
    this.activatedRoute.queryParams.subscribe(params => {
      //console.log(params['q'], params['title']);
    });

    //console.log(this.activatedRoute.snapshot.url)
  }
}
