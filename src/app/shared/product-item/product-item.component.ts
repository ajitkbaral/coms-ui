import { Component, OnInit, Input } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss'],
})
export class ProductItemComponent implements OnInit {
  @Input() product;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {}

  addToCart(event) {
    event.stopPropagation();
    this.cartService.addToCart(this.product);
  }
}
