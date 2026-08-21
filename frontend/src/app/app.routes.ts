import { Routes } from '@angular/router';
import { ListaProdotti } from './lista-prodotti/lista-prodotti';
import { DettaglioProdotto } from './dettaglio-prodotto/dettaglio-prodotto';
export const routes: Routes = [
  {
    path: '',
    component: ListaProdotti
  },
  {
    path: 'prodotto/:id',
    component: DettaglioProdotto
  }
];