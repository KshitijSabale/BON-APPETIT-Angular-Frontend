import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'BonAppetit';

  onActive(){
    window.scroll(0, 0);
  }
}

// extra space for workflow 4
