import { Component } from '@angular/core';

@Component({
  selector: 'app-data-display',
  templateUrl: './data-display.component.html',
  styleUrls: ['./data-display.component.css']
})
export class DataDisplayComponent {
  integerData: number = 60;
  stringData: string = 'Hello, World!';
  dateData: Date = new Date();
}
