import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gracias',
  templateUrl: './gracias.component.html',
  styleUrls: ['./gracias.component.css']
})
export class GraciasComponent {
  constructor(private router: Router) {}

  ngOnInit() {
    setTimeout(() => {
        this.router.navigate(['apoyanos']); //Go back to previous page 
    }, 7000);  //7s
  }
}
