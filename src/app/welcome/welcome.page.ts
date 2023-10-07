import { Component, OnInit } from '@angular/core';
import { IonicSlides } from '@ionic/angular';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
})
export class WelcomePage implements OnInit {
  activeIndex: number = 0;
  swiperModules = [IonicSlides];

  constructor() { }

  ngOnInit() {
  }

  onSlideChange(event: any) {
    this.activeIndex = event.detail[0].activeIndex;
  }

  isActive(index: number): boolean {
    return this.activeIndex === index;
  }

}
