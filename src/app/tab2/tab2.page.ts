import { Component } from '@angular/core';
import { Card } from '../card';
import { CardsService } from '../cards.service';
import { StorageService } from '../storage.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  name: string;
  constructor(private cs: CardsService, private ss: StorageService) { }

  search() {
    this.cs.getCardsByName(this.name)
  }

  addCardToCollection(card: Card) {
    this.ss.addCard(card.id, card)
  }
}
