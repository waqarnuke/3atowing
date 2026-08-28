import { Component } from '@angular/core';
import { PorterserviceComponent } from "../porterservice/porterservice.component";
import { HeaderComponent } from '../../Components/header/header.component';
import { CoverageComponent } from '../../Components/coverage/coverage.component';
import { QuoteFormComponent } from '../../Components/quote-form/quote-form.component';
import { FooterComponent } from '../../Components/footer/footer.component';

@Component({
  selector: 'app-porter',
  imports: [HeaderComponent,
    QuoteFormComponent,
    CoverageComponent,
    FooterComponent, PorterserviceComponent],
  templateUrl: './porter.component.html',
  styleUrl: './porter.component.css'
})
export class PorterComponent {

}
