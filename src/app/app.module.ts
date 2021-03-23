import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BannerSliderComponent } from './components/banner-slider/banner-slider.component';

import { SwiperModule } from 'swiper/angular';
import { SkillsSliderComponent } from './components/skills-slider/skills-slider.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { AboutMeComponent } from './components/about-me/about-me.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BannerSliderComponent,
    SkillsSliderComponent,
    ProjectsComponent,
    FooterComponent,
    ContactFormComponent,
    AboutMeComponent
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
