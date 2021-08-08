import { Component } from '@angular/core';
import { Card } from '../card';
import { StorageService } from '../storage.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  cardCollection: Card[];
  constructor(private ss: StorageService) { }

  ionViewWillEnter() {
    this.cardCollection = this.ss.getCards()
  }

  removeCard(card: Card) {
    this.ss.deleteCard(card)
    this.cardCollection = this.ss.getCards()
  }
}
