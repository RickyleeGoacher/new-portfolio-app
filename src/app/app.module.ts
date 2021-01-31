import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BannerSliderComponent } from './components/banner-slider/banner-slider.component';

import { SwiperModule } from 'swiper/angular';
import { SkillsSliderComponent } from './components/skills-slider/skills-slider.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BannerSliderComponent,
    SkillsSliderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SwiperModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
