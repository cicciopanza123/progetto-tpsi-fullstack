import { Component, OnInit, signal } from '@angular/core';
import { ProdottoService } from '../services/prodotto.service';
import { Prodotto } from '../models/prodotto.model';

@Component({
  selector: 'app-lista-prodotti',
  imports: [],
  templateUrl: './lista-prodotti.html',
  styleUrl: './lista-prodotti.css',
})
export class ListaProdotti implements OnInit {

  prodotti: Prodotto[] = [];

  loading = signal(true);

  constructor(private prodottoService: ProdottoService) {

  }

  ngOnInit(): void {

  this.prodottoService.getProdotti().subscribe({
   next: (prodotti) => {

  this.prodotti = prodotti;
  this.loading.set(false);

  console.log('LOADING:', this.loading);
},
}
)
}
}
