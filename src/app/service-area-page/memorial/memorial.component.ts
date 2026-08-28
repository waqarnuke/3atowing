import { Component } from '@angular/core';
import { MemorialserviceComponent } from '../memorialservice/memorialservice.component';
import { HeaderComponent } from '../../Components/header/header.component';
import { QuoteFormComponent } from '../../Components/quote-form/quote-form.component';
import { CoverageComponent } from '../../Components/coverage/coverage.component';
import { FooterComponent } from '../../Components/footer/footer.component';

@Component({
  selector: 'app-memorial',
  imports: [HeaderComponent,
      QuoteFormComponent,
      CoverageComponent,
      FooterComponent, MemorialserviceComponent],
  templateUrl: './memorial.component.html',
  styleUrl: './memorial.component.css'
})
export class MemorialComponent {

}
