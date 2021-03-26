import { Component, OnInit } from '@angular/core';
import SwiperCore, {
  Navigation,
  Pagination,
  A11y,
} from 'swiper/core';

SwiperCore.use([Navigation, Pagination, A11y]);

@Component({
  selector: 'app-banner-slider',
  templateUrl: './banner-slider.component.html',
  styleUrls: ['./banner-slider.component.less']
})
export class BannerSliderComponent implements OnInit {

  constructor() { 

  }

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
  }

}
