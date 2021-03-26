import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.less']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  	window.addEventListener('scroll', function() {
  		const navElement = document.querySelector('#top-button') as HTMLElement;
  		console.log(window.pageYOffset)
  		if(window.pageYOffset < 550) {
  			navElement.classList.add('hide');
  		} else {
  			navElement.classList.remove('hide');
  		}
  	});
  }

  pageTop() {
  	window.scrollTo(0, 0);
  }

  }

