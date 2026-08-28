import { Component } from '@angular/core';
import { SplendoraserviceComponent } from "../splendoraservice/splendoraservice.component";
import { HeaderComponent } from '../../Components/header/header.component';
import { QuoteFormComponent } from '../../Components/quote-form/quote-form.component';
import { FooterComponent } from '../../Components/footer/footer.component';
import { CoverageComponent } from '../../Components/coverage/coverage.component';

@Component({
  selector: 'app-splendora',
  imports: [HeaderComponent,
    QuoteFormComponent,
    CoverageComponent,
    FooterComponent, SplendoraserviceComponent],
  templateUrl: './splendora.component.html',
  styleUrl: './splendora.component.css'
})
export class SplendoraComponent {

}
