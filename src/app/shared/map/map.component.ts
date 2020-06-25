import { Component, OnInit, Input } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements OnInit {
  private map;

  @Input() latitude;
  @Input() longitude;

  constructor() {}

  ngOnInit(): void {
    this.buildMap();
    this.buildMapTiles();
    this.addMarkerToMap();
  }

  private buildMap() {
    this.map = L.map('map', {
      center: [this.latitude, this.longitude],
      zoom: 15,
    });
  }

  private buildMapTiles() {
    const tiles = L.tileLayer(
      'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      {
        maxZoom: 19,
        attribution:
          '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      }
    );
    tiles.addTo(this.map);
  }

  private addMarkerToMap() {
    const marker = new L.Marker([this.latitude, this.longitude]);
    marker.addTo(this.map);
  }
}
