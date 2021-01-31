import { Component, OnInit } from '@angular/core';
import SwiperCore, {
  Navigation,
  Pagination,
  A11y,
} from 'swiper/core';

SwiperCore.use([Navigation, Pagination, A11y]);

@Component({
  selector: 'app-skills-slider',
  templateUrl: './skills-slider.component.html',
  styleUrls: ['./skills-slider.component.less']
})
export class SkillsSliderComponent implements OnInit {

  constructor() { }

  onSwiper(swiper: any) {
    console.log(swiper);
  }
  onSlideChange() {
    console.log('slide change');
  }

  ngOnInit(): void {
  }

}
