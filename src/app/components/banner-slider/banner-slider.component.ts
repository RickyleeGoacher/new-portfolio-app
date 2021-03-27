import { Component, OnInit } from '@angular/core';
import { SwiperOptions } from 'swiper';
import Swiper, { Autoplay} from 'swiper';
Swiper.use([Autoplay]);

@Component({
  selector: 'app-banner-slider',
  templateUrl: './banner-slider.component.html',
  styleUrls: ['./banner-slider.component.less']
})
export class BannerSliderComponent implements OnInit {

  constructor() { 

  }

  config: SwiperOptions = {
    parallax: true,
    autoHeight: true,
  };

  scrollToSection() {
    const el = document.querySelector('#projects') as HTMLElement;
    el.scrollIntoView();
  }

  onSwiper(swiper: any) {
    console.log(swiper);
  }
  onSlideChange() {
    console.log('slide change');
  }

  ngOnInit(): void {
    window.addEventListener('scroll', function()  {
      let scrolled  = window.pageYOffset;
      let speed = 2;
      const parallax = document.querySelector('#image') as HTMLElement;;
      var coords = '-' + (scrolled / speed) + "px";
      parallax.style.backgroundPosition = `center ${ coords }`;
    });
  }

}
