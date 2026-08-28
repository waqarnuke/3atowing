import { Component } from '@angular/core';
import { Router,RouterOutlet } from '@angular/router';

import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './Components/header/header.component';
import { HeroComponent } from './Components/hero/hero.component';
import { QuoteFormComponent } from './Components/quote-form/quote-form.component';
import { CoverageComponent } from './Components/coverage/coverage.component';
import { ServicesComponent } from './Components/services/services.component';
import { FooterComponent } from './Components/footer/footer.component';


@Component({
  selector: 'app-root',
  imports: [FormsModule,RouterOutlet,
    HeaderComponent,
    HeroComponent,
    QuoteFormComponent,
    CoverageComponent,
    ServicesComponent,
    FooterComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Kaswa Towing Houston | 24/7 Roadside Assistance';
  constructor(public router: Router) {}
}
