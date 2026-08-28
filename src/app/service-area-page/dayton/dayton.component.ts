import { Component } from '@angular/core';

import { DaytonserviceComponent } from "../daytonservice/daytonservice.component";
import { HeaderComponent } from '../../Components/header/header.component';
import { QuoteFormComponent } from '../../Components/quote-form/quote-form.component';
import { CoverageComponent } from '../../Components/coverage/coverage.component';
import { FooterComponent } from '../../Components/footer/footer.component';

@Component({
  selector: 'app-dayton',
  imports: [HeaderComponent,
    QuoteFormComponent,
    CoverageComponent,
    FooterComponent, DaytonserviceComponent],
  templateUrl: './dayton.component.html',
  styleUrl: './dayton.component.css'
})
export class DaytonComponent {

}
