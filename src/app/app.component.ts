import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { register } from 'swiper/element/bundle';

register();

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private router: Router) {
    /*if (!localStorage.getItem('welcome')) {
      localStorage.setItem('welcome', 'true');

      this.router.navigateByUrl('/welcome');
    }*/
  }
}
