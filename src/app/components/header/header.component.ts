import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  scrollToSection(id: string) {
    const el = document.querySelector(`#${id}`) as HTMLElement;
    el.scrollIntoView();
  }

  ngOnInit(): void {
  	let prevOffset = window.pageYOffset;
  	window.addEventListener('scroll', function() {
  		const navElement = document.querySelector('#nav') as HTMLElement;
  		if(window.pageYOffset > prevOffset) {
  			navElement.classList.add('hide');
  		} else {
  			navElement.classList.remove('hide');
  		}
  		prevOffset = window.pageYOffset;
  	});
  }

}
