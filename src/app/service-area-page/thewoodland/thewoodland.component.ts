import { Component } from '@angular/core';

import { ThewoodlandserviceComponent } from "../thewoodlandservice/thewoodlandservice.component";
import { HeaderComponent } from '../../Components/header/header.component';
import { QuoteFormComponent } from '../../Components/quote-form/quote-form.component';
import { CoverageComponent } from '../../Components/coverage/coverage.component';
import { FooterComponent } from '../../Components/footer/footer.component';

@Component({
  selector: 'app-thewoodland',
  imports: [HeaderComponent,
    QuoteFormComponent,
    CoverageComponent,
    FooterComponent, ThewoodlandserviceComponent],
  templateUrl: './thewoodland.component.html',
  styleUrl: './thewoodland.component.css'
})
export class ThewoodlandComponent {

}
