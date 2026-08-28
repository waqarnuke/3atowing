import { Component } from '@angular/core';
import { HeaderComponent } from '../../Components/header/header.component';
import { QuoteFormComponent } from '../../Components/quote-form/quote-form.component';
import { CoverageComponent } from '../../Components/coverage/coverage.component';
import { FooterComponent } from '../../Components/footer/footer.component';
import { WestchaseserviceComponent } from '../westchaseservice/westchaseservice.component';

@Component({
  selector: 'app-westchase',
  imports: [HeaderComponent,
      QuoteFormComponent,
      CoverageComponent,
      FooterComponent, WestchaseserviceComponent],
  templateUrl: './westchase.component.html',
  styleUrl: './westchase.component.css'
})
export class WestchaseComponent {

}
