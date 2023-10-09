import { Component, OnInit } from '@angular/core';
import { IonRouterOutlet } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  public searching: boolean = false;

  public appPages = [
    { title: 'Cihaz', url: '/folder/inbox', icon: 'device' },
    { title: 'Geçmiş', url: '/folder/outbox', icon: 'history' },
    { title: 'Ayarlar', url: '/folder/favorites', icon: 'settings' },
    { title: 'Yardım', url: '/folder/archived', icon: 'help' },
    { title: 'Hesap', url: '/folder/trash', icon: 'profile' },
  ];

  constructor(private routerOutlet: IonRouterOutlet) {
  }

  ngOnInit() {    
  }

  ionViewDidEnter() {
    this.routerOutlet.swipeGesture = false;
  }

  ionViewWillLeave() {
    this.routerOutlet.swipeGesture = true;
  }

  search() {
    this.searching = true;

    setTimeout(() => this.searching = false, 1500);
  }

}
