import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { register } from 'swiper/element/bundle';

import { StatusBar } from '@capacitor/status-bar';
import { Platform } from '@ionic/angular';

register();

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private router: Router, private platform: Platform) {   
    this.init();

    /*if (!localStorage.getItem('welcome')) {
      localStorage.setItem('welcome', 'true');

      this.router.navigateByUrl('/welcome');
    }*/
  }

  private async init(): Promise<void> {
    await this.platform.ready();
    StatusBar.setOverlaysWebView({ overlay: true });
  }
}
