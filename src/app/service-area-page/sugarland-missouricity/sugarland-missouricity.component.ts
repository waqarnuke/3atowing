import { Component } from '@angular/core';
import { SugarlandMissouricityserviceComponent } from '../sugarland-missouricityservice/sugarland-missouricityservice.component';
import { HeaderComponent } from '../../Components/header/header.component';
import { QuoteFormComponent } from '../../Components/quote-form/quote-form.component';
import { CoverageComponent } from '../../Components/coverage/coverage.component';
import { FooterComponent } from '../../Components/footer/footer.component';

@Component({
  selector: 'app-sugarland-missouricity',
  imports: [HeaderComponent,
        QuoteFormComponent,
        CoverageComponent,
        FooterComponent, SugarlandMissouricityserviceComponent],
  templateUrl: './sugarland-missouricity.component.html',
  styleUrl: './sugarland-missouricity.component.css'
})
export class SugarlandMissouricityComponent {

}
