import { Component } from '@angular/core';

import { HuffmanserviceComponent } from "../huffmanservice/huffmanservice.component";
import { HeaderComponent } from '../../Components/header/header.component';
import { QuoteFormComponent } from '../../Components/quote-form/quote-form.component';
import { CoverageComponent } from '../../Components/coverage/coverage.component';
import { FooterComponent } from '../../Components/footer/footer.component';

@Component({
  selector: 'app-huffman',
  imports: [HeaderComponent,
    QuoteFormComponent,
    CoverageComponent,
    FooterComponent, HuffmanserviceComponent],
  templateUrl: './huffman.component.html',
  styleUrl: './huffman.component.css'
})
export class HuffmanComponent {

}
