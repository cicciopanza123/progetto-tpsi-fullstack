import { Component } from '@angular/core';
import { CartService } from '../services/cart';

@Component({
  selector: 'app-carrello',
  imports: [],
  templateUrl: './carrello.html',
  styleUrl: './carrello.css',
})
export class Carrello {

  constructor(public cartService: CartService) {}

}