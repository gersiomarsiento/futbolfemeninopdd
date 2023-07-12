import { Component, Input, OnInit } from '@angular/core';

interface carouselImage{
  imageSrc: string;
  imageAlt: string;
}

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit{
  @Input() images: carouselImage[] = []
  @Input() indicators = true;
  @Input() controls = true;
  @Input() autoSlide = false;
  @Input() slideInterval = 1000;

  selectedIndex = 0;
  
  ngOnInit():void{
    if(!this.autoSlide){ // <--- Remove the "!" to activate auto slide
      this.autoSlideImages()
    }

    window.addEventListener('scroll', () => {
      // document.body.style.setProperty('--scroll', window.pageYOffset / (document.body.offsetHeight - window.innerHeight));
      if(window.scrollY>200){
        console.log("h");
        document.querySelector('.carousel-container')?.classList.add("scale-in-hor-center");
      }
    }, false);
  }

  // Change slide every 3 sec
  autoSlideImages(): void {
    setInterval(()=>{
      this.onNextClick();
    }, this.slideInterval);
  }

  // sets index of image on dot/indicator click
  selectImage(index:number): void {
    this.selectedIndex = index;
  }

  onPrevClick():void{
    if(this.selectedIndex === 0 ){
      this.selectedIndex = this.images.length -1;
    } else {
      this.selectedIndex--
    }
  }
  onNextClick():void{
    if(this.selectedIndex === this.images.length -1 ){
      this.selectedIndex = 0;
    } else {
      this.selectedIndex++
    }
  }
}
