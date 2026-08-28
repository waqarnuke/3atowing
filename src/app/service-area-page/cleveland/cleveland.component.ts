import { Component } from '@angular/core';

import { ClevelandserviceComponent } from "../clevelandservice/clevelandservice.component";
import { HeaderComponent } from '../../Components/header/header.component';
import { QuoteFormComponent } from '../../Components/quote-form/quote-form.component';
import { CoverageComponent } from '../../Components/coverage/coverage.component';
import { FooterComponent } from '../../Components/footer/footer.component';

@Component({
  selector: 'app-cleveland',
  imports: [HeaderComponent,
    QuoteFormComponent,
    CoverageComponent,
    FooterComponent, ClevelandserviceComponent],
  templateUrl: './cleveland.component.html',
  styleUrl: './cleveland.component.css'
})
export class ClevelandComponent {

}
