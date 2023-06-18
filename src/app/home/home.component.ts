import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent{
  
  images = [
    {
      imageSrc: "./assets/img/mae.jpg",
      imageAlt: "Maeva"
    },
    {
      imageSrc: "./assets/img/flor.jpg",
      imageAlt: "Maeva"
    },
    {
      imageSrc: "./assets/img/dani.jpg",
      imageAlt: "Maeva"
    },
  ]
}