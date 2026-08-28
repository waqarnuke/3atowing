import { Component } from '@angular/core';

import { KingwoodserviceComponent } from "../kingwoodservice/kingwoodservice.component";
import { HeaderComponent } from '../../Components/header/header.component';
import { QuoteFormComponent } from '../../Components/quote-form/quote-form.component';
import { FooterComponent } from '../../Components/footer/footer.component';
import { CoverageComponent } from '../../Components/coverage/coverage.component';

@Component({
  selector: 'app-kingwood',
  imports: [HeaderComponent,
    QuoteFormComponent,
    CoverageComponent,
    FooterComponent, KingwoodserviceComponent],
  templateUrl: './kingwood.component.html',
  styleUrl: './kingwood.component.css'
})
export class KingwoodComponent {

}
