import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Card } from './card';

@Injectable({
  providedIn: 'root'
})
export class CardsService {
  private baseURL = "https://api.magicthegathering.io/v1/"
  cards: Card[];
  constructor(private http: HttpClient) { this.cards = [] }

  getCardsByName(param: string) {
    this.http.get<{ "cards": Card[] }>(`${this.baseURL}cards?name=` + param)
      .subscribe(result => {
        this.cards = result.cards
      })
  }
}
