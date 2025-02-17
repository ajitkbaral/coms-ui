import { Component, OnInit, Input } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { Product } from 'src/app/interface/interface';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss'],
})
export class ProductItemComponent implements OnInit {
  @Input() product: Product;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {}

  addToCart(event) {
    event.stopPropagation();
    this.cartService.addToCart(this.product);
  }

  addedToCart(id: string): boolean {
    return (
      this.cartService.getItems().filter((item) => item._id === id).length > 0
    );
  }

  removeFromCart(id: string): void {
    this.cartService.removeFromCart(id);
  }
}
