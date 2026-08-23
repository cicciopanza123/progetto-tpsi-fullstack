import { Component, OnInit, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProdottoService } from '../services/prodotto.service';
import { Prodotto } from '../models/prodotto.model';
import { CartService } from '../services/cart';

@Component({
  selector: 'app-lista-prodotti',
  imports: [RouterLink],
  templateUrl: './lista-prodotti.html',
  styleUrl: './lista-prodotti.css',
})
export class ListaProdotti implements OnInit {

  prodotti: Prodotto[] = [];

  loading = signal(true);

  constructor(
    private prodottoService: ProdottoService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {

    this.prodottoService.getProdotti().subscribe({
      next: (prodotti) => {
        this.prodotti = prodotti;
        this.loading.set(false);
      },
      error: (errore) => {
        console.error('Errore nel caricamento dei prodotti:', errore);
        this.loading.set(false);
      }
    });

  }

  aggiungiAlCarrello(prodotto: Prodotto): void {
    this.cartService.aggiungiProdotto(prodotto);
    console.log('CARRELLO:', this.cartService.getProdotti());
  }

}