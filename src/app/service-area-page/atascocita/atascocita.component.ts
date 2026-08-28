import { Component } from '@angular/core';

import { AtascocitaserviceComponent } from "../atascocitaservice/atascocitaservice.component";
import { HeaderComponent } from '../../Components/header/header.component';
import { CoverageComponent } from '../../Components/coverage/coverage.component';
import { QuoteFormComponent } from '../../Components/quote-form/quote-form.component';
import { FooterComponent } from '../../Components/footer/footer.component';

@Component({
  selector: 'app-atascocita',
  imports: [HeaderComponent,
    QuoteFormComponent,
    CoverageComponent,
    FooterComponent, AtascocitaserviceComponent],
  templateUrl: './atascocita.component.html',
  styleUrl: './atascocita.component.css'
})
export class AtascocitaComponent {

}
