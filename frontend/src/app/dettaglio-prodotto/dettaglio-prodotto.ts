import { Component, OnInit, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProdottoService } from '../services/prodotto.service';
import { Prodotto } from '../models/prodotto.model';
import { CartService } from '../services/cart';

@Component({
  selector: 'app-dettaglio-prodotto',
  imports: [],
  templateUrl: './dettaglio-prodotto.html',
  styleUrl: './dettaglio-prodotto.css',
})
export class DettaglioProdotto implements OnInit {

  id!: number;

  prodotto = signal<Prodotto | undefined>(undefined);

  constructor(
    private route: ActivatedRoute,
    private prodottoService: ProdottoService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));

    this.prodottoService.getProdotto(this.id).subscribe({
      next: (prodotto) => {
        this.prodotto.set(prodotto);
      },
      error: (errore) => {
        console.error('Errore nel caricamento del prodotto:', errore);
      }
    });
  }

  aggiungiAlCarrello(): void {
    const prodotto = this.prodotto();

    if (prodotto) {
      this.cartService.aggiungiProdotto(prodotto);
      console.log('Prodotto aggiunto al carrello:', prodotto);
    }
  }

}