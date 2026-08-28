import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-quote-form',
  imports: [FormsModule],
  templateUrl: './quote-form.component.html',
  styleUrl: './quote-form.component.css'
})
export class QuoteFormComponent {
  pickup: string = '';
  dropoff: string = '';

getRoute() {
  if (!this.pickup || !this.dropoff) {
    alert('Please enter both pickup and drop-off addresses.');
    return;
  }

  // 🔥 Scroll to map
  const section = document.getElementById('coverage');
  if (section) {
    section.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }

  // 🔥 route trigger (map ke liye)
  window.dispatchEvent(
    new CustomEvent('routeRequest', {
      detail: {
        pickup: this.pickup,
        dropoff: this.dropoff
      }
    })
  );
}
}
