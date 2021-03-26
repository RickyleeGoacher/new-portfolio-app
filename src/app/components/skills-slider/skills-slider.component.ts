import { Component, OnInit } from '@angular/core';
import { SwiperOptions } from 'swiper';
import Swiper, { Autoplay} from 'swiper';
Swiper.use([Autoplay]);

@Component({
  selector: 'app-skills-slider',
  templateUrl: './skills-slider.component.html',
  styleUrls: ['./skills-slider.component.less']
})

export class SkillsSliderComponent implements OnInit {

  constructor() { } 

  ngOnInit(): void {
  }

  config: SwiperOptions = {
    pagination: { el: '.swiper-pagination', clickable: true },
    autoHeight: true,
    allowTouchMove: true,
    breakpoints: {
      1024: {
        slidesPerView: 5
      },
      500: {
        slidesPerView: 3
      },
      400: {
        slidesPerView: 2
      },
      300: {
        slidesPerView: 2
      }
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    autoplay: {
      delay: 2000,
      disableOnInteraction: true
    },
    loop: true,
    slideToClickedSlide: true 
  };

}
