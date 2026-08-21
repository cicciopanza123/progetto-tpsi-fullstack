import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Prodotto } from '../models/prodotto.model';

@Injectable({
  providedIn: 'root'
})
export class ProdottoService {

  constructor(private http: HttpClient) {}

  getProdotti(): Observable<Prodotto[]> {
    return this.http.get<Prodotto[]>(
      'https://jubilant-disco-v6q997q996rjhpqx5-5000.app.github.dev/api/prodotti'
    );
  }

  getProdotto(id: number): Observable<Prodotto> {
    return this.http.get<Prodotto>(
      `https://jubilant-disco-v6q997q996rjhpqx5-5000.app.github.dev/api/prodotti/${id}`
    );
  }

}