import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  isNavbarVisible = false;
  isLogoMoved = false;
  isBar1Rotated = false;
  isBar2Invisible = false;
  isBar3Rotated = false;
  
  ngOnInit(): void {}
  showNav () {
    this.isNavbarVisible = !this.isNavbarVisible;
    this.isLogoMoved = !this.isLogoMoved;
    this.isBar1Rotated = !this.isBar1Rotated;
    this.isBar2Invisible = !this.isBar2Invisible;
    this.isBar3Rotated = !this.isBar3Rotated;
    document.body.classList.toggle("overflow-hidden")
  }
}


