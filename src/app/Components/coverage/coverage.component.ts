import { AfterViewInit, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as L from 'leaflet';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-coverage',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './coverage.component.html',
  styleUrl: './coverage.component.css'
})
export class CoverageComponent implements AfterViewInit {
  private map!: L.Map;
  distanceMiles: string = '';

  ngAfterViewInit(): void {
    this.initMap();

    window.addEventListener('routeRequest', (event: any) => {
      const { pickup, dropoff } = event.detail;
      this.handleRoute(pickup, dropoff);
    });
  }

  private initMap(): void {
    if (this.map) {
      this.map.remove();
    }

    const porterLat = 30.1041;
    const porterLng = -95.2258;

    this.map = L.map('coverageMap', {
      center: [porterLat, porterLng],
      zoom: 10,
      zoomControl: true
    });

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors'
    }).addTo(this.map);

    const marker = L.marker([porterLat, porterLng]).addTo(this.map);
    marker.bindPopup('<b>Kaswa Towing</b><br>Houston TX 77042').openPopup();

    L.circle([porterLat, porterLng], {
      radius: 25000,
      color: '#ff3b5c',
      fillColor: '#ff3b5c',
      fillOpacity: 0.15
    }).addTo(this.map);

    setTimeout(() => {
      this.map.invalidateSize();
    }, 300);
  }

  async geocode(address: string) {
    const res = await fetch(
      `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(address)}`
    );

    const data = await res.json();

    if (!data || data.length === 0) {
      throw new Error('Address not found');
    }

    return {
      lat: parseFloat(data[0].lat),
      lng: parseFloat(data[0].lon)
    };
  }

  private async handleRoute(pickup: string, dropoff: string) {
    try {
      const start = await this.geocode(pickup);
      const end = await this.geocode(dropoff);

      this.map.eachLayer((layer: any) => {
        if (
          layer instanceof L.Marker ||
          layer instanceof L.Polyline ||
          layer instanceof L.Circle
        ) {
          this.map.removeLayer(layer);
        }
      });

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors'
      }).addTo(this.map);

      L.marker([start.lat, start.lng]).addTo(this.map).bindPopup('Pickup');
      L.marker([end.lat, end.lng]).addTo(this.map).bindPopup('Drop-off');

      const routeRes = await fetch(
        `https://router.project-osrm.org/route/v1/driving/${start.lng},${start.lat};${end.lng},${end.lat}?overview=full&geometries=geojson`
      );

      const routeData = await routeRes.json();

      const distanceMeters = routeData.routes[0].distance;
      const miles = distanceMeters / 1609.34;
      this.distanceMiles = miles.toFixed(1);

      const routeCoords = routeData.routes[0].geometry.coordinates;
      const latLngs = routeCoords.map((coord: any) => [coord[1], coord[0]]);

      L.polyline(latLngs, {
        color: '#ff3b5c',
        weight: 5,
        opacity: 0.9
      }).addTo(this.map);

      this.map.fitBounds([
        [start.lat, start.lng],
        [end.lat, end.lng]
      ]);

      setTimeout(() => {
        this.map.invalidateSize();
      }, 300);
    } catch (error) {
      console.error('Route error:', error);
      alert('Address not found. Please enter a valid pickup and drop-off address.');
    }
  }
}
