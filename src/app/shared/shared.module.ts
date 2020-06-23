import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { MapComponent } from './map/map.component';

@NgModule({
  declarations: [NavbarComponent, MapComponent],
  imports: [CommonModule],
  exports: [NavbarComponent, MapComponent],
})
export class SharedModule {}
