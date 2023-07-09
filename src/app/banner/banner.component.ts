import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
  backgroundImage: SafeStyle;

  constructor(private route: ActivatedRoute, private sanitizer: DomSanitizer) {}
  
  ngOnInit() {
    this.route.url.subscribe((urlSegments) => {
      const currentRoute = urlSegments.length > 0 ? urlSegments[0].path : 'home';
      this.setBackgroundImage(currentRoute);
    });
  }

  
  setBackgroundImage(route: string) {
    let imageUrl: string;

    switch (route) { // Dynamically switch banner's background image

      case 'equipo':
        imageUrl = 'assets/img/carousel/10.webp';
        break;
      case 'liga':
        imageUrl = 'assets/img/vestuario.jpeg';
        break;
      case 'sumate':
        imageUrl = 'assets/img/carousel/19.webp';
        break;
      case 'contacto':
        imageUrl = 'assets/img/carousel/17.webp';
        break;
      case 'apoyanos':
        imageUrl = 'assets/img/carousel/7.webp';
        break;


      default:
        imageUrl = 'assets/img/ola.jpg';
        break;
    }

    this.backgroundImage = this.sanitizer.bypassSecurityTrustStyle(`url(${imageUrl})`);
  }
}
