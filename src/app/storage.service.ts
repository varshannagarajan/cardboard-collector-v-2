import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { Card } from './card';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  private _storage: Storage | null = null;

  constructor(private storage: Storage) {
    this.init();
  }

  async init() {
    const storage = await this.storage.create();
    this._storage = storage;
  }

  public addCard(key: string, value: Card) {
    this._storage?.set(key, value);
  }

  public getCards(): Card[] {
    let storedCards: Card[] = [];
    if (this._storage != null) {
      this._storage.forEach(card => {
        storedCards.push(card)
      })
    }
    return storedCards
  }

  public async deleteCard(card: Card) {
    await this._storage.remove(card.id);
  }
}
