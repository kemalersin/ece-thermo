import { Component, OnInit, ViewChild } from '@angular/core';
import { IonRouterOutlet, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  public searching: boolean = false;
  public connected: boolean = false;
  public onStomach: boolean = true;

  public temp: string = '36,7';

  public movement: number = 25;
  public tempNum: number = 36.7;

  public appPages = [
    { title: 'Cihaz', url: '/folder/inbox', icon: 'device' },
    { title: 'Geçmiş', url: '/folder/outbox', icon: 'history' },
    { title: 'Ayarlar', url: '/folder/favorites', icon: 'settings' },
    { title: 'Yardım', url: '/folder/archived', icon: 'help' },
    { title: 'Hesap', url: '/folder/trash', icon: 'profile' },
  ];

  @ViewChild('modal') modal!: ModalController;

  constructor(private routerOutlet: IonRouterOutlet) {}

  ngOnInit() {}

  ionViewDidEnter() {
    this.routerOutlet.swipeGesture = false;
  }

  ionViewWillLeave() {
    this.routerOutlet.swipeGesture = true;
  }

  search() {
    this.searching = true;

    setTimeout(() => (this.searching = false), 1500);
  }

  connect() {
    this.connected = true;
    this.modal.dismiss();

    setInterval(() => {
      const rnd: number = Math.floor(Math.random() * 10) + 1;
      const move: boolean = !!(rnd % 2);

      if (this.onStomach !== move) {
        this.movement++;
      }

      this.onStomach = move;
    }, 5000);

    setInterval(() => {
      const min: number = 36.7;
      const max: number = 37.4;

      this.tempNum = Math.random() < 0.5
      ? (1 - Math.random()) * (max - min) + min
      : Math.random() * (max - min) + min;

      this.temp =
        this.tempNum.toFixed(1).replace('.', ',');
    }, 3000);
  }
}
