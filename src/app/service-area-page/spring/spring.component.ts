import { Component } from '@angular/core';
import { SpringserviceComponent } from "../springservice/springservice.component";
import { HeaderComponent } from '../../Components/header/header.component';
import { QuoteFormComponent } from '../../Components/quote-form/quote-form.component';
import { CoverageComponent } from '../../Components/coverage/coverage.component';
import { FooterComponent } from '../../Components/footer/footer.component';

@Component({
  selector: 'app-spring',
  imports: [HeaderComponent,
    QuoteFormComponent,
    CoverageComponent,
    FooterComponent, SpringserviceComponent],
  templateUrl: './spring.component.html',
  styleUrl: './spring.component.css'
})
export class SpringComponent {

}
