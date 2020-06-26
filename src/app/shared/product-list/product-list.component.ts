import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/interface/interface';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  @Input() products: Array<Product>;

  constructor() {}

  ngOnInit(): void {}
}
