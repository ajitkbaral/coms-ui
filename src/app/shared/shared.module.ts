import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { MapComponent } from './map/map.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { CartComponent } from './cart/cart.component';
import { ProfileViewComponent } from './profile-view/profile-view.component';
import { ShippingFormComponent } from './shipping-form/shipping-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AlertComponent } from './alert/alert.component';

@NgModule({
  declarations: [
    NavbarComponent,
    MapComponent,
    ProductListComponent,
    ProductItemComponent,
    CartComponent,
    ProfileViewComponent,
    ShippingFormComponent,
    AlertComponent,
  ],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [
    NavbarComponent,
    MapComponent,
    ProductListComponent,
    CartComponent,
    ProfileViewComponent,
    ShippingFormComponent,
    AlertComponent,
  ],
})
export class SharedModule {}
