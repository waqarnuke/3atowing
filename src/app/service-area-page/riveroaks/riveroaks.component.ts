import { Component } from '@angular/core';
import { HeaderComponent } from '../../Components/header/header.component';
import { QuoteFormComponent } from '../../Components/quote-form/quote-form.component';
import { CoverageComponent } from '../../Components/coverage/coverage.component';
import { FooterComponent } from '../../Components/footer/footer.component';
import { RiveroaksserviceComponent } from '../riveroaksservice/riveroaksservice.component';

@Component({
  selector: 'app-riveroaks',
  imports: [HeaderComponent,
      QuoteFormComponent,
      CoverageComponent,
      FooterComponent, RiveroaksserviceComponent],
  templateUrl: './riveroaks.component.html',
  styleUrl: './riveroaks.component.css'
})
export class RiveroaksComponent {

}
