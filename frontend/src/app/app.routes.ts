import { Routes } from '@angular/router';
import { ListaProdotti } from './lista-prodotti/lista-prodotti';
import { DettaglioProdotto } from './dettaglio-prodotto/dettaglio-prodotto';
import { Carrello } from './carrello/carrello';

export const routes: Routes = [
  {
    path: '',
    component: ListaProdotti
  },
  {
    path: 'prodotto/:id',
    component: DettaglioProdotto
  },
  {
    path: 'carrello',
    component: Carrello
  }
];