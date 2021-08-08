import { Component } from '@angular/core';
import { Card } from '../card';
import { CardsService } from '../cards.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  name: string;
  constructor(private cs: CardsService) { }

  search() {
    this.cs.getCardsByName(this.name)
  }
}
