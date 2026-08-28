import { Component } from '@angular/core';
import { HumbleserviceComponent } from "../humbleservice/humbleservice.component";
import { HeaderComponent } from '../../Components/header/header.component';
import { QuoteFormComponent } from '../../Components/quote-form/quote-form.component';
import { CoverageComponent } from '../../Components/coverage/coverage.component';
import { FooterComponent } from '../../Components/footer/footer.component';


@Component({
  selector: 'app-humble',
  imports: [HeaderComponent,
    QuoteFormComponent,
    CoverageComponent,
    FooterComponent, HumbleserviceComponent],
  templateUrl: './humble.component.html',
  styleUrl: './humble.component.css'
})
export class HumbleComponent {

}
