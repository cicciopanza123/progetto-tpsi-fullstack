import { Injectable, signal } from '@angular/core';
import { Prodotto } from '../models/prodotto.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {

  prodotti = signal<Prodotto[]>([]);

  aggiungiProdotto(prodotto: Prodotto): void {
    this.prodotti.update(prodotti => [...prodotti, prodotto]);
  }

  getProdotti(): Prodotto[] {
    return this.prodotti();
  }

}