import { Component } from '@angular/core';
import { MontroseserviceComponent } from '../montroseservice/montroseservice.component';
import { HeaderComponent } from '../../Components/header/header.component';
import { FooterComponent } from '../../Components/footer/footer.component';
import { QuoteFormComponent } from '../../Components/quote-form/quote-form.component';
import { CoverageComponent } from '../../Components/coverage/coverage.component';

@Component({
  selector: 'app-montrose',
  imports: [HeaderComponent,
      QuoteFormComponent,
      CoverageComponent,
      FooterComponent, MontroseserviceComponent],
  templateUrl: './montrose.component.html',
  styleUrl: './montrose.component.css'
})
export class MontroseComponent {

}
