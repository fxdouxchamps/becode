import { Component } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Becode';
  number1: number;
  number2: number;
  constructor(
    private appService: AppService) {
    this.appService.getNumbers()
        .subscribe(res => {
          this.number1 = res.number1;
          this.number2 = res.number2;
        });
  }
}
